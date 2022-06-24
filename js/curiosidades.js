let curiosidades = [{
    img: "img/curiosidades/phoebe en el doctor.jpg",
    alt: "Phoebe en el doctor con su hermano y su mujer",
    contenido: "El doctor le menciona a Phoebe que cuando se implanten los 5 embriones, la chance de que quede embarazada es del 25%. En episodios posteriores resulta que ella tiene trillizos, lo que tiene una chance aproximada de 1 en 568 (menos del 0.2%)",
}, {
    img: "img/curiosidades/monica y rachel jugando.jpg",
    alt: "Rachel y Monica jugando",
    contenido: "A pesar de que las chicas pierden el concurso, demuestran saber más sobre los chicos. Esto porque 2 de las respuestas correctas de los chicos fueron adivinaciones (el nombre de la abuela de Monica y Ross, y el número de categorías de toallas de Monica). Además, una respuesta incorrecta de las chicas podría haber sido correcta porque Monica sabía la respuesta, pero Rachel se apuró en contestar. Si no hubiera sido por estos casos, el concurso habría terminado 10-8 a favor de las chicas",
}, {
    img: "img/curiosidades/phoebe embarazada.jpg",
    alt: "Phoebe embarazada",
    contenido: "El arco narrativo de la historia de Phoebe siendo madre de los hijos de su hermano fue escrito porque Lisa Kudrow (Phoebe) estaba realmente embarazada",
}, {
    img: "img/curiosidades/the joker.jpg",
    alt: "The Joker, Steve Miller Band",
    contenido: "El amigo imaginario de Joey, Maurice el vaquero del espacio, que se nombra en el juego de preguntas y respuestas, es una referencia a la canción “The Joker” de Steve Miller Band",
}, {
    img: "img/curiosidades/central perk.jpg",
    alt: "Central Perk",
    contenido: "Este es uno de los pocos episodios donde ninguna escena es en Central Perk",
}, {
    img: "img/curiosidades/perro ceramica.jpg",
    alt: "Perro de cerámica",
    contenido: "Es el primer episodio donde el perro de cerámica tiene labios rojos",
}, {
    img: "img/curiosidades/jonahtan silverman.jpg",
    alt: "Aparición de Jonathan Silverman como doctor en otro episodio",
    contenido: "Se menciona que la película favorita de Rachel es Weekend at Barnie's, que fue protagonizada por Jonathan Silverman. Este mismo actuó en otro episodio como el doctor que asiste al parto de Ben, el hijo de Ross y Carol",
}, {
    img: "img/curiosidades/ross ronda relampago.jpg",
    alt: "Ross leyendo la ronda relámpago",
    contenido: "Cuando Ross hace la última pregunta de la ronda relámpago, se visualiza en el pizarrón que hay 16 preguntas para cada equipo. Ambos equipos obtuvieron 9/10 preguntas correctas, sin embargo, nunca se revela la pregunta que Joey y Chandler fallaron",
}, {
    img: "img/curiosidades/monica aspirando aspiradora.jpg",
    alt: "Monica aspirando la aspiradora",
    contenido: "Las categorías de toallas de Monica incluyen: de playa, para invitados, para invitados elegantes, toallas viejas, de baño, de cocina y de uso diario",
}, {
    img: "img/curiosidades/ross grande.jpg",
    alt: "Ronda relampago con Ross grande",
    contenido: "A pesar de que la Ronda Relámpago se suponía ser de 30 segundos, los chicos realmente tuvieron 43 segundos y las chicas 42",
}, {
    img: "img/curiosidades/pizarra.jpg",
    alt: "Pizarra",
    contenido: "El pizarrón usado en el juego fue visto en otro episodio llamado Jeopardy! (1984)",
}, {
    img: "img/curiosidades/phoebe sorprendida.jpg",
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