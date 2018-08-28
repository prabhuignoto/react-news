import { all, fork } from "redux-saga/effects";
import { watchCanLoadUrlInFrame, watchGetHeadlines, watchSearchNews } from "./newsAPISaga";
// import watchSailsSocketSaga from './socketsSaga';

export default function* rootSaga() {
  yield all([
    fork(watchGetHeadlines),
    fork(watchSearchNews),
    fork(watchCanLoadUrlInFrame),
    // fork(watchSailsSocketSaga)
  ])
}