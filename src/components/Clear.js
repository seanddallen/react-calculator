import React from 'react';

export const Clear = props => {
  return (
    <div className="clear-btn" onClick={props.handleClear}>
      {props.children}
    </div>
  )
}
