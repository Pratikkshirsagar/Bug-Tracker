import { createAction } from '@reduxjs/toolkit';

export const bugAdded = createAction('bugAdded');
export const bugRemove = createAction('bugRemove');
export const bugResolve = createAction('bugResolve');

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolve: false,
        },
      ];

    case bugRemove.type:
      return state.filter((bug) => bug.id !== action.payload.id);

    case bugResolve.type:
      return state.map((bug) => (bug.id !== action.payload.id ? bug : { ...bug, resolve: true }));

    default:
      return state;
  }
}
