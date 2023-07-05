
import { CART_ADD_ITEM } from "../constant/CartConstants";

export const CartReducer =(state={cartIterms:[]}, action)=>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem= state.cartIterms.find((x)=>x.products===item.product);
            if(existItem){
            return{
                // ...state means am not going change other propertties 
                ...state,
                // statement below means if two product existItem(note being identified by thier id) of the same properties let them be one ie let dem be = item that you just put in
                cartIterms: state.cartIterms.map((x)=>x.product=== existItem.product? item:x),
                // the above code help prevent repeatation of order or request and updating with the latest request
            };}
            else{
                return{
                    // the code below just returns the an additional  item to the cartitems 
                    ...state,
                    cartIterms:[...state.cartIterms, item]

                }
            }
            
            default:
                return state;
    }
};