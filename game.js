
function Character(queen, king) {

    const Cleopatra={
            name:"cleopatra",
            maid:"Selene",
            couple:king,
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
            couple:queen,
            origenes:{
              origin:"Roma",
              father:{
                name:"Julio",
                wife:"Anttonella"
              }
            }
    }
    return{
    queen:Cleopatra,
    king:MarcoAntonio
    };
};  

function game(){
   alert (`                                       Vienvenidos\n 
   Tienes que sal var la relacion de Cleopatra\n
   Cleopatra y Marco Antonio se encuentran enamorados en el antiguo Egipto.\n
   Tú eres quien decide el destino de su amor.\n
   1. Convencer a Cleopatra de unirse a Marco Antonio.\n
   2. Aconsejar a Marco Antonio para que se una a Cleopatra.\n
   3. Separarlos y cambiar el curso de la historia.\n`);
let option;
  do {
    option = prompt("Que decion tomaras? 1 2 o 3");
    if (isNaN(option) || ![1, 2, 3].includes(Number(option))) {
        alert("Por favor, ingrese una opción válida (1, 2 o 3) para la pregunta 1.");
    }
  } while (isNaN(option) || ![1, 2, 3].includes(Number(option)));
   
  let happy=option;

  let firstop;
   if(happy==1){
    alert(`Juntos deciden mudarse a Alegandria\n
          Se encuentran en problemas politicos ¿Como podemos ayudar?\n
          1.1 Cleopatra renuncia su cargo y se muda a roma\n
          1.2 Cleopatra y MarcoAntonio crean una alianza\n
          1.3 Marco Antonio renuncia y se muda a Egipto`);
        do {
           firstop = prompt("Que decion tomaras? 1 2 o 3");
           if (isNaN(firstop) || ![1, 2, 3].includes(Number(firstop))) {
               alert("Por favor, ingrese una opción válida (1, 2 o 3) para la pregunta 1.");
           }
        } while (isNaN(firstop) || ![1, 2, 3].includes(Number(firstop)));       
  };
    
   let mudanza;
   
    if(happy==2){
     alert(`Marco Antonio decide unirse a Cleopatra y juntos construyen un imperio.\n
     Hay problemas de diferencias politicas y aparece Octavio rival de la pareja\n
     2.1 Mandar a liquidar a Octavio en secreto\n
     2.2 Intentar una negociacion\n
     2.3 No hacer nada y esperar`);
     do {
      mudanza = prompt("Que decion tomaras? 1 2 o 3");
      if (isNaN(mudanza) || ![1, 2, 3].includes(Number(mudanza))) {
          alert("Por favor, ingrese una opción válida (1, 2 o 3) para la pregunta 1.");
      }
     } while (isNaN(mudanza) || ![1, 2, 3].includes(Number(mudanza)));  
    }
  switch (happy){
    case "2":
      alert('nunca conocio a su empleada');
      delete Character.cleopatra.maid;
    break;
  }

   let enmity;

  if(happy==3){
     alert(`Cleopatra y Marco Antonio se vuelven enemigos.\n
     Existe un peligro de gerra entre imperios\n
     3.1 Cleopatra inicia la gerra\n
     3.2 MarcoAntonio inicia la gerra\n
     3.3 Marco Antonio y Cleopatra llegan a un acuerdo formando una alianza`);
     do {
      enmity = prompt("Que decion tomaras? 1 2 o 3");
      if (isNaN(enmity) || ![1, 2, 3].includes(Number(enmity))) {
          alert("Por favor, ingrese una opción válida (1, 2 o 3) para la pregunta 1.");
        }
      } while (isNaN(enmity) || ![1, 2, 3].includes(Number(enmity)));  
  }
   
    //parte Dos
   
   let option1;
   
    if(firstop==1){
     alert(`Cleopatra renuncia su cargo y se muda a roma\n
           Problemas de pareja Cleopatra anela el poder que perdio\n
           1.1 Abandonar a Marco Antonio y recuperar Egipto\n
           1.2 Marco Antonio la assesina por desconfianza\n
           1.3 Cleopatra en decesperacion se alia con Octavio y atentan contra de Marco Antonio`);
        do {
            option1 = prompt("Que decion tomaras? 1 2 o 3");
            if (isNaN(option1) || ![1, 2, 3].includes(Number(option1))) {
                alert("Por favor, ingrese una opción válida (1, 2 o 3) para la pregunta 1.");
               }
        } while (isNaN(option1) || ![1, 2, 3].includes(Number(option1)));   
    };
    switch(option1){
      case "1":
        delete Character.Cleopatra.maid
      break;
      case "2":
        alert("Cleopatra es en contrada muerta \n");
       a= alert("quieres volver a jugar");
       if(a==true){
        game();
       }
      break;
      case "3":
        alert("Marco Antinio muere y por desconfianza Octavio tambien asesina a Cleopatra");
        delete Couple;
        a= alert("quieres volver a jugar");
       if(a==true){
        game();
       }
      break;
    }
   
   let option2;
   
    if(firstop==2){
     alert(`Marco Antonio decide unirse a Cleopatra y juntos construyen un imperio\n
     Situacion Octavio lleno de ira empieza una gerra cotra del imperio Romano y Egipcio\n
     1.1 Uyen a la capital de Egipto Alegandria\n
     1.2 Dirigen sus tropas al campo de batalla\n
     1.3 SE dividen estrategicamente planeando una emboscada`);
     do {
      option2 = prompt("Que decion tomaras? 1 2 o 3");
      if (isNaN(option2) || ![1, 2, 3].includes(Number(option2))) {
          alert("Por favor, ingrese una opción válida (1, 2 o 3) para la pregunta 1.");
         }
  } while (isNaN(option2) || ![1, 2, 3].includes(Number(option2)));   
};

   switch(firstop) {
    case "1":  
      delete Character.MarcoAntonio.origin
    break;
    case "2":
      alert("Cleopatra a muerto")
      delete Character.queen
    break;
    case "3":
      alert(`Marco Antonio pierde su nacionalidad 😢😥\n`);
      break;
  }
};
  game();

   let Couple=Character({name:' Cleopatra'},{name: ' Marco Antonio'});
//const cleopatraProperties = Object.keys(Character().egipcia);
//const marcoAntonioProperties = Object.keys(Character().romano);
let characterJSON = JSON.stringify(Character({ name: ' Cleopatra\n'}, { name: ' Marco Antonio\n' }));

// Obtén el elemento donde mostrarás la información
let characterInfoElement = document.getElementById('characterInfo');

// Crea un nuevo elemento <pre> para mostrar la información formateada
let preElement = document.createElement('pre');
preElement.textContent = characterJSON;

// Agrega el elemento <pre> al elemento principal en el HTML
characterInfoElement.appendChild(preElement);

console.log(Couple);