import styled from "@emotion/styled";
import React from "react";
import Header from "@pages/MainScreen/Header";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainScreen: React.FC<IProps> = () => {
  return (
    <Root>
      <Header />
    </Root>
  );
};
export default MainScreen;
