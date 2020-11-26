import { call, put, takeLatest } from "redux-saga/effects";
import apiNoAuth from "~/services/api";
import { Types as AuthenticationTypes } from "./actions";
import Toast from "~/components/elements/Toast";
import history from "~/routes/history";
import MESSAGE from "~/utils/messages";

export function* getAuthentication({ payload }) {
  const { values } = payload;
  const user = { user: values };
  try {
    const { data, headers } = yield call(apiNoAuth.post, `/login`, user);
    const payload = {
      ...data,
      auth: headers.authorization,
    };
    yield put({
      type: AuthenticationTypes.SUCCESS_AUTHENTICATION,
      payload,
    });
    history.push("/dashboard");
  } catch (err) {
    yield put({ type: AuthenticationTypes.FAILURE_AUTHENTICATION });
    yield Toast("error", MESSAGE.errorLogin);
  }
}

export default function* saga() {
  yield takeLatest(AuthenticationTypes.GET_AUTHENTICATION, getAuthentication);
}
