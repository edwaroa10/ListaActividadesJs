(function(){
        //Variables
        var lista =document.getElementById('lista'),
            actividadin=document.getElementById('actividadin'),
            boton=document.getElementById('btn-actividad');

    
        //Funciones
        boton.onclick=function(){
            var actividad = document.getElementById('actividadin').value,
                nuevactividad = document.createElement("li"),
                enlace = document.createElement("a"),
                contenido =document.createTextNode(actividad);
          
            if(actividad ===""){
                actividadin.setAttribute("placeholder", "Agrega una actividad");
                actividadin.className("error");
                return false;
            }
            //Agregar conenido al enlace
            enlace.appendChild(contenido);
            //Asignar atributos al enlace a
            nuevactividad.appendChild(enlace);
            //Agregar nueva tarea a la lista
            lista.appendChild(nuevactividad);
            document.getElementById('actividadin').value="";

            //Asignando metodo para eliminar el nodo
            for(var i=0; i<= lista.children.length-1; i++){
                lista.children[i].onclick( function(){
                    this.parentNode.removeChild(this);

                });
            }
            
        }
        var comprobarActividad=function(){
            actividadin.className="";
            actividadin.setAttribute("Placeholder", "Agregar actividad");    
        }
        var eliminarActividad=function(){
            this.parentNode.removeChild(this);
        }
        //Eventos
    
        //Verificar el input
        actividadin.addEventListener("click", comprobarActividad);
    
        //Eliminando eventos de la lista
        for(var i=0; i<= lista.children.length-1; i++){
            lista.children[i].addEventListener("click", eliminarActividad);
        }
}());