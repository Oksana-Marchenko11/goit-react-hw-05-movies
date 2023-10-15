import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  height: 40px;
  width: 120px;
  background-color: darkblue;
  color: rgb(247, 210, 79);
  border-radius: 4px;
  border: 2px solid darkblue;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;

  &:hover {
    color: #951d08;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 24px;
`;

export const LinkInfo = styled(Link)`
  color: darkblue;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #951d08;
  }
`;
