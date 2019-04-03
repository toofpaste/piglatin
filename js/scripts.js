$(function(){
  $("#formOne").submit(function(event){
    var userInput =  $("input#sentence").val();
    userInput = " " + userInput;
    var words = userInput.split(" ");
    var letters = userInput.split("");
    var startVowel = [];
    var vowels = ["a", "e", "i", "o", "u"];
    var consenant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s","t", "v","w", "x", "y", "z"];
    var startCon = [];
    for(var i = 0; i < letters.length; i++){
      for(var o = 0; o < vowels.length; o++){
        if(letters[i] === vowels[o] && letters[i - 1] === " " && letters[i] !== " "){
          startVowel.push(i);
        }else if (letters[i] === " "){
          i++;
        };
      };
    };


    var consCount = [];
    var spaceCount = 0;

    var count = [];
    for(var r = 0; r < letters.length; r++){
      var jump = 0;
      for(var t = 0; t < consenant.length; t++){
        if(letters[r] === consenant[t] && letters[r] !== " "  && letters[r - 1] === " "){
          count.push(r);
            for(var e = 0; e < consenant.length; e++){
              if (letters[r+1]=== consenant[e]){
                jump++;
                count.push(r+1);
                for(var p = 0; p < consenant.length; p++){
                  if(letters[r+2] === consenant[p]){
                    jump++;
                    count.push(r+2);
                    for(var q = 0; q < consenant.length; q++){
                      if(letters[r+3] === consenant[q]){
                        jump++;
                        count.push(r+3);
                      };
                    };
                  };
                }
              };
            }
        }else if (letters[r] === " "){
          spaceCount = r;
          r++;
        };

      };
      r += jump;
      console.log(startVowel);
      console.log(count);
    };










    event.preventDefault();
  });




});


//check for words beggining with vowels
//check for words beggining with qu
