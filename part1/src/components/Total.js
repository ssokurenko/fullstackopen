import React from 'react';

export const Total = props => {
  return (
    <p>
      Number of excercises: {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  )
}
