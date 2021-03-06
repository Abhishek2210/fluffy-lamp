import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  getProductList: ['shopId'],
  updateProductList: ['shopId','productList'],
  updatedProductList:[],
  requestLogout: null,
  fetchedProductList:['prodList'],
  getShopList: [], 
  fetchedShopList:['shopList'],
  getScannedProduct:['shopId', 'barcodeNum'],
  setCurrentProduct:['product']
});

export const ShopTypes = Types;
export default Creators;


/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  prodList: [],
  shopList: [],
  currentProduct:null,
  loading: false,
});

/* ------------- Reducers ------------- */

export const getProductList = (state = INITIAL_STATE, action) =>  {
  return {...state, loading: true};
};

export const updateProductList = (state = INITIAL_STATE, action) =>  {
  return {...state, loading: true};
};

export const updatedProductList = (state = INITIAL_STATE, action) =>  {
  return {...state, loading: false};
};

export const fetchedShopList = (state = INITIAL_STATE, action) => {
  return { ...state, shopList:action.shopList };
};

export const fetchedProductList = (state = INITIAL_STATE, action) => {
  return { ...state, prodList:action.prodList, loading:false };
};

export const getScannedProduct = (state = INITIAL_STATE, action) =>  {
  return {...state, loading: true};
};

export const setCurrentProduct = (state = INITIAL_STATE, action) => {
  if(action.product){
    return { ...state, currentProduct:action.product, loading:false };
  } else {
    return { ...state, currentProduct:null, loading:false };    
  }
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PRODUCT_LIST]: getProductList,
  [Types.UPDATE_PRODUCT_LIST]: updateProductList,
  [Types.FETCHED_SHOP_LIST]: fetchedShopList,
  [Types.UPDATED_PRODUCT_LIST]: updatedProductList,
  [Types.FETCHED_PRODUCT_LIST]: fetchedProductList,
  [Types.SET_CURRENT_PRODUCT]: setCurrentProduct,
  [Types.GET_SCANNED_PRODUCT]:getScannedProduct,
});
