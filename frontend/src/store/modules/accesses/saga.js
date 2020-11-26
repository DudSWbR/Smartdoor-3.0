import { call, put, takeLatest } from "redux-saga/effects";
import api from "~/services/api";
import { Types as AccessesTypes } from "./actions";
import Toast from "~/components/elements/Toast";
import MESSAGE from "~/utils/messages";

export function* getAccesses() {
  try {
    const { data } = yield call(api.get, "/accesses");
    yield put({
      type: AccessesTypes.GET_ACCESSES_SUCCESS,
      payload: data,
    });
  } catch (err) {
    yield put({ type: AccessesTypes.GET_ACCESSES_FAIL });
    yield Toast("error", MESSAGE.errorSendData);
  }
}
export function* getFilteredAccesses({ payload }) {
  try {
    const { data } = yield call(
      api.get,
      `/accesses?datainicial=${payload.initialDate}&datafinal=${payload.finalDate}`
    );
    yield put({
      type: AccessesTypes.GET_FILTERED_ACCESSES_SUCCESS,
      payload: data,
    });
  } catch (err) {
    yield put({ type: AccessesTypes.GET_FILTERED_ACCESSES_FAIL });
    yield Toast("error", MESSAGE.errorSendData);
  }
}

export default function* saga() {
  yield takeLatest(AccessesTypes.GET_ACCESSES, getAccesses);
  yield takeLatest(AccessesTypes.GET_FILTERED_ACCESSES, getFilteredAccesses);
}
