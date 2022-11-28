

$(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("#enviar").click(function () {
      alert("Enviado correctamente");
    });
  });


  const titulo = document.querySelectorAll(".titulo")        
        titulo.addEventListener("dblclick", ()=>{
          titulo.classList.toggle("cambiante")
        });


     

    $(document).ready(()=>{$('.alternar').on('click',function() {$('p').toggle();});});

    $(document).ready(()=>{$('.reset').on('click',function() {$('p').toggle();});});