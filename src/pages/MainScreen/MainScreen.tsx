import styled from "@emotion/styled";
import React from "react";
import Header from "@pages/MainScreen/Header";
import Footer from "@pages/MainScreen/Footer";
import UserExperience from "@pages/MainScreen/UserExperience";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainScreen: React.FC<IProps> = () => {
  return (
    <Root>
      <Header />
      <UserExperience />
      <Footer />
    </Root>
  );
};
export default MainScreen;
