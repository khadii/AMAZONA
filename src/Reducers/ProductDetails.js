
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../constant/ProductConstants";


export const productDetailsReducer=(
    // youre using {} for products in this case because the details showing is not an array of data it just one data property of one shirt so no need of empty array instead empty
    // state contains all the initial property you want the page to be on first before loadind your cases
    state ={product:{}, loading:true},action)=>{
switch(action.type){


    case PRODUCT_DETAILS_REQUEST:
        return{
            loading:true, id: action.payload
        };
        case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false, product: action.payload
            };
            case PRODUCT_DETAILS_FAIL:
                return{
                    loading: false, error: action.payload
                };
                default:
                    return state;
}}