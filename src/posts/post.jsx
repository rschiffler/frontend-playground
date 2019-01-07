// Libraries
import React from 'react';
import styled from 'styled-components';

const StyledPost = styled.div`
  background-color: ${props => props.theme.white}
  padding: ${props => props.theme.paddingLarge}
  margin: ${props => props.theme.paddingLarge} 0
`

const post = (props) => {
  return (
    <StyledPost>
      <h2>{props.id}: {props.title}</h2>
      <p>{props.body}</p>
    </StyledPost>
  )
}

export default post;