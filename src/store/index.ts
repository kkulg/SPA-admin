import { createStore, createLogger } from 'vuex';
import GlobalStore from '@/store/global';

const debug = process.env.NODE_ENV !== 'production';

const store = createStore({
  ...GlobalStore,
  modules: {},
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

export default store;
