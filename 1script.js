let contentGridElement = document.getElementById("GridContent")

let jSonDatabase = [
  {
    "title" : "The Second Best Quarterback",
    "picture_url" : "jared.jpg",
    "background_color" : "#",
    "reasons" : "Jared Goff is the most accurate quaterback in the existence of the NFL. He could hit a bullseye from 70 yards out. Don't let his down year in 2019 fool you, as Sean McVay's offense was too reliant on a hobbled Todd Gurley. Without the crutch of Gurley and without the speed of Cooks, Sean McVay may have to change his playbook, resulting in more variety for our Marin Catholic man."
  },
  {
    "title" : "The Third Best Quarterback",
    "picture_url" : "patrick.jpg",
    "background_color" : "#",
    "reasons" : "Due to being trained by Alex Smith, Kermit the Frog has become both the smartest, quickest, most composed, and most athletically talented quarterback ever. In his first full season he threw 50 touchdowns. Most QB's can barely get to 25."
  },

  {
    "title" : "The Fourth Best Quarterback",
    "picture_url" : "Kyler.jpg",
    "background_color" : "#",
    "reasons" : "Despite a 6-10 season, Kyler Murray put the team on his back, using the corpse of Larry Fitzgerald and studs Christian Kirk and Kenyan Drake. His scrambling ability is also often overlooked, especially with how spread that offense can be. Expect great additions to this Air Raid Offense with the addition of DeAndre Hopkins. "
  },


]

for (var i=0; i< jSonDatabase.length; i++){
  createtheElement(jSonDatabase[i])
}

function createtheElement(incomingJSON){
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['background_color']
  newContentElement.classList.add("Items");

  let newContentHeading = document.createElement("H3")
  newContentHeading.classList.add("contentTitle");
  newContentHeading.innerHTML = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  let newImage = document.createElement("IMG");
  newImage.classList.add("contentImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  let newContentReasons = document.createElement("P");
  newContentReasons.classList.add("reasoning");
  newContentReasons.innerHTML = incomingJSON['reasons'];
  newContentElement.appendChild(newContentReasons);

  contentGridElement.appendChild(newContentElement);
}
