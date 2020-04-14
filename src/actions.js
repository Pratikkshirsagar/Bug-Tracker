import * as action from './actionTypes';

export function bugAdded(discription) {
  return {
    type: action.BUG_ADDED,
    payload: {
      description: discription,
    },
  };
}

export function bugRemove(id) {
  return {
    type: action.BUG_REMOVED,
    payload: {
      id: id,
    },
  };
}
