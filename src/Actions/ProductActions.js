import   axios, { Axios }  from "axios"

import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constant/ProductConstants"


export const listproducts=()=> async (dispatch)=>{
    dispatch({
        type:PRODUCT_LIST_REQUEST
    });
     
   try{
        const {data} = await axios.get('/api/product');
        dispatch({
            type:PRODUCT_LIST_SUCCESS, payload:data
        });
    }
    catch(error){
        dispatch({
            type:PRODUCT_LIST_FAIL, payload:error.message
        });

    };

};


export const detailsProduct =({id})=>async (dispatch)=>{
    dispatch({type: PRODUCT_DETAILS_REQUEST, payload:id});

    try{
        const {data}= await axios.get(`/api/products/${id}`)
        dispatch({type:PRODUCT_DETAILS_SUCCESS, payload:data})
    }
    catch(error){
        dispatch({type:PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message? error.response.data.message:error.message, })
    }
     
}
// error.message is calling the default error response of the excution