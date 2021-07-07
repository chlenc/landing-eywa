import styled from "@emotion/styled";
import React from "react";
import comment from "@assets/img/eywa-comment-icon.svg";
import { ReactComponent as Details } from "@assets/img/details-dots.svg";
import { Column, Row } from "@components/flex";

interface IProps {
  username?: string;
  minutes?: number;
  likes?: number;
  comments?: number;
}

const Root = styled.div`
  display: flex;
  //flex-direction: column;
  max-width: 410px;
`;

const Name = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #0f1419;
`;
const Username = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;

  color: #5b7083;
`;
const Text = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: #0f1419;
`;
const Icon = styled.img`
  width: 48px;
  height: 48px;
  padding: 0 12px;
`;
const UserDetails = styled(Row)`
  & > * {
    margin-right: 4px;
  }
`;
const Comment: React.FC<IProps> = ({ username = "eywa", minutes = 1 }) => {
  return (
    <Root>
      <Icon src={comment} alt="icon" />
      <Column>
        <UserDetails alignItems="center">
          <Name>{username.toUpperCase()}</Name>
          <Username>@{username}</Username>
          <Username>{minutes} min</Username>
          <Details />
        </UserDetails>
        <Text>
          EYWA is doing major work on Community-Driven Design, with several
          different variants. If you are working in this area, submit a paper to
          the DIS conference here in San Diego (see DesignLab posting below)....
          <span style={{ color: "#1DA1F2" }}>
            https://facebook.com/don.norman.18/...
          </span>
        </Text>
      </Column>
    </Root>
  );
};
export default Comment;
