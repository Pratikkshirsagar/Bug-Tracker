import { BUG_ADDED, BUG_REMOVED } from './actionTypes';
const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action) {
  if (action === BUG_ADDED) {
    console.log('1');
    return [
      ...state,
      {
        id: lastId++,
        description: action.payload.description,
        resolve: false,
      },
    ];
  } else if (action.type === BUG_REMOVED) {
    return state.filter((bug) => bug.id !== action.payload.id);
  }

  return state;
}
