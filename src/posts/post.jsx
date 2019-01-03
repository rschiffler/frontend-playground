import React from 'react';

const post = (props) => {
  return (
    <div>
      <h2>{props.id}: {props.title}</h2>
      <p>{props.body}</p>
    </div>
  )
}

export default post;