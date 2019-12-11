import $ from "jquery"
import "./app1.css"
/*数据相关放m
* 视图相关再v
* 其他再c*/
const eventBus=$(window)
const m={
    data:{
        //初始化数据
        n :parseInt(localStorage.getItem("n")) //初始化n
    },
    create(){},
    delete(){},
    update(data){
        Object.assign(m.data,data)
        eventBus.trigger('xxx')//事件名字不能有空格
        console.log(`111`)
        localStorage.setItem(`n`,m.data.n)
    },
    get(){}
}
const v={
   el:null,
   html:`
        <div>
            <div class="output">
                <span id="number">{{n}}</span>
            </div>
            <div class="actions">
                <button id="add1">+1</button>
                <button id="minus1">-1</button>
                <button id="mul2">*2</button>
                <button id="divide2">÷2</button>
            </div>
        </div>
`,
    init(container){//初始化，先不拿最后才拿
        v.el=$(container)
         v.render()
    },
    render(){
        const newEl=$(v.html.replace(`{{n}}`,m.data.n))
        if (v.el.children.length !== 0) {
            v.el.empty()
        }
        newEl.appendTo(v.el)
    }
}
const c={
    init(container){//初始化，先不拿最后才拿
        v.init(container)
        v.render(m.data.n)
        c.autoBindEvents()
        eventBus.on('xxx',()=>{
            v.render(m.data.n)
            console.log(`xxx`)
        })
    },
    events:{
        'click #add1':'add',
        'click #minus1':'minus',
        'click #mul2':'mul',
        'click #divide2':'div',

    },
    add(){
        m.update({n:m.data.n+1})
        console.log(`111`)
    },
    minus(){
        m.update({n:m.data.n-1})
    },
    mul(){
        m.update({n:m.data.n*2})
    },
    div(){
        m.update({n:m.data.n/2})
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
