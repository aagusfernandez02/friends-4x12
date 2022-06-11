let curiosidades = [{
    img: "https://m.media-amazon.com/images/M/MV5BMTY4ODkwMTQxOF5BMl5BanBnXkFtZTgwMjQyODU0MDE@._V1_UY100_CR23,0,100,100_AL_.jpg",
    alt: "Phoebe en el doctor con su hermano y su mujer",
    contenido: "El doctor le menciona a Phoebe que cuando se implanten los 5 embriones, la chance de que quede embarazada es del 25%. En episodios posteriores resulta que ella tiene trillizos, lo que tiene una chance aproximada de 1 en 568 (menos del 0.2%)",
}, {
    img: "https://m.media-amazon.com/images/M/MV5BMTgxMjM5ODk3OV5BMl5BanBnXkFtZTgwMDIyODU0MDE@._V1_UY100_CR24,0,100,100_AL_.jpg",
    alt: "Rachel y Monica jugando",
    contenido: "A pesar de que las chicas pierden el concurso, demuestran saber más sobre los chicos. Esto porque 2 de las respuestas correctas de los chicos fueron adivinaciones (el nombre de la abuela de Monica y Ross, y el número de categorías de toallas de Monica). Además, una respuesta incorrecta de las chicas podría haber sido correcta porque Monica sabía la respuesta, pero Rachel se apuró en contestar. Si no hubiera sido por estos casos, el concurso habría terminado 10-8 a favor de las chicas",
}, {
    img: "https://vader.news/__export/1621565995908/sites/gadgets/img/2021/05/20/friends_lisa_kudrow.jpg_1900266933.jpg",
    alt: "Phoebe embarazada",
    contenido: "El arco narrativo de la historia de Phoebe siendo madre de los hijos de su hermano fue escrito porque Lisa Kudrow (Phoebe) estaba realmente embarazada",
}, {
    img: "https://static.stereogum.com/uploads/2019/05/Steve-Miller-Band-The-Joker-1556807940.jpg",
    alt: "The Joker, Steve Miller Band",
    contenido: "El amigo imaginario de Joey, Maurice el vaquero del espacio, que se nombra en el juego de preguntas y respuestas, es una referencia a la canción “The Joker” de Steve Miller Band",
}, {
    img: "https://s3-sa-east-1.amazonaws.com/cdn.gente.com.ar/uploads/2019/09/imagen-sin-titulo.jpg",
    alt: "Central Perk",
    contenido: "Este es uno de los pocos episodios donde ninguna escena es en Central Perk",
}, {
    img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/05/friends-pat-perro.jpg?itok=MRB2fkOH",
    alt: "Perro de cerámica",
    contenido: "Es el primer episodio donde el perro de cerámica tiene labios rojos",
}, {
    img: "https://m.media-amazon.com/images/M/MV5BMTc1NTUwNzY4MV5BMl5BanBnXkFtZTgwNDEzMzYzMzE@._V1_FMjpg_UX1000_.jpg",
    alt: "Aparición de Jonathan Silverman como doctor en otro episodio",
    contenido: "Se menciona que la película favorita de Rachel es Weekend at Barnie's, que fue protagonizada por Jonathan Silverman. Este mismo actuó en otro episodio como el doctor que asiste al parto de Ben, el hijo de Ross y Carol",
}, {
    img: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/series-television/ronda-relampago-friends/134289437-1-esl-ES/Trivial-Eres-capaz-de-superar-la-ronda-relampago-de-Friends.jpg",
    alt: "Ross leyendo la ronda relámpago",
    contenido: "Cuando Ross hace la última pregunta de la ronda relámpago, se visualiza en el pizarrón que hay 16 preguntas para cada equipo. Ambos equipos obtuvieron 9/10 preguntas correctas, sin embargo, nunca se revela la pregunta que Joey y Chandler fallaron",
}, {
    img: "https://fotos.perfil.com/2019/10/01/monica.jpg",
    alt: "Monica aspirando la aspiradora",
    contenido: "Las categorías de toallas de Monica incluyen: de playa, para invitados, para invitados elegantes, toallas viejas, de baño, de cocina y de uso diario",
}, {
    img: "https://us.cdn.eltribuno.com/052021/1621712677663/ronda.jpg",
    alt: "Ronda relampago con Ross grande",
    contenido: "A pesar de que la Ronda Relámpago se suponía ser de 30 segundos, los chicos realmente tuvieron 43 segundos y las chicas 42",
}, {
    img: "https://www.friendspeich.com/magna/thumbs/319.jpg",
    alt: "Pizarra",
    contenido: "El pizarrón usado en el juego fue visto en otro episodio llamado Jeopardy! (1984)",
}, {
    img: "https://img.huffingtonpost.com/asset/5ce41c7f240000990e7f18f8.png?cache=ne0AU0kDHq&ops=1778_1000",
    alt: "Phoebe sorprendida",
    contenido: "Se asume que Phoebe recibe el test de embarazo algunos días después del procedimiento, incluso las chicas siguen empacando las cosas para dejar el departamento y Phoebe viste la misma ropa. Sin embargo, en la realidad el test de embarazo realmente es efectivo tras 10/14 días realizado el procedimiento",
}];

const next_btn = document.getElementById("next_btn");
const prev_btn = document.getElementById("prev_btn");
const actual_card_img = document.getElementById("actual_img");
const actual_card_p = document.getElementById("actual_p");
const next_card_img = document.getElementById("next_img");
const next_card_p = document.getElementById("next_p");
const prev_card_img = document.getElementById("prev_img");
const prev_card_p = document.getElementById("prev_p");

let P = 0;
let A = 1;
let N = 2;

const renderContent = () => {
    // Card actual
    actual_card_img.src = curiosidades[A].img;
    actual_card_img.alt = curiosidades[A].alt;
    actual_card_p.innerText = curiosidades[A].contenido;
    // Card próxima
    next_card_img.src = curiosidades[N].img;
    next_card_img.alt = curiosidades[N].alt;
    next_card_p.innerText = curiosidades[N].contenido;
    // Card anterior
    prev_card_img.src = curiosidades[P].img;
    prev_card_img.alt = curiosidades[P].alt;
    prev_card_p.innerText = curiosidades[P].contenido;

}

next_btn.addEventListener("click", () => {
    if (N == (curiosidades.length - 1)) { N = 0; } else { N++; }
    if (A == (curiosidades.length - 1)) { A = 0; } else { A++; }
    if (P == (curiosidades.length - 1)) { P = 0; } else { P++; }
    renderContent();
});
prev_btn.addEventListener("click", () => {
    if (P == 0) { P = (curiosidades.length - 1); } else { P--; }
    if (A == 0) { A = (curiosidades.length - 1); } else { A--; }
    if (N == 0) { N = (curiosidades.length - 1); } else { N--; }
    renderContent();
});

renderContent();