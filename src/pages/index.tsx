import Head from "next/head";
import Headinglv1 from '@/components/ui/Headinglv1';

export default function Home() {
  return (
    <>
      <Head>
        <title>テスト</title>
        <meta name="description" content="テスト・テストテスト" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css"
        />
      </Head>
      <section>
        <Headinglv1 text="人口推移表" />
      </section>
    </>
  );
}
