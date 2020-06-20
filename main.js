


document.querySelectorAll(".title").forEach(function(el){
    el.addEventListener("click", function(){
        document.querySelectorAll("p.block-p.mostrar").forEach(function(el){
            el.classList.replace("mostrar","ocultar");
        })
        el.parentElement.querySelector("p").classList.replace("ocultar","mostrar");
        
    });

});

