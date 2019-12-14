import $ from "jquery"
import "./app1.css"
import Model from "./base/MODEL";
import View from "./base/VIew";
/*数据相关放m
* 视图相关再v
* 其他再c*/
const eventBus=$(window)

const m=new Model({
    data: {
        //初始化数据
        n :parseInt(localStorage.getItem("n")) //初始化n
    },
    update(data){
            Object.assign(m.data,data)
            eventBus.trigger('m:updated')//事件名字不能有空格
            localStorage.setItem(`n`,m.data.n)
        }
}
)

console.dir(m)


const view={
    init(container){//初始化，先不拿最后才拿
        view.el=$(container)
        view.render(m.data.n)
        view.autoBindEvents()
        eventBus.on('m:updated',()=>{
            view.render(m.data.n)
        })
    },
    render(){
        const newEl=$(view.html.replace(`{{n}}`,m.data.n))
        if (view.el.children.length !== 0) {
            view.el.empty()
        }
        newEl.appendTo(view.el)
    },
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
    events:{
        'click #add1':'add',
        'click #minus1':'minus',
        'click #mul2':'mul',
        'click #divide2':'div',

    },
    add(){
        m.update({n:m.data.n+1})
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
        for (let key in view.events) {
            const value = view[view.events[key]]
            const spaceIndex = key.indexOf(' ')
            const part1 = key.slice(0, spaceIndex)
            const part2 = key.slice(spaceIndex + 1)
            console.log(part1, part2, value)
            view.el.on(part1, part2, value)
        }
},
}
//第一次渲染html
export  default view
