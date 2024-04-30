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
      <ul css={grid}>
        {
          prefecture.map((prefecture) => (
            <li key={prefecture.prefCode} css={gridItem}><label css={inputButton}><input type="checkbox" name="" value={prefecture.prefCode} onChange={addPrefectureCodeHandler} /><span css={text}>{prefecture.prefName}</span></label></li>
          ))
        }
      </ul>
    </>
  )
}

const grid = css`
  --size: 125px;
  --gap: 12px;
  display: grid;
  gap: var(--gap);
  grid-template-columns: repeat(auto-fit,minmax(var(--size),1fr));
`

const gridItem = css`
  border: 1px solid #cfcfcf;
  border-radius: 4px;
`

const inputButton = css`
  padding: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
`

const text = css`
  display: inline-block;
  padding-left: 8px;
`

export default CheckPrefectures