import { css } from '@emotion/react';

const Copyright = () => {
  return (
    <small css={copy}>
      © 2024 yuki-akiduki <br />
      <a href="https://github.com/yuki-akiduki" target="_blank">
        github.com/yuki-akiduki
      </a>
    </small>
  );
};

const copy = css`
  font-size: 14px;
  margin-top: 32px;
  margin-bottom: 32px;
  text-align: center;
  line-height: 1.8;
  display: block;
  a {
    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Copyright;
