import Vuex from 'vuex';
import Shopping from '@/domain/shopping/store';

let instance = null;

export default class {
  constructor() {
    if (!instance) {
      const config = {
        modules: {
          Shopping
        },
      };

      instance = new Vuex.Store(config);
    }

    return instance;
  }
}
