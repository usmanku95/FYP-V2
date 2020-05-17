import { ADD_ARTICLE } from "./actionTypes";
import { TOGGLE_LOGIN } from "./actionTypes";
const initialState = {
  isLoggedIn: false,
};

function rootReducer(state = initialState, action) {
  console.log(action, "action in reducer");

  if (action.type === ADD_ARTICLE) {
    //Object.assign returns a new js object
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
    });
  }
  if (action.type === TOGGLE_LOGIN) {
    console.log(action.payload, "payload of action");

    // return isLoggedIn;
    return Object.assign({}, state, {
      isLoggedIn: action.payload,
    });
  }
  return state;
}

export default rootReducer;
