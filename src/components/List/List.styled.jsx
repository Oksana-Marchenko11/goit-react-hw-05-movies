import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkMovies = styled(Link)`
  color: darkblue;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #951d08;
  }
`;

export const MovieItem = styled.dt`
  margin-bottom: 8px;
`;
