import Head from "next/head";
import HeadingLv1 from '@/components/ui/HeadingLv1';
import Graph from '@/components/ui/Graph';
import CheckPrefectures from '@/components/ui/CheckPrefectures';

import axios from 'axios';
import { useState, useEffect } from 'react';

type PrefecturesData = {
  prefCode: number;
  prefName: string;
};

export default function Home() {
  const [prefecture, setPrefecture] = useState<PrefecturesData[]>([])

  const [prefectureCode, setPrefectureCode] = useState<number[]>([])


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
        <title>テスト</title>
        <meta name="description" content="テスト・テストテスト" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>
        <HeadingLv1 text="人口推移表" />
        <Graph code = {prefectureCode} prefecture = {prefecture} />
        <CheckPrefectures setPrefectureCode = {setPrefectureCode} prefecture = {prefecture} />
      </section>
    </>
  );
}
