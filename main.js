const url ='https://api-esportplayers.vercel.app/randomTeamByLeague/LEC'
fetch(url)
.then(reponse=>reponse.json())
.then(data=>{
    console.log(data);
    console.log(randomPlayer(data));
})
.catch(error => {
    console.log(error);
})

function findPlayer(data,name){
  for(let i=0; i<data.teams.length;i++){
    if (data.teams[i].players.find(item=>item.summonerName=== name)){
      return data.teams[i].players.find(item=>item.summonerName)
    }
  }
}

function randomPlayer(data){

  let numPlayer = Math.floor(Math.random() * (data.team.players.length - 0 + 1)) + 0;
  return data.team.players[numPlayer].summonerName;
 
}

function verifPlayer (data,reponse,name){
  if(document.getElementById('joueur')===randomPlayer(data)){
    return "Bonne reponse"
  }else{
    return "Mauvaise Reponse"
  }
}

/* 
fetch random team 
prendre la taille data.players
generer un chiffre aléatoire entre 0 et la taille tableau au dessus
faire un console log data.player[chiffre aléatoire]
*/
