import { useEffect, useState } from 'react';
import { css } from "@emotion/react";
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

type Props = {
  code: number[];
  prefecture: {
    prefCode: number;
    prefName: string;
  }[];
}

type PopulationData = {
  year: number;
  value: string;
};

const Graph = ({code,prefecture}:Props) => {

  // グラフデータ格納
  const [populationData, setPopulationData] = useState<{ [key: string]: PopulationData[] }>({});

  // グラフデータ取得
  useEffect(() => {
    const fetchData = async () => {
      const newData: { [key: string]: PopulationData[] } = {};
      for(const codeItem of code) {
        const res = await axios.get(`/api/population?prefCode=${codeItem}`);
        newData[codeItem] = res.data.result.data[0].data;
      }
      setPopulationData(newData);
    };
    fetchData();
  }, [code]);

  // グラフオプション
  const options: Highcharts.Options = {
    title: {
      text: '人口推移の折れ線グラフ'
    },
    yAxis: {
      title: {
        text: "人口構成比（%）"
      }
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointInterval: 5,
        pointStart: 1960,
      },
    },
    series:code.length === 0 ? [{ type: "line", name: "都道府県名", data: [] }] : Object.keys(populationData).map(key => ({
      name: prefecture[parseInt(key) - 1].prefName,
      data: populationData[key].map(item => [item.year, item.value]),
      type: 'line',
    }))
  }

  return (
    <div css={sticky}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

const sticky = css`
  @media screen and (max-width: 834px) {
    position: sticky;
    top: 0;
    left: 0;
  }
`

export default Graph;