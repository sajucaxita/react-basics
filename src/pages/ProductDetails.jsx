import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            product
        </div>
    );
}

export default ProductDetails;
