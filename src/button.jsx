// Libraries
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.input`
  border: solid 1px transparent;
  background-color: ${props => props.theme.blue};
  color: ${props => props.theme.white};
  font-size: .875em;
  padding: .75em 1em;
  cursor: pointer;
  
  &:hover,
  &:focus {
    background-color: ${props => props.theme.green};
  }
`

const Button = (props) => {
  return (
    <StyledButton {...props} />
  )
}

export default Button;