import React, { useEffect, useState } from "react";
import { Button,Dialog,DialogActions,DialogContent,DialogTitle,DialogContentText} from '@mui/material';
import data from '../data';
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {detailsProduct} from '../Actions/ProductActions'
export default function Productscreen(props) {
    const[Qty, setQty]= useState(1);
    const[open, setopen]= useState(false);
    const {id}=useParams()
    const Navigate=useNavigate();

    // const{k}=props.useDispatch.id

    const addToCartHandler=()=>{

    // this function changes the route in ur react application


     Navigate(`/cart/${id}`,
     {state:{Qty:Qty

     }}
     
     )};


    // const product=data.products.find((x)=>x._id === id);

    const dispatch = useDispatch();
  const productDetails = useSelector((state)=>state.productDetails);
  const {loading, error, product}=productDetails;

//   const productId=props.match.params.id;

  useEffect(()=>{
    dispatch(detailsProduct({id}));
  },[dispatch,id]);
    return(
        <div><Link to='/'>Back to Homepage </Link>
        {loading? (<LoadingBox></LoadingBox>): error?( <MessageBox variant='danger'>{error}</MessageBox>):(<div className="row top">
                <div className="col-2"><img className="large" src={product.image}alt={product.image}/></div>
            <div className="col-1"><ul>
                    <li>
                        <h1>{product.name}</h1>
                        
                        </li>
                        <li>
                            <Rating rating={product.rating} 
                             numreveiws={product.numreviews}></Rating>
                            
                            </li>
                            <li>
                              Price:  {product.price}
                            </li>
                            <li>
                                description:
                                <p>{product.description}</p>
                            </li>
                            
                            </ul>
                            </div>

            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>price</div>
                                <div className="price">{product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>status</div>
                                <div className="price">{product.countstuck>0?(<div className="success">instock</div>):(<div className="error">not available</div>)}</div>
                            </div>
                        </li>
                        {
                            product.countstuck>0 && (
                                
                            <>
                            <li><div className="row">
                                <div>Qty</div>
                                <div>
                                    <select 
                                  value={Qty} onChange={(e)=>setQty(e.target.value)}>
                                   { [...Array(product.countstuck).keys()].map(
                                        (x) =>(
                                            <option  key={x+1} value={x+1}>{x+1}</option>))}
                                    </select>
                                    </div>
                                </div>
                                </li>
                            <li>
                            <Button onClick={()=>setopen(true)} VARIANT className="primary block">add to cart</Button>

                            <Dialog aria-labelledby="dialog-tittle"
                            open={open}
                            onClose={()=>setopen(false)}
                           
                            >
                                <DialogTitle  id='dialog-title' variant="h4" >NOTIFICATION</DialogTitle>
                                <DialogContent ><DialogContentText id='dialog-description' variant="h5" >Added To Cart</DialogContentText></DialogContent>
                                <DialogActions>
                                    <Button onClick={()=>setopen(false)}>CLOSE</Button>
                                </DialogActions>
                            </Dialog>
                            </li></>)}
                        
                        
                    </ul>
                </div>
            </div>
            </div>)}</div>
    );
}