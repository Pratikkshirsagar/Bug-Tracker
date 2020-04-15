import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from './actionTypes';

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
  } else if (action.type === BUG_RESOLVED) {
    return state.map((bug) => (bug.id !== action.payload.id ? bug : { ...bug, resolve: true }));
  }

  return state;
}
