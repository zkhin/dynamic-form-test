import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reducer/form';

export default configureStore({
  reducer: {
    form: formReducer,
  },
});
