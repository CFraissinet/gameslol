const url ='https://api-esportplayers.vercel.app/teamsByLeague/LEC'
fetch(url)
.then(reponse=>reponse.json())
.then(data=>{
    console.log(data);
    console.log(findPlayer(data,"Caps"))
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

/* fetch random team 
prendre la taille data.players
generer un chiffre aléatoire entre 0 et la taille tableau au dessus
faire un console log data.player[chiffre aléatoire]
*/
