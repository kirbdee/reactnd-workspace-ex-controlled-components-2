import React from 'react';
import {Item} from './Item';

export const ItemList = (props) => (
   <div>
    <p className="items">{props.listName}</p>
    <ol className="item-list">
        {props.items.map((item, index) => <Item key={index} index={index} item={item} onClick={props.onClick}/>)}
    </ol>
    </div>
);