import { store } from 'src/redux/store';
import { resetStateLayout } from 'src/layout/redux/layoutSlice';

export const resetAllState = () => {
  store.dispatch(resetStateLayout());
};
