let summonerName;
let imgName;
let nameTeam;
let rolePlayer;
let numPlayer;
let reponse;
let imgVie;
let nombreVie = 3;
let allInfo;
let namePlayer;
let liguePlayer;



const url ='https://api-esportplayers.vercel.app/randomTeamByLeague/LEC'
fetch(url)
.then(reponse=>reponse.json())
.then(data=>{
    allInfo = data;
    randomPlayer(data);
    //afficherVie(data);
    //afficherTeam(data);
    //afficherRole(data);
    //afficherVie(data);
    //afficherIndices(data);
  })
.catch(error => {
    console.log(error);
})


// document.querySelector("#button-addon2").addEventListener("click",function() {
//   let guess = document.getElementById("searchInput").value;
//   if(guess===summonerName){
//     console.log("Bonne reponse");
//     namePlayer= document.getElementById("namePlayer");
//     namePlayer.setAttribute("style","opacity: 1");

//   }else{
//     if (nombreVie>0){
//       console.log("Mauvaise reponse");
//       nombreVie = nombreVie - 1;
//       afficherTeam(allInfo);
//       afficherVie(allInfo);
      
//     }else{
//       alert("Vous avez perdu.")
//     }

//   }
// })


// function findPlayer(data,name){
//   for(let i=0; i<data.teams.length;i++){
//     if (data.teams[i].players.find(item=>item.summonerName=== name)){
//       return data.teams[i].players.find(item=>item.summonerName)
//     }
//   }
// }

function randomPlayer(data){

  numPlayer = Math.floor(Math.random() * (data.team.players.length ));
  console.log(numPlayer);
  console.log(data)
  /*let imagePlayer = document.createElement("img")
  
  imagePlayer.src = data.team.players[numPlayer].image;*/
  summonerName = data.team.players[numPlayer].summonerName;
  imgName = data.team.players[numPlayer].image;
  liguePlayer= data.team.homeLeague[0].name;
  document.querySelector("#namePlayer").textContent = summonerName;
  document.querySelector("#imgPlayer").src = imgName;
  document.querySelector("#liguePlayer").textContent = liguePlayer;
 
}

// function afficherTeam(data){
//   nameTeam = data.team.code;
//   /*const newh3 = document.createElement("h3");
//   const newContent = document.createTextNode("Equipe :");
//   newh3.appendChild(newContent);
//   const currentH3 = document.getElementById("nameTeam");*/
//   document.getElementById("nameTeam").textContent = nameTeam;
// }

// function afficherRole(data){
//   rolePlayer = data.team.players[numPlayer].role;
//   document.getElementById("poste").textContent = rolePlayer;
// }

// function afficherVie(data){
//   imgVie = document.getElementById("nombreVie");
//   imgVie.innerHTML="";
//   for (let i =0;i<nombreVie;i++){
//       let imageCoeur = document.createElement("img");
//       imageCoeur.src="/images/coeur.svg";
//       document.body.appendChild(imageCoeur);
//       imgVie.appendChild = imageCoeur;
      
//   }
// }
//placer les coueurs dans la partie positionVie
//Todo Gerer les indices avec les vies + condition de fin quand vie =0


