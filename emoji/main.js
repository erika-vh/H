function ellenorzes() {
    if($("#vers1").val()=="Nemzeti dal"
    && $("#vers2").val()=="Föltámadott a tenger"
    && $("#vers3").val()== "Szeptember végén")
        $("#tovabb").prop('disabled', false)
    else $("#tovabb").prop('disabled', true)
}

function tovabb() {
    window.open("../memoria/index.html","_self")
}