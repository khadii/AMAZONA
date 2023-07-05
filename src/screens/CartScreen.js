import React from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import {useDispatch} from 'react-redux'
import { addToCart } from "../Actions/CartActions";
import { Alert } from '@mui/material';


export default function CartScreen(props){
    const location = useLocation();
    const {id}=useParams()
  const Qty= location.state.Qty
    const dispatch=useDispatch();
    useEffect(()=>{
        if({id}){
            dispatch(addToCart({id},{Qty}));
        }
    },[dispatch,id,Qty]
    );
    // console.log(Error)
    // Qty={location.pathname} TRYING TOBGET path
    // y={location.state.Qty} TRYINGN TO GET state
    return(
    <div>
   <Alert variant="filled" severity="success">
 successfully added to cart
</Alert>
    
    </div>)
}