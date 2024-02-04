
function Personaje(reina, rey) {

    const Cleopatra={
            name:"cleopatra",
            sirvienta:"Selene",
            couple:rey,
            origines:{
              origin:"Egipto",
              mom:{
                name:"Alicia",
                husband:"Francisco"
              }
            }
    }
    const MarcoAntonio={
            name:"MarcoAntonio",
            couple:reina,
            origenes:{
              origin:"Roma",
              father:{
                name:"Julio",
                wife:"Anttonella"
              }
            }
    }
    return{
    reina:Cleopatra,
    rey:MarcoAntonio
    };
};  

function juego(){
   alert (`                                       Vienvenidos\n 
   Tienes que sal var la relacion de Cleopatra\n
   Cleopatra y Marco Antonio se encuentran enamorados en el antiguo Egipto.\n
   Tú eres quien decide el destino de su amor.\n
   1. Convencer a Cleopatra de unirse a Marco Antonio.\n
   2. Aconsejar a Marco Antonio para que se una a Cleopatra.\n
   3. Separarlos y cambiar el curso de la historia.\n`);
   let option= prompt(`Que desicion tomaras?`,"1, 2 o 3");
   
   let feliz=option;
   let opcion;
   
    if(feliz==1){
     alert(`Juntos deciden mudarse a Alegandria\n
           Se encuentran en problemas politicos ¿Como podemos ayudar?\n
           1.1 Cleopatra renuncia su cargo y se muda a roma\n
           1.2 Cleopatra y MarcoAntonio crean una alianza\n
           1.3 Marco Antonio renuncia y se muda a Egipto`);
        opcion=prompt(`Que desicion tomaras?`,"1, 2 o 3");
    };
    
   let mudanza;
   
    if(feliz==2){
     alert(`Marco Antonio decide unirse a Cleopatra y juntos construyen un imperio.\n
     Hay problemas de diferencias politicas y aparece Octavio rival de la pareja\n
     2.1 Mandar a liquidar a Octavio en secreto\n
     2.2 Intentar una negociacion\n
     2.3 No hacer nada y esperar`);
     mudanza=prompt(`Que desicion tomaras?`,"1, 2 o 3");
    }

    if(feliz==2){
      delete Personaje.cleopatra.sirvienta
     }

   let enemistad;

    if(feliz==3){
     alert(`Cleopatra y Marco Antonio se vuelven enemigos.\n
     Existe un peligro de gerra entre imperios\n
     3.1 Cleopatra inicia la gerra\n
     3.2 MarcoAntonio inicia la gerra\n
     3.3 Marco Antonio y Cleopatra llegan a un acuerdo formando una alianza`);
     enemistad=prompt(`Que desicion tomaras?`,"1, 2 o 3");
    }
   
    //parte Dos
   
   let option1;
   
    if(opcion==1){
     alert(`Cleopatra renuncia su cargo y se muda a roma\n
           Problemas de pareja Cleopatra anela el poder que perdio\n
           1.1 Abandonar a Marco Antonio y recuperar Egipto\n
           1.2 Marco Antonio la assesina por desconfianza\n
           1.3 Cleopatra en decesperacion se alia con Octavio y atentan contra de Marco Antonio`);
       option1=prompt(`Que desicion tomaras?`,"1, 2 o 3");
    };
    switch(option1){
      case "1":
        delete Personaje.Cleopatra.sirvienta
      break;
      case "2":
        alert("Cleopatra es en contrada muerta \n");
       a= alert("quieres volver a jugar");
       if(a==true){
        juego();
       }
      break;
      case "3":
        alert("Marco Antinio muere y por desconfianza Octavio tambien asesina a Cleopatra");
        delete Personaje;
        a= alert("quieres volver a jugar");
       if(a==true){
        juego();
       }
      break;
    }
   
   let option2;
   
    if(opcion==2){
     alert(`Marco Antonio decide unirse a Cleopatra y juntos construyen un imperio\n
     Situacion Octavio lleno de ira empieza una gerra cotra del imperio Romano y Egipcio\n
     1.1 Uyen a la capital de Egipto Alegandria\n
     1.2 Dirigen sus tropas al campo de batalla\n
     1.3 SE dividen estrategicamente planeando una emboscada`);
   option2=prompt(`Que desicion tomaras?`,"1, 2 o 3");
    }
    //let volverAjugar;
   switch(opcion) {
    case "1":  
      delete Personaje.MarcoAntonio.origin
    break;
    case "2":
      alert("Cleopatra a muerto")
      delete Personaje.reina
    break;
    case "3":
      alert(`Marco Antonio pierde su nacionalidad 😢😥\n`);
      break;
  }
};
  juego();

  /*function ejecutarOpcion(volverAjugar) {
      switch (volverAjugar) {
        case 1:
         juego();
          break;
          case 2:
            alert("vuelve pronto");
          break;
    };
  }*/
   let pareja=Personaje({name:' Cleopatra'},{name: ' Marco Antonio'});
//const cleopatraProperties = Object.keys(Personaje().egipcia);
//const marcoAntonioProperties = Object.keys(Personaje().romano);

console.log(pareja)
