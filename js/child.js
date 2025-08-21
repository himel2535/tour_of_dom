// document.getElementById("players_container").childNodes[3].childNodes[1].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode


// 1. create element and set innerText or innerHTML
const newChild=document.createElement('li');
newChild.innerText='new born footballer here';

// 2. find the parent where you will add the child

const playerList=document.getElementById('player_list')


// 3. append the child to the parent

playerList.appendChild(newChild)
