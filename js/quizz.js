function red(id){
  var img = document.getElementById(id);  
  img.style.border = "2px solid red";  
}
function green(id){
  var img = document.getElementById(id);  
  img.style.border = "2px solid green";  
}
function redButon(id){
  var buton = document.getElementById(id);
  buton.style.border="2px solid red"; 
}
function greenButon(id){
  var buton = document.getElementById(id);
  buton.style.border="3px solid green"; 
}
function colorButon(id){
  var buton = document.getElementById(id);
  buton.style.border="3px solid #737379";
}

function lockOptions(questionName) {
  const options = document.querySelectorAll(`input[name="${questionName}"]`);
  options.forEach(option => {
      if (!option.checked) {
          option.disabled = true; // Désactive toutes les options non sélectionnées
      }
  });
}

var listReponse=[];
i=0;
function selectReponse(id){
  listReponse[i]=id;
  i++;
  console.log(listReponse);

}
var listReponseTriee=[];
function tri(){
  var listQuestion1=['roumanie','chad'];
  var listQuestion2=['senegal','mali'];
  var listQuestion3=['monaco','indonesie'];
  var listQuestion4=['australie','new-zealand'];
  var listQuestion5=['equateur','venezuela','colombie'];
  var listQuestion6=['cote-ivoire','irlande'];
  var listQuestion7=['montreal','ottawa','toronto','vancouver'];
  var listQuestion8=['florence','naples','rome','milan'];
  var listQuestion9=['brisbane','melbourne','canberra','sydney'];
  var listQuestion10=['louxor','gizeh','caire','alexandrie'];
  var listQuestion11=['salvador','paulo','brasilia','rio'];
  var listQuestion12=['nagoya','tokyo','kyoto','osaka'];
  for(var j=0;j<12;j++){
    if(listQuestion1.includes(listReponse[j])){
      listReponseTriee[0]=listReponse[j];
    }else if(listQuestion2.includes(listReponse[j])){
      listReponseTriee[1]=listReponse[j];
    }else if(listQuestion3.includes(listReponse[j])){
      listReponseTriee[2]=listReponse[j];

    }else if(listQuestion4.includes(listReponse[j])){
      listReponseTriee[3]=listReponse[j];

    }else if(listQuestion5.includes(listReponse[j])){
      listReponseTriee[4]=listReponse[j];

    }else if(listQuestion6.includes(listReponse[j])){
      listReponseTriee[5]=listReponse[j];

    }else if(listQuestion7.includes(listReponse[j])){
      listReponseTriee[6]=listReponse[j];

    }else if(listQuestion8.includes(listReponse[j])){
      listReponseTriee[7]=listReponse[j];

    }else if(listQuestion9.includes(listReponse[j])){
      listReponseTriee[8]=listReponse[j];

    }else if(listQuestion10.includes(listReponse[j])){
      listReponseTriee[9]=listReponse[j];

    }else if(listQuestion11.includes(listReponse[j])){
      listReponseTriee[10]=listReponse[j];

    }else if(listQuestion12.includes(listReponse[j])){
      listReponseTriee[11]=listReponse[j];
    }
  }
  return listReponseTriee;
}
Score=0;
function TotalScore(){
  var tabReponse=tri();
  var tabReponseCorrect=['roumanie','mali','monaco','new-zealand','venezuela','irlande','ottawa','rome','canberra','caire','brasilia','tokyo'];
  for(var j=0;j<6;j++){
    if(tabReponse[j]==tabReponseCorrect[j]){
      Score++;
      green(tabReponse[j]);
    }else{
      green(tabReponseCorrect[j]);
      red(tabReponse[j]);
    }
  }
  for (var j=6;j<12;j++){
    if(tabReponse[j]==tabReponseCorrect[j]){
      greenButon(tabReponse[j]);
      Score++;
    }else{
      greenButon(tabReponseCorrect[j]);
      redButon(tabReponse[j]);
    }
  }
  alert("Votre score est de "+Score+"/12");
  if (Score==12){
    alert("Felicitation vous avez obtenu le score maximum");
  }else{
    alert("Vous pouvez faire mieux la prochaine fois");
    alert("Cliquez sur OK pour decouvrir la correction de vos reponses incorrectes");
  }
}