const a = document.getElementsByClassName("logo");
const gameInfo = document.querySelector("#gameinfo");
const More = document.querySelector("#More");
const gameMenue = document.querySelector("#GameList");
const socialMenu = document.querySelector("#SocialList");
const moreMenue = document.querySelector("#MoreList");

function showGameList(){
    gameMenue.classList.remove("hidden");
}

function showSocialList(){
    socialMenu.classList.remove("hidden");
}

function hideSocialList(){
    socialMenu.classList.add("hidden");
}

function hideGameList(){
    gameMenue.classList.add("hidden");
}

function showMoreList(){
    moreMenue.classList.remove("hidden");
}

function hideMoreList(){
    moreMenue.classList.add("hidden");
}



