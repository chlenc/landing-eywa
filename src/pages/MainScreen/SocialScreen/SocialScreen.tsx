import styled from "@emotion/styled";
import React from "react";
import { Row } from "@components/flex";
import MainCard from "@pages/MainScreen/SocialScreen/MainCard";
import SocialIcons from "@components/SocialIcons";
import Comment from "@pages/MainScreen/SocialScreen/Comment";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: #03011f;
  padding: 90px 0 100px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 62px;

  text-align: center;
  letter-spacing: 1px;

  color: #ffffff;
  padding-bottom: 50px;
`;

const LearMore = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 34px;
  color: #3bc199;
  cursor: pointer;
`;
const SocialWrapper = styled(Row)`
  background: #ffffff;
  border-radius: 8px;
  max-width: 1307px;
  padding: 22px 4px;
  margin: 17px;
`;

const SocialScreen: React.FC<IProps> = () => {
  return (
    <Root>
      <Title>Join EYWA</Title>
      <Row justifyContent="center">
        <MainCard
          title="Community"
          subtitle="Learn more about EYWA, chat with the team, and be the part of our growing community."
        >
          <SocialIcons />
        </MainCard>
        <MainCard
          title="EYWA Relayers Network launch program"
          subtitle="Participate in the protocol Beta testing and get extra rewards."
        >
          <LearMore onClick={() => console.log("lol")}>Learn more</LearMore>
        </MainCard>
      </Row>
      <SocialWrapper>
        <Comment />
        <Comment />
        <Comment />
      </SocialWrapper>
    </Root>
  );
};
export default SocialScreen;
