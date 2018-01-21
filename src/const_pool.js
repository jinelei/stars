const poolDic = Symbol('poolDic');

export default class ConstPool{

    static getInstance() {
      if (!ConstPool.instance) {
        ConstPool.instance = new ConstPool();
        ConstPool.instance.screen_height = 800;
        ConstPool.instance.screen_width = 600;
      }
      return ConstPool.instance;
    }

}
