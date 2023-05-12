import React from 'react';

const Item = ({item}) => {
    return (
        <div>
            <img src={item.image} alt='item' />
            <p>{item.name}</p>
        </div>
    );
}
 
export default Item;