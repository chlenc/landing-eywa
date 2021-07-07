import styled from "@emotion/styled";
import React from "react";

interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 50px;

  text-align: center;
  letter-spacing: 0.01em;
  color: #03011f;
`;

const Subtitle = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 34px;

  text-align: center;
  letter-spacing: 0.01em;

  color: #03011f;
`;

const UserExperience: React.FC<IProps> = () => {
  return (
    <Root>
      <Title>Better User Experience</Title>
      <Subtitle>
        Single platform that allows for multiple chains. We believe that
        ultimately, decentralized apps will rely on the execution of multiple
        smart contracts, across multiple blockchains.
      </Subtitle>
    </Root>
  );
};
export default UserExperience;
