function printAllDivs(){
    console.log(document.querySelectorAll("div"))
    }
    window.addEventListener("load", printAllDivs);
    document.addEventListener("mouseover", function (evento) {
      evento.target.classList.add("redBackground")
    })
    document.addEventListener("mouseout", function (evento) {
      evento.target.classList.remove("redBackground")
    })
    