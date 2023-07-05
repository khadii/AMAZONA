import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';
export default function Product(props){const{product}=props;
    return (
<div key={product._id}class="card">   <Link to={`/product/${product._id}`}>
                <img src={product.image} alt="product"/>
            </Link>
            <div class="card-body">
                <Link to={`/product/${product._id}`}><h2>{product.name}</h2> </Link>
        
           <Rating rating={product.rating}  numreveiws={product.numreviews}
           ></Rating>
            <div class="price"><h1>{product.price}</h1></div></div>      
        </div>)
}