import axios from "axios"
import { CART_ADD_ITEM } from "../constant/CartConstants";


export const addToCart=({id},{Qty})=>async (dispatch,getstate)=>{
    const {data}= await axios.get(`/api/products/${id}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countstuck,
            product:data._id,
            Qty,
        }
    });
};