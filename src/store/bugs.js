const BUG_ADDED = 'bugAdded';
const BUG_REMOVED = 'bugRemoved';
const BUG_RESOLVED = 'bugResolved';

export function bugAdded(id, discription) {
  return {
    type: BUG_ADDED,
    payload: {
      id: id,
      description: discription,
    },
  };
}

export function bugRemove(id) {
  return {
    type: BUG_REMOVED,
    payload: {
      id: id,
    },
  };
}

export function bugResolved(id) {
  return {
    type: BUG_RESOLVED,
    payload: {
      id: id,
    },
  };
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: 1,
          description: action.payload.description,
          resolve: false,
        },
      ];

    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    case BUG_RESOLVED:
      return state.map((bug) => (bug.id !== action.payload.id ? bug : { ...bug, resolve: true }));

    default:
      return state;
  }

  return state;
}
