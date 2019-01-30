import React from 'react'


const isOperator = val => {
  return !isNaN(val) || val === '.' || val === '=';
}

export const Button = props => {
  return(
    <div className={`button-wrapper ${isOperator(props.children) ? null : 'operator'}`}>
      {props.children}
    </div>
  )
}
