import $ from "jquery"
import "./app4.css"
import view from "./app2";
const html=`
   <section id="app4">
            <div class="circle"></div>
        </section>
`
const $element=$(html).appendTo($(`body>.page`))
const $circle = $(`#app4 .circle`)

$circle.on(`click`, () => {
    $circle.addClass(`active`)
})

export  default view