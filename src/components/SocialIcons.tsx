import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "@assets/img/facebook.svg";
import { ReactComponent as TelegramIcon } from "@assets/img/telegram.svg";
import { ReactComponent as TwitterIcon } from "@assets/img/twitter.svg";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    margin-right: 16px;
  }

  & > :last-of-type {
    margin-right: 0;
  }
`;

const SocialIcons: React.FC<IProps> = () => {
  return (
    <Root>
      <Link to="/">
        <FacebookIcon />
      </Link>
      <Link to="/">
        <TelegramIcon />
      </Link>
      <Link to="/">
        <TwitterIcon />
      </Link>
    </Root>
  );
};
export default SocialIcons;
