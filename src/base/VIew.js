import $ from 'jquery'
import EventBus from "./EventBus";
class View extends EventBus{//让View继承Event Bus
    // 使得View可以直接trigger或者调用其他EventBus独有的api
constructor(options) {//{el,html,render,data,eventBus,events}
    super()//调用了EventBus#constructor
    Object.assign(this,options)
    this.el=$(this.el)
    this.render(this.data)
    this.autoBindEvents()
    this.on('m:updated',()=>{
        this.render(this.data)
    })
}
    autoBindEvents(){
        for (let key in this.events) {
            const value = this[this.events[key]]
            const spaceIndex = key.indexOf(' ')
            const part1 = key.slice(0, spaceIndex)
            const part2 = key.slice(spaceIndex + 1)
            console.log(part1, part2, value)
            this.el.on(part1, part2, value)
        }}
}
export default View