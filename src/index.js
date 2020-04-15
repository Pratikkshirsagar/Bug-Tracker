import configureStore from './store/configureStore';
import { bugAdded, bugRemove, bugResolved } from './store/bugs';

const store = configureStore();

store.subscribe(() => console.log(store.getState()));

store.dispatch(bugAdded({ description: 'bug 1' }));
