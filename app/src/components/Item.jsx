import React, { useEffect } from 'react';

const Item = ({prop}) => {
   useEffect(()=>{
    
    console.log('render');
   },[])
    return (
        <div>
            {prop}
        </div>
    );
}

export default Item;
