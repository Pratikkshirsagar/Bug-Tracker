import * as action from './actionTypes';

export function bugAdded(id, discription) {
  return {
    type: action.BUG_ADDED,
    payload: {
      id: id,
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

export function bugResolved(id) {
  return {
    type: action.BUG_RESOLVED,
    payload: {
      id: id,
    },
  };
}
