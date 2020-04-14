const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action) {
  if (action === 'bugAdded') {
    console.log('1');
    return [
      ...state,
      {
        id: lastId++,
        description: action.payload.description,
        resolve: false,
      },
    ];
  } else if (action.type === 'bugRemoved') {
    return state.filter((bug) => bug.id !== action.payload.id);
  }

  return state;
}
