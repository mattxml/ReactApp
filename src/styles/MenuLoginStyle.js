import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
export const MenuList = styled.li`
  cursor: pointer;
  box-sizing: border-box;
  color: black;
  text-decoration: none;
  margin-right: 2em;
  padding: 0 0 1em 0;

  :hover {
    font-weight: bold;
  }
`;
export const MenuListLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
export const MenuUnorderedList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
`;
export const NavOrderedList = styled.ol`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export const UserMenuList = styled.ul`
  list-style: none;
  cursor: pointer;
  padding: 0;
`;

export const UserName = styled.p`
  padding: 1em;
  box-sizing: border-box;
  text-align: center;
  background: #b5f4d2;
  transition: border-radius 0.3s;
  :hover {
    border-radius: 20px;
  }
`;
export const UserOption = styled.li`
  color: white;
  transition: color 4s;
  ${props =>
    props.expanded &&
    css`
      color: black;
    `};
`;
