var player_1name=localStorage.getItem("player_1name_key");
var player_2name=localStorage.getItem("player_2name_key");
var player_1score=0;
var player_2score=0;
document.getElementById("player_1name").innerHTML=player_1name+":";
document.getElementById("player_2name").innerHTML=player_2name+":";
document.getElementById("player_1score").innerHTML=player_1score;
document.getElementById("player_2score").innerHTML=player_2score;
document.getElementById("player_question").innerHTML="Question turn: "+player_1name;
document.getElementById("player_answer").innerHTML="Answer turn: "+player_2name;
 
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    correctanswer=Number(number1)*Number(number2);
    console.log(correctanswer);
    h4_tag="<h4>"+number1+" x "+number2+"</h4>";
    input_tag="<br><input type='number' id='input_box'>"
    button_tag="<br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=h4_tag+input_tag+button_tag;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
    answer=document.getElementById("input_box").value;
    console.log("Answer is "+answer);
  if(answer==correctanswer){
      if(answer_turn=="player1"){
      player_1score=player_1score+1;
      document.getElementById("player_1score").innerHTML=player_1score;
      }
      else{
          player_2score=player_2score+1;
          document.getElementById("player_2score").innerHTML=player_2score;
      }
  }
 if(question_turn=="player1"){
     question_turn="player2";
     document.getElementById("player_question").innerHTML="Question turn : "+player_2name;
 }
 else{
     question_turn="player1";
     document.getElementById("player_question").innerHTML="Question turn : "+player_1name;
 }
 if(answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="Answer turn : "+player_2name;
}
else{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="Answer turn : "+player_1name;
}
document.getElementById("output").innerHTML="";
}