import $ from "jquery"
import "./app3.css"
import c from "./app2";

const $square = $(`#app3 .square`)
const localKey = `app3.active`
const html=`
        <section id="app3">
            <div class="square"></div>
        </section>
`
const $element=$(html).appendTo($(`body>.page`))
const active = localStorage.getItem(localKey) === `yes`
//默认是undefined，改过就是yes，没改过就是no或者undefined
/*if(active){
    $square.addClass(`active`)
}else{
    $square.removeClass(`active`)
}*/
//四行缩减为下面一行，意思为如果有就删掉，没有就加上
$square.toggleClass(`active`,active)

$square.on(`click`, () => {
    if ($square.hasClass(`active`)) {
        $square.removeClass(`active`)
        localStorage.setItem(localKey, `no`)
    } else {
        $square.addClass(`active`)
        localStorage.setItem(localKey, `yes`)
    }
})

export  default c