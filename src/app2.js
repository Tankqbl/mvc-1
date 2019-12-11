import $ from "jquery"
import "./app2.css"
const eventBus=$(window)
const localkey =`app2.index`
const m={
    data:{
        //初始化数据
         index :parseInt(localStorage.getItem(localkey))  || 0
    },
    create(){},
    delete(){},
    update(data){
        Object.assign(m.data,data)
        eventBus.trigger('m:updated')//事件名字不能有空格
        localStorage.setItem('index',m.data.index)
    },
    get(){}
}
const v={
    el:null,
    html:(index)=>{
        return `
      <div>
            <ol class="tab-bar">
                <li class="${index===0?'selected':' '}" data-index="0"><span>1111</span></li>
                <li class="${index===1?'selected':' '}" data-index="1"><span>2222</span></li>
            </ol>
            <ol class="tab-content">
                <li class="${index===0?'active':' '}">内容1</li>
                <li class="${index===1?'active':' '}">内容2</li>
            </ol>
        </div>
`
    },
    init(container){//初始化，先不拿最后才拿
        v.el=$(container)
    },
    render(index){
        if (v.el.children.length !== 0) {
            v.el.empty()
        }
        $(v.html(index)).appendTo(v.el)
    }
}
const c={
    init(container){//初始化，先不拿最后才拿
        v.init(container)
        v.render(m.data.index)
        c.autoBindEvents()
        eventBus.on('m:updated',()=>{
            v.render(m.data.index)
        })
    },
    events:{
        'click .tab-bar li':'tB',
    },
    tB(e){
        console.log(`aa`)
        const index=parseInt(e.currentTarget.dataset.index)//对应的是data-index那里的设置
        console.log(index)
        m.update({index:index})
    },
    autoBindEvents(){
        for (let key in c.events) {
            const value = c[c.events[key]]
            const spaceIndex = key.indexOf(' ')
            const part1 = key.slice(0, spaceIndex)
            const part2 = key.slice(spaceIndex + 1)
            console.log(part1, part2, value)
            v.el.on(part1, part2, value)
        }
    },
}
//第一次渲染html
export  default c
