import { call, put } from "redux-saga/effects";
import { requestGetUser } from "../requests/user";
import { setUser } from "../../ducks/user";

export function* handleGetUser(action) {
  try {
    const res = yield call(requestGetUser);
    const { data } = res;
    yield put(setUser(data));
  } catch (err) {
    console.log(err);
  }
}
