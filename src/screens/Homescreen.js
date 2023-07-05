import React, { useEffect } from'react';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import {useDispatch, useSelector} from 'react-redux';
import {listproducts} from '../Actions/ProductActions';
export default function Homescreen() {
const dispatch= useDispatch()
const productList= useSelector((state)=>state.productList);
// YOU ARE DEFINING THE PROPERTIES YOU ARE BRINGING IN THROUGH THIS  const productList ABOVE THTAS WHY THEY ARE SAME NAME BELOW const { loading, error, products} =productList; WHILE THE FIRST PRODUCTLIST IS THE ONE DEFINED IN THE STORE REDUCER STATE
const { loading, error, products} =productList;
useEffect(()=>{
 dispatch(listproducts())
}, [dispatch]);
    return(
      <div>{loading?<LoadingBox></LoadingBox>: error? <MessageBox variant='danger'>{error}</MessageBox>: <div><div className="row center">
      {
        products.map((product) =>(<Product  key={product._id} product={product}></Product>))
      }
       
     </div></div>}</div>
       
    );
}