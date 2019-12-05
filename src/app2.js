import $ from "jquery"
import "./app2.css"

const $tabBar = $(`#app2 .tab-bar`)
const $tabContent = $(`#app2 .tab-content`)

$tabBar.on(`click`, "li", (e) => {
    const $li = $(e.currentTarget)
    const $index = $li.index()
    $tabContent.children().eq($index)
        .addClass(`active`)
        .siblings().removeClass(`active`)
    //eq是等于的意思,注意不要再js里面去改变css样式，这样会很不好
})