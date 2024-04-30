import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';


const fetchPrefectures =  async (req: NextApiRequest, res: NextApiResponse) => {
  const url = "https://opendata.resas-portal.go.jp/api/v1/prefectures";

  try {
    const apiRes = await axios.get(url, {
      headers : {
        'X-API-KEY': process.env.RESAS_API_KEY
      }
    });
    res.status(200).json(apiRes.data);
  } catch (error) {
    console.error('RESAS API error:', error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}

export default fetchPrefectures;