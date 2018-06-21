import React from 'react';

export const Item = (props) => (<li onClick={() => props.onClick(props.index)}>{props.item}</li>)