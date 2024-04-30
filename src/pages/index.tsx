import Head from "next/head";
import HeadingLv1 from '@/components/ui/HeadingLv1';
import Graph from '@/components/ui/Graph';
import CheckPrefectures from '@/components/ui/CheckPrefectures';

import axios from 'axios';
import { useState } from 'react';



export default function Home() {

  const [prefectureCode, setPrefectureCode] = useState<number[]>([])

  return (
    <>
      <Head>
        <title>テスト</title>
        <meta name="description" content="テスト・テストテスト" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section>
        <HeadingLv1 text="人口推移表" />
        <Graph code = {prefectureCode} />
        <CheckPrefectures setPrefectureCode = {setPrefectureCode}  />
      </section>
    </>
  );
}
