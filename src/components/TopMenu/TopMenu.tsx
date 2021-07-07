import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as Logo } from "@assets/img/logo.svg";
import { Link } from "react-router-dom";
interface IProps {}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 37px 40px 0 40px;
  align-items: center;
  justify-content: space-between;
`;

const MenuLink = styled(Link)`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));
  color: #444;
`;

const Box = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  width: min-content;
`;

const TopMenu: React.FC<IProps> = () => {
  return (
    <Root>
      <Link to="/">
        <Logo />
      </Link>
      <ItemsContainer>
        {/*<Box>test</Box>*/}
        {/*<Box>test</Box>*/}
        {/*<Box>test</Box>*/}
        {/*<Box>test</Box>*/}
        {/*<Box>test</Box>*/}
        {/*<Box>test</Box>*/}
        {/*<MenuLink to="/">ABOUT</MenuLink>*/}
        {/*<MenuLink to="/">TECHNOLOGY</MenuLink>*/}
        {/*<MenuLink to="/">COMmUNITY</MenuLink>*/}
        {/*<MenuLink to="/">GITHUB</MenuLink>*/}
        {/*<MenuLink to="/">CONTACTS</MenuLink>*/}
      </ItemsContainer>
    </Root>
  );
};
export default TopMenu;
