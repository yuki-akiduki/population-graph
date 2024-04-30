import { css } from "@emotion/react";
import Head from "next/head";
import HeadingLv1 from '@/components/ui/HeadingLv1';
import Graph from '@/components/ui/Graph';
import CheckPrefectures from '@/components/ui/CheckPrefectures';
import Copyright from '@/components/ui/Copyright';
import axios from 'axios';
import { useState, useEffect } from 'react';

type PrefecturesData = {
  prefCode: number;
  prefName: string;
};

export default function Home() {
  // 都道府県データ格納
  const [prefecture, setPrefecture] = useState<PrefecturesData[]>([])
  // 表示させる都道府県
  const [prefectureCode, setPrefectureCode] = useState<number[]>([])

  // 都道府県データ取得
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/prefectures');
      setPrefecture(res.data.result);
    }
    fetchData()
  },[]);


  return (
    <>
      <Head>
        <title>都道府県別 人口推移表</title>
        <meta name="description" content="各都道府県の人口推移をグラフで表したサイト" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main css={globalArea}>
        <div css={contentsArea}>
          <section>
            <HeadingLv1 text="人口推移表" />
            <Graph code = {prefectureCode} prefecture = {prefecture} />
            <CheckPrefectures setPrefectureCode = {setPrefectureCode} prefecture = {prefecture} />
          </section>
        </div>
        <Copyright />
      </main>

    </>
  );
}

const globalArea = css`
  margin-left: 24px;
  margin-right: 24px;
`

const contentsArea = css`
  max-width: 1024px;
  margin-inline: auto;
`