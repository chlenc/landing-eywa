import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as Logo } from "@assets/img/logo.svg";
interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 37px 40px 0 40px;
  align-items: center;
  justify-content: center;
`;

const TopMenu: React.FC<IProps> = () => {
  return (
    <Root>
      <Logo />
    </Root>
  );
};
export default TopMenu;
