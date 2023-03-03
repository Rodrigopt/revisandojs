const musica = {
    Titulo: "A",
    Album: "B",
    Lançamento: 2008,
    Autor:"C"
}

propriedade(musica);

function propriedade(texto) {
    for(prop in texto) {
        if (typeof texto[prop] === "string"){
           console.log(prop,texto[prop]);
        }
    }
}