import styled from 'styled-components';

export const Titulo = styled.h1`
  color: ${(props) => (props.color ? 'red' : 'blue')};
`;
