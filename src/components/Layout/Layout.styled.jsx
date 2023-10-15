import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  border-bottom: solid 2px darkblue;
  box-shadow: 0px 1px #951d08;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 14px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 28px;
  color: black;
  text-shadow: 1px 1px #951d08;

  &:hover {
    color: #951d08;
  }
`;
