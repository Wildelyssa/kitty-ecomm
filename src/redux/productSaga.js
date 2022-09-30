import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constants";

function* getProducts() {
  let data = yield fetch("http://localhost:3500/products");
  data = yield data.json();
  console.log("product list", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
