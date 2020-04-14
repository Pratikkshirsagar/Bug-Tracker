import { BUG_ADDED, BUG_REMOVED } from './actionTypes';

export default function reducer(state = [], action) {
  if (action.type === BUG_ADDED) {
    return [
      ...state,
      {
        id: 1,
        description: action.payload.description,
        resolve: false,
      },
    ];
  } else if (action.type === BUG_REMOVED) {
    return state.filter((bug) => bug.id !== action.payload.id);
  }

  return state;
}
