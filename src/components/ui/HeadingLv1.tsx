import { css } from "@emotion/react";

type Props = {
  text: string;
}

const HeadingLv1 = ({text}: Props) => {
  return (
    <h1 css={headingStyle}>{text}</h1>
  )
}

const headingStyle = css`
  text-align: center;
  font-size: 48px;
  margin-top: 64px;
  font-weight: 700;
  margin-bottom: 28px;
`


export default HeadingLv1