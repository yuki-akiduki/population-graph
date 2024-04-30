import { css } from "@emotion/react";

type Props = {
  setPrefectureCode: React.Dispatch<React.SetStateAction<number[]>>;
  prefecture: {
    prefCode: number;
    prefName: string;
  }[];
}


const CheckPrefectures = ({setPrefectureCode,prefecture}:Props) => {

  // 表示するグラフの都道府県
  const addPrefectureCodeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked === true) {
      setPrefectureCode((prev) => [...prev, parseInt(e.target.value)])
    } else {
      setPrefectureCode((prev) => prev.filter((prev) => prev !== parseInt(e.target.value)));
    }
  }

  return (
    <>
      <ul>
        {
          prefecture.map((prefecture) => (
            <li key={prefecture.prefCode}><label><input type="checkbox" name="" value={prefecture.prefCode} onChange={addPrefectureCodeHandler} />{prefecture.prefName}</label></li>
          ))
        }
      </ul>
    </>
  )
}

export default CheckPrefectures