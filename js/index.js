let guestLogId = 1;

let submit = document.getElementById("submit");
let reset = document.getElementById("reset");

submit.addEventListener("click", addGuestLog);
reset.addEventListener("click", cancleAll);

function addGuestLog() {
    const guestCommunity = document.getElementById("guestCommunity");
    const text = document.getElementById("guestName").value;
    const newP = document.createElement('p');

    newP.innerHTML = guestLogId +"번 방명록 : "+ text + "<br>";
    newP.innerHTML += text + "님은 " + makeGuestMovieFavor() + "같은 영화를 좋아하시는군요! 반갑습니다!";
    guestCommunity.appendChild(newP);
    alertCommonMovieFavor(text);
    guestLogId++;
}

function makeGuestMovieFavor() {
    const query = 'input[name="movieFavor"]:checked';
    const selectedMovies = document.querySelectorAll(query);
    let guestMovieFavor = "";
    selectedMovies.forEach((element)=> {
        guestMovieFavor += element.value + ', ';
    })
    return guestMovieFavor.slice(0,-2);
}

function cancleAll() {
    document.querySelector('input[name="guestName"]').value = "";

    let movies = document.getElementsByName("movieFavor");
    for(let i=0;i<movies.length;i++){
        movies[i].checked = false;
    }
}

function alertCommonMovieFavor(guestName) {
    const numberOfCommonMovies = document.querySelectorAll('input[name="movieFavor"]:checked').length;
    alert(`${guestName} 님, 저와 ${numberOfCommonMovies}개의 취향이 같으시네요!`);
}
