
//Añadimos las píldoras
$('[name="checks[]"]').change(function() {
      
    var arr = $('[name="checks[]"]:checked').map(function(){
      return this.value;
    }).get();
        console.log(arr)
    $('#FiltroPildoras').empty()
    for (let i = 0; i < arr.length; i++) {
        console.log(arr)
        $("<div id='"+arr[i]+"Cont' class='contenedorPildora'><p id='p"+i+"'></p><img id='"+i+"' src='../img/x.svg'></div>").appendTo("#FiltroPildoras")
        
        $('#p'+i+'').text(arr[i]);
    }
   
  
  });

  //Eliminamos las píldoras y desmarcamos los checkbox
    $('#EliminarTodo').on('click', function(){
        $('#FiltroPildoras').empty()
        $("input").prop('checked', false)
    })

    //Eliminamos las pildoras y desmarcamos los checkbox del bloque de marcas
    $('#LimpiarMarca').on('click', function(){
        
        $("#Ray-ban").prop('checked', false);
        $("#Chin-chin").prop('checked', false);
        $("#Oakley").prop('checked', false);
        $("#Ray-banCont").remove();
        $("#Chin-chinCont").remove()
        $("#OakleyCont").remove()
    })
     //Eliminamos las pildoras y desmarcamos los checkbox del bloque de marcas productos
    $('#limpiarProducto').on('click', function(){
        $("#Recambios").prop('checked', false);
        $("#Fundas").prop('checked', false);
        $("#RecambiosCont").remove()
        $("#FundasCont").remove()
    })

    //Elimina la píldora y desmarca el checkbox correspondiente al hacer click en la X
    $("#FiltroPildoras").on('click',function(event) {
        var id = event.target.id;
        var valor = document.getElementById("p"+id+"").innerHTML;
        console.log(valor);
        if(id!="FiltroPildoras"){
        $("#"+id+"").parent().remove();
        $("#"+valor+"").prop('checked', false);
        }
       });
    
    //Cierra y abre el bloque de Marcas al pulsar "-" y "+" correspondientes a dicho bloque
    $("#BloqueMarcas").on('click',function(){
        var activo = $("#marcasCheckbox").hasClass("active") //Si el div que contiene los checkbox de marca tiene la clase activa devolverá tru
        if(activo){//Si es true
            $("#marcasCheckbox").toggleClass( "active", false );//Elimina active de la clase
            $("#marcasCheckbox").toggleClass( "desactive");//añade a la clase desactive
            $("#BloqueMarcas").attr("src","../img/minus.svg")//Cambia la imagen del más por la del menos

        }else{//Si es false
            $("#marcasCheckbox").toggleClass( "desactive", false );//Elimina la clase desactive
            $("#marcasCheckbox").toggleClass( "active");//Añade la clase active
            $("#BloqueMarcas").attr("src","../img/plus.svg")//Cambia la imagen del menos por la del mas
        }
    });

    //Cierra y abre el bloque de productos al pulsar "-" y "+" correspondientes a dicho bloque
    $("#BloqueProductos").on('click',function(){//lo mismo que arriba pero con el bloque de productos
        var activo = $("#productosCheckbox").hasClass("active")
        if(activo){
            $("#productosCheckbox").toggleClass( "active", false );
            $("#productosCheckbox").toggleClass( "desactive");
            $("#BloqueProductos").attr("src","../img/minus.svg")

        }else{
            $("#productosCheckbox").toggleClass( "desactive", false );
            $("#productosCheckbox").toggleClass( "active");
            $("#BloqueProductos").attr("src","../img/plus.svg")
        }
    });

