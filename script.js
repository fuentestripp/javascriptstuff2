let contentGridElement = document.getElementById("GridContent")

let jSonDatabase = [
  {
    "title" : "The Best Quarterback",
    "picture_url" : "alex.jpg",
    "background_color" : "#",
    "reasons" : "Alex Smith, though injured, is the greatest quarterback I have ever seen. Ever been made fun of? Told you were incapable? Told you couldn't ever do somthing? Be replaced by someone better? Have you ever had to be the scapegoat for everyone else's failures? Alex Smith has done all of this. He was the face of San Francisco despite being in a toxic and dysfunctional work environment. And he persevered more than any other NFL quarterback ever would."
  },
  {
    "title" : "The Second Best Quarterback",
    "picture_url" : "jared.jpg",
    "background_color" : "#",
    "reasons" : "Jared Goff is the most accurate quaterback in the existence of the NFL. He could hit a bullseye from 70 yards out. And he's from the Bay Area."
  },
  {
    "title" : "The Third Best Quarterback",
    "picture_url" : "patrick.jpg",
    "background_color" : "#",
    "reasons" : "Due to being trained by Alex Smith, Kermit the Froghas become both the smartest, quickest, most composed, and most athletically talented quarterback ever. In his first full season he threw 50 touchdowns. Most QB's can barely get to 25."
  },
]

for (var i=0; i< jSonDatabase.length; i++){
  createtheElement(jSonDatabase[i])
}

function createtheElement(incomingJSON){
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['background_color']
  newContentElement.classList.add("contentItem");

  let newContentHeading = document.createElement("H3")
  newContentHeading.classList.add("contentTitle");
  newContentHeading.innerHTML = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  let newImage = document.createElement("IMG");
  newImage.classList.add("contentImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  let newContentReasons = document.createElement("UL");
  newContentElement.appendChild(newContentReasons);

  for(var i=0; i<incomingJSON['reasons'].length; i++){
    var currentReasonsString = incomingJSON['reasons'][i];
    var newReasons = document.createElement("LI");
    newReasons.innerHTML = currentReasonsString;
    newContentReasons.appendChild(newReasons);
  }

  gridContentElement.appendChild(newContentElement);
}
