import {combineReducers} from 'redux';
import shop from './shop.reducer';
import {paginationReducer} from "./pagination.reducer";

{/**Register reducer to fetch the product */}
export default combineReducers({
    shop,
    pagination: paginationReducer
});
