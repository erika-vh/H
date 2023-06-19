kepek=[
    "flatulence1.png",
    "flatulence2.png",
    "flatulence3.png",
    "flatulence4.png",
    "flatulence5.png",
    "flatulence6.png",
    "flatulence7.png",
    "flatulence8.png",
    "flatulence9.png"
]

let melyik=-1

$(document).ready(general)

function general() {

    for (let ix = kepek.length-1; ix >= 0; ix--) {
        let index = parseInt(Math.random()*(ix+1))
        let temp = kepek[index]
        kepek[index] = kepek[ix]
        kepek[ix] = temp    
    } 

    for (let ix = 0; ix < kepek.length; ix++) {
        $("main").eq(0).append(`<div class="lap">
        <img style=" cursor: pointer;" src="kepek/${kepek[ix]}">
        </div>`)
        $(".lap").eq(ix).on('click', function () {
            csere(ix)
        })
    }
}

function csere(nth){
    if(melyik!=-1){
        let tmp =$("img").eq(nth).attr("src")
        $("img").eq(nth).attr("src",$("img").eq(melyik).attr("src"))
        $("img").eq(melyik).attr("src", tmp)
        if(ellenorzes())
            $("#tovabb").prop('disabled', false)
    }
    melyik=melyik==-1?nth:-1
}

function ellenorzes() {
    let ix=0
    while(ix<kepek.length &&  $("img").eq(ix).attr("src")[$("img").eq(ix).attr("src").length-5]==(ix+1)){
        ix++
    }
    return ix>=kepek.length
}

function tovabb() {
    window.open("../twitter/index.html","_self")
}