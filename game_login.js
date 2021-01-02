function adduser(){
    player_1name=document.getElementById("player1_name_input").value;
    player_2name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player_1name_key",player_1name);
    localStorage.setItem("player_2name_key",player_2name);
    window.location="game_page.html";
}