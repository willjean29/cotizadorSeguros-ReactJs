import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
  background-color: #26c6da;
  padding: 10px 0;
  font-weight: bold;
  color: #fff;
`;

const TextHeader = styled.h1`
  font-size: 2em;
  margin: 0;
  font-family: 'Silabo 27px', serif;
  text-align: center;
`;

const Header = ({titulo}) => {
  return (  
    <ContenedorHeader>
      <TextHeader>{titulo}</TextHeader>
    </ContenedorHeader>
  );
}
 
export default Header;