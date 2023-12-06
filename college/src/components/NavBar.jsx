import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = styled(AppBar)`
  background: #111111;
  position: static;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  text-decoration: none;
  color: inherit;
`;

const NavBar = () => {
  return (
    <Header>
      <Toolbar>
        <Tabs to="/">MyCollege</Tabs>
        <Tabs to="/all">AllUsers</Tabs>
        <Tabs to="add">AddUsers</Tabs>
      </Toolbar>
    </Header>
  );
};
export default NavBar;
