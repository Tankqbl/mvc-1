class Model{
    constructor(options) {
        ['data','create','delete','get','update'].forEach((key)=>{
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