const foto = document.createElement("img");
function gerarImagem(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((data) => {
        let aqui = document.getElementById("img-dog"); 
        aqui.appendChild(foto);
        foto.src = data.message;
    })
    foto.empty();
}
