import $ from "jquery"
import "./app4.css"

const $circle = $(`#app4 .circle`)

$circle.on(`click`, () => {
    $circle.addClass(`active`)
})