import styled from "@emotion/styled";
import React from "react";
import TopMenu from "@components/TopMenu";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: #03011f;
`;

const Header: React.FC<IProps> = () => {
  return (
    <Root>
      <TopMenu />
    </Root>
  );
};
export default Header;
