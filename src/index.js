import store from './store';
import { bugAdded, bugRemove } from './actions';

store.subscribe(() => console.log(store.getState()));

// store.dispatch(bugAdded('Bug 2'));

store.dispatch(bugRemove(1));
