import store from './store/store';
import { bugAdded, bugRemove, bugResolved } from './store/actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(bugAdded(1, 'Bug 1'));
store.dispatch(bugAdded(2, 'Bug 2'));
store.dispatch(bugAdded(3, 'Bug 3'));

// store.dispatch(bugRemove(1));

store.dispatch(bugResolved(1));
