import "./app1.css"
import Vue from 'vue'
/*数据相关放m
* 视图相关再v
* 其他再c*/
console.log(Vue)



const init=(el)=>{
    new Vue({
        el:el,
        data:{n:parseFloat(localStorage.getItem('n'))||100 },//初始化n},
        methods:{
            add(){
                this.n+=1
            },
            minus(){
               this.n-=1
            },
            mul(){
              this.n*=2
            },
            div(){
              this.n/=2
            },
        },
        watch:{
        n:function(){
            localStorage.setItem('n',this.n)//用this就不能用=>{}函数的形式
            //因为那里的this是window
        }
        },
        template:`
        <section>
            <div class="output">
                <span id="number">{{n}}</span>
            </div>
            <div class="actions">
                <button @click="add">+1</button>
                <button @click="minus">-1</button>
                <button @click="mul">*2</button>
                <button @click="div">÷2</button>
            </div>
        </section>
`
    })

}
//第一次渲染html
export  default init
