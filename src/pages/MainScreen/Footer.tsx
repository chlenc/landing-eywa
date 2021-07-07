import styled from "@emotion/styled";
import React from "react";
import { Column, Row } from "@components/flex";
import { ReactComponent as Logo } from "@assets/img/footer-logo.svg";
import { ReactComponent as Facebook } from "@assets/img/facebook.svg";
import { ReactComponent as Telegram } from "@assets/img/telegram.svg";
import { ReactComponent as Twitter } from "@assets/img/twitter.svg";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 54px 80px;
  justify-content: space-between;
`;
const Title = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #060142;
`;
const Subtitle = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  color: #060142;
`;

const Footer: React.FC<IProps> = () => {
  return (
    <Root>
      <Column>
        <Logo />
        <Title>Crosschain liquidity AMM DEX and bridge protocol</Title>
        <Title>Copyright 2021 EYWA.FI</Title>
      </Column>
      <Row>
        <Column>
          <Title>General</Title>
          <Subtitle>About</Subtitle>
          <Subtitle>Team</Subtitle>
          <Subtitle>Career</Subtitle>
        </Column>
        <Column>
          <Title>Technology</Title>
          <Subtitle>Documentation</Subtitle>
          <Subtitle>Roadmap</Subtitle>
          <Subtitle>White Paper</Subtitle>
          <Subtitle>Pitch Desk</Subtitle>
        </Column>
        <Column>
          <Title>Community</Title>
          <Subtitle>Governance</Subtitle>
          <Subtitle>Blog</Subtitle>
          <Subtitle>Medium</Subtitle>
        </Column>
        <Column>
          <Row>
            <Facebook />
            <Telegram />
            <Twitter />
          </Row>
          <Row>
            <Title>RU</Title>
            <Title>ENG</Title>
          </Row>
        </Column>
      </Row>
    </Root>
  );
};
export default Footer;
