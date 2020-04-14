import store from './store';
import * as action from './actionTypes';
store.subscribe(() => {
  console.log('Store Changed!', store.getState());
});

store.dispatch({
  type: action.BUG_ADDED,
  payload: {
    description: 'Bug1',
  },
});

store.dispatch({
  type: action.BUG_REMOVED,
  payload: {
    id: 1,
  },
});

console.log(store.getState());
