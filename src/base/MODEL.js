import EventBus from "./EventBus";

class Model extends EventBus{//让model继承Event Bus
    // 使得model可以直接trigger或者调用其他EventBus独有的api
    constructor(options) {
        super()//调用了EventBus#constructor
        /*['data','create','delete','get','update'].forEach((key)=>{
          一定要记住js代码不能以括号开始！！！！
          他会发现括号就往上靠，所以这个代码就变成
          super()['data','create','delete','get','update'].forEach
          意思是遍历super中下标为['data','create','delete','get','update']
          这明显是不对的！！JS语法真的脑瘫
           */
        const keys=['data','create','delete','get','update']
        keys.forEach((key)=>{
        if(key in options){
                this[key]=options[key]
            }
        })
    }
    create(){
        console&&console.error&&console.log(`还没实现create`)
        //?.语法： console?.log?.(`还没实现create`)
    }
    delete(){ console&&console.error&&console.log(`delete`)}
    update(data){
        console&&console.error&&console.log(`还没实现update`)
    }
    get(){
        console&&console.error&&console.log(`还没实现get`)
    }
}

export default Model