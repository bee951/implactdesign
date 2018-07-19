$(function(){
    $("#abtlink").attr("href","#about")
    $("#explink").attr("href","#experience")
    $("#worklink").attr("href","#work")
    $("#contlink").attr("href","#contact")
    $(".joblink").mousedown( function(){
        $(this).attr("src", "images/icons/linkdarkgray.svg")
    })
})
