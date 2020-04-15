import configureStore from './store/configureStore';
import { bugAdded, bugRemove, bugResolved } from './store/bugs';

const store = configureStore();

store.subscribe(() => console.log(store.getState()));

store.dispatch(bugAdded(1, 'Bug 1'));
store.dispatch(bugAdded(2, 'Bug 2'));
store.dispatch(bugAdded(3, 'Bug 3'));

// store.dispatch(bugRemove(1));

store.dispatch(bugResolved(1));
