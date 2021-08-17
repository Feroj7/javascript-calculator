const input = document.getElementById('display');

   function seven(){
     input.value += 7;
   }
   function eight(){
     input.value += 8;
   }
   function nine(){
     input.value += 9;
   }
   function add(){
     input.value += '+';
   }
   function four(){
    input.value += 4;
   }
   function five(){
    input.value += 5;
   }
   function six(){
    input.value += 6;
   }
   function sub(){
    input.value += '-';
   }
   function one(){
    input.value += 1;
   }
   function two(){
    input.value += 2;
   }
   function three(){
    input.value += 3;
   }
   function multiplication(){
    input.value += '*';
   }

   function clr() {
    input.value = "";
  }
  function zero(){
    input.value += 0;
  }
  function divide(){
    input.value += '/';
  }
  function equal(){
    var calculate = eval(input.value);
    input.value = calculate;
  }