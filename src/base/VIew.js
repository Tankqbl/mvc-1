import $ from 'jquery'
class View{
constructor({el,html,render}) {
    this.el=$(el)
    this.render=render
    this.html=html
}
}
export default View