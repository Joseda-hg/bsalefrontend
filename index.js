class ItemCard{
    constructor(id,name,url_image,price,discount,category){
        this.id = id,
        this.name = name,
        this.url_image = url_image,
        this.price = price
        this.discount = discount
        this.category = category
    }
}


// let items = [
//     {
//         "id": 5,
//         "name": "ENERGETICA MR BIG",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
//         "price": 1490,
//         "discount": 20,
//         "category": 1
//     },
//     {
//         "id": 6,
//         "name": "ENERGETICA RED BULL",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
//         "price": 1490,
//         "discount": 0,
//         "category": 1
//     },
//     {
//         "id": 7,
//         "name": "ENERGETICA SCORE",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
//         "price": 1290,
//         "discount": 0,
//         "category": 1
//     },
//     {
//         "id": 8,
//         "name": "PISCO ALTO DEL CARMEN 35º",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
//         "price": 7990,
//         "discount": 10,
//         "category": 2
//     },
//     {
//         "id": 9,
//         "name": "PISCO ALTO DEL CARMEN 40º ",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto408581.jpg",
//         "price": 5990,
//         "discount": 0,
//         "category": 2
//     },
//     {
//         "id": 10,
//         "name": "PISCO ARTESANOS 35º ",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/artesanos8818.jpg",
//         "price": 3990,
//         "discount": 0,
//         "category": 2
//     },
//     {
//         "id": 11,
//         "name": "PISCO BAUZA 40º ",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bauza408831.jpg",
//         "price": 4990,
//         "discount": 0,
//         "category": 2
//     },
//     {
//         "id": 12,
//         "name": "PISCO CAMPANARIO 35º",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/campanario8845.jpg",
//         "price": 2990,
//         "discount": 20,
//         "category": 2
//     },
//     {
//         "id": 13,
//         "name": "PISCO CAMPANARIO 40º",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/campanario408881.jpg",
//         "price": 3990,
//         "discount": 20,
//         "category": 2
//     },
//     {
//         "id": 14,
//         "name": "PISCO ESPIRITU DEL ELQUI 40º",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/espiritu8936.jpg",
//         "price": 5990,
//         "discount": 20,
//         "category": 2
//     },
//     {
//         "id": 15,
//         "name": "PISCO ESPIRITU DEL ELQUI 45º",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/espiritu8957.jpg",
//         "price": 6990,
//         "discount": 5,
//         "category": 2
//     },
//     {
//         "id": 16,
//         "name": "PISCO HORCON QUEMADO 35º",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/horcon359049.jpg",
//         "price": 6990,
//         "discount": 20,
//         "category": 2
//     },
//     {
//         "id": 17,
//         "name": "PISCO HORCON QUEMADO 40º",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/horcon409062.jpg",
//         "price": 7990,
//         "discount": 20,
//         "category": 2
//     },
//     {
//         "id": 18,
//         "name": "PISCO HORCON QUEMADO 46º",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/horcon469075.jpg",
//         "price": 8990,
//         "discount": 20,
//         "category": 2
//     },
//     {
//         "id": 19,
//         "name": "PISCO MISTRAL 35º",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/mistral359200.jpg",
//         "price": 4990,
//         "discount": 20,
//         "category": 2
//     },
//     {
//         "id": 20,
//         "name": "PISCO MISTRAL 40º ",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/mistral409215.jpg",
//         "price": 4990,
//         "discount": 20,
//         "category": 2
//     },
//     {
//         "id": 21,
//         "name": "PISCO TRES ERRES 35º",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/rrr359305.jpg",
//         "price": 4590,
//         "discount": 20,
//         "category": 2
//     },
//     {
//         "id": 22,
//         "name": "PISCO TRES ERRES 40º",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/rrr409319.jpg",
//         "price": 4990,
//         "discount": 20,
//         "category": 2
//     },
//     {
//         "id": 23,
//         "name": "RON BACARDI AÑEJO",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardi9450.jpg",
//         "price": 4990,
//         "discount": 0,
//         "category": 3
//     },
//     {
//         "id": 24,
//         "name": "RON BACARDI 8 AÑOS",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardianejo9463.jpg",
//         "price": 5990,
//         "discount": 0,
//         "category": 3
//     },
//     {
//         "id": 25,
//         "name": "RON ABUELO",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/abuelo9475.jpg",
//         "price": 3990,
//         "discount": 0,
//         "category": 3
//     },
//     {
//         "id": 26,
//         "name": "RON BARCELO AÑEJO",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/barceloanejo9553.jpg",
//         "price": 4990,
//         "discount": 0,
//         "category": 3
//     },
//     {
//         "id": 27,
//         "name": "RON BARCELO DORADO",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/barcelodorado9567.jpg",
//         "price": 3990,
//         "discount": 0,
//         "category": 3
//     },
//     {
//         "id": 28,
//         "name": "RON FLOR DE CAÑA 4 AÑOS",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/flor49664.jpg",
//         "price": 3990,
//         "discount": 0,
//         "category": 3
//     },
//     {
//         "id": 29,
//         "name": "RON FLOR DE CAÑA 5 AÑOS",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/flor59677.jpg",
//         "price": 4590,
//         "discount": 0,
//         "category": 3
//     },
//     {
//         "id": 30,
//         "name": "RON HAVANA AÑEJO RESERVA",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/havanaan-ejo9750.jpg",
//         "price": 6990,
//         "discount": 0,
//         "category": 3
//     },
//     {
//         "id": 31,
//         "name": "RON HAVANA ESPECIAL",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/havanaespecial9768.jpg",
//         "price": 5990,
//         "discount": 20,
//         "category": 3
//     },
//     {
//         "id": 32,
//         "name": "RON PAMPERO",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/pampero-especial0296.jpg",
//         "price": 5490,
//         "discount": 20,
//         "category": 3
//     },
//     {
//         "id": 33,
//         "name": "RON PAMPERO ANIVERSARIO",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/ron_pampero_aniversario0311.jpg",
//         "price": 20000,
//         "discount": 15,
//         "category": 3
//     },
//     {
//         "id": 34,
//         "name": "ENERGETICA MONSTER RIPPER",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/mosterriper0436.jpg",
//         "price": 1990,
//         "discount": 0,
//         "category": 1
//     },
//     {
//         "id": 35,
//         "name": "ENERGETICA MAKKA DRINKS",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/makka-drinks-250ml0455.jpg",
//         "price": 1190,
//         "discount": 0,
//         "category": 1
//     },
//     {
//         "id": 36,
//         "name": "ENERGETICA MONSTER VERDE",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/monsterverde0476.jpg",
//         "price": 1990,
//         "discount": 0,
//         "category": 1
//     },
//     {
//         "id": 37,
//         "name": "COCA COLA ZERO DESECHABLE",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/cocazero9766.jpg",
//         "price": 1490,
//         "discount": 0,
//         "category": 4
//     },
//     {
//         "id": 38,
//         "name": "RON BOTRAN AÑEJO 5 AÑOS",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/ronbotran9337.jpg",
//         "price": 4990,
//         "discount": 0,
//         "category": 3
//     },
//     {
//         "id": 39,
//         "name": "RON MITJANS",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/mitjan6396.jpg",
//         "price": 2990,
//         "discount": 0,
//         "category": 3
//     },
//     {
//         "id": 47,
//         "name": "Maní salado",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisaladomp4415.jpg",
//         "price": 600,
//         "discount": 0,
//         "category": 5
//     },
//     {
//         "id": 48,
//         "name": "SPRITE 1 1/2 Lts",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/sprite-lata-33cl5575.jpg",
//         "price": 1500,
//         "discount": 0,
//         "category": 4
//     },
//     {
//         "id": 50,
//         "name": "SPRITE 2 Lt",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/sprite-2lt4365.jpg",
//         "price": 1800,
//         "discount": 0,
//         "category": 4
//     },
//     {
//         "id": 52,
//         "name": "Fanta",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/fanta_2lt5236.jpg",
//         "price": 1500,
//         "discount": 0,
//         "category": 4
//     },
//     {
//         "id": 53,
//         "name": "Mani Sin Sal",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisinsalmp6988.jpg",
//         "price": 500,
//         "discount": 0,
//         "category": 5
//     },
//     {
//         "id": 54,
//         "name": "Papas Fritas Lisas Bolsa Grande",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisasgrande7128.jpg",
//         "price": 1490,
//         "discount": 0,
//         "category": 5
//     },
//     {
//         "id": 55,
//         "name": "Papas Fritas Bolsa Pequeña",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisas7271.jpg",
//         "price": 500,
//         "discount": 0,
//         "category": 5
//     },
//     {
//         "id": 56,
//         "name": "Papas Fritas Tarro",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/78028005335657432.jpg",
//         "price": 1990,
//         "discount": 0,
//         "category": 5
//     },
//     {
//         "id": 57,
//         "name": "COCA COLA NORMAL DESECHABLE 1500cc",
//         "url_image": null,
//         "price": 1500,
//         "discount": 0,
//         "category": 4
//     },
//     {
//         "id": 58,
//         "name": "COCA COLA LIGHT DESECHABLE",
//         "url_image": null,
//         "price": 1500,
//         "discount": 0,
//         "category": 4
//     },
//     {
//         "id": 68,
//         "name": "Bebida Sprite 1 Lt",
//         "url_image": null,
//         "price": 1250,
//         "discount": 10,
//         "category": 4
//     },
//     {
//         "id": 77,
//         "name": "ENERGETICA MONSTER RIPPER",
//         "url_image": "",
//         "price": 1990,
//         "discount": 0,
//         "category": 1
//     },
//     {
//         "id": 79,
//         "name": "ENERGETICA MONSTER VERDE",
//         "url_image": "",
//         "price": 1990,
//         "discount": 0,
//         "category": 1
//     },
//     {
//         "id": 87,
//         "name": "PISCO MISTRAL 35°",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/358978.jpg",
//         "price": 4990,
//         "discount": 0,
//         "category": 2
//     },
//     {
//         "id": 88,
//         "name": "PISCO MISTRAL GRAN NOBEL 40°",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/grannobel9104.jpg",
//         "price": 19900,
//         "discount": 0,
//         "category": 2
//     },
//     {
//         "id": 89,
//         "name": "PISCO MISTRAL 40°",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/409346.jpg",
//         "price": 4990,
//         "discount": 0,
//         "category": 2
//     },
//     {
//         "id": 90,
//         "name": "PISCO MISTRAL 46°",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/469463.jpg",
//         "price": 7890,
//         "discount": 0,
//         "category": 2
//     },
//     {
//         "id": 91,
//         "name": "PISCO MISTRAL NOBEL 40°",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/nobel409551.jpg",
//         "price": 19990,
//         "discount": 0,
//         "category": 2
//     },
//     {
//         "id": 92,
//         "name": "PISCO MISTRAL NOBEL 46",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/nobelanejado9639.jpg",
//         "price": 15990,
//         "discount": 15,
//         "category": 2
//     },
//     {
//         "id": 98,
//         "name": "Cerveza Escudo Normal LATA 350CC",
//         "url_image": "",
//         "price": 600,
//         "discount": 0,
//         "category": 6
//     },
//     {
//         "id": 99,
//         "name": "Cerveza Escudo Sin Filtrar LATA 350CC",
//         "url_image": "",
//         "price": 800,
//         "discount": 0,
//         "category": 6
//     },
//     {
//         "id": 104,
//         "name": "ABSOLUT",
//         "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/absolut21381.png",
//         "price": 8990,
//         "discount": 30,
//         "category": 7
//     }
// ]

let items = fetch('/api/products/')
.then((response) => {
  return response.json();
})
.then((myJson) => {
  console.log(myJson);
});

let categories = [
    {
        "id": 1,
        "name": "bebida energetica"
    },
    {
        "id": 2,
        "name": "pisco"
    },
    {
        "id": 3,
        "name": "ron"
    },
    {
        "id": 4,
        "name": "bebida"
    },
    {
        "id": 5,
        "name": "snack"
    },
    {
        "id": 6,
        "name": "cerveza"
    },
    {
        "id": 7,
        "name": "vodka"
    }
]

let cardContainer;



function generateCard(ItemCard) {
    let card = document.createElement('div');
    card.className = 'card shadow cursor-pointer';
    card.style = style="width: 18rem;"
    
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    let image = document.createElement('img');
    
    if(ItemCard.url_image){
        image.src = ItemCard.url_image;
        cardBody.appendChild(image);
    }
    else{
        image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///+qqqqmpqajo6M2NjY+Pj709PQzMzM4ODgrKys7Ozve3t7W1ta7u7v7+/u/v7/Hx8fu7u5CQkJmZmbh4eGzs7OLi4tFRUXn5+ewsLCZmZnQ0NAlJSWHh4dsbGyBgYF2dnZZWVlPT0+cnJyTk5MAAABpaWkaGhpdXV0eHh4ODg4WFhZqCiSVAAAP/UlEQVR4nO1d54KiOhilJ6ETRWDQEcvdndl9//e7afSijqCge37sjgohJ19PAkjSP/zDP/zD68A1gphgTf8JDPfZ3RkPRmylviOrBEoJ+lF2vNSKjWd38A64se2HCuUl94FyVULfjpcnUsPyE7VOTamj/pOa+NZypOmufVlVamKSQ8f3U9uy1hSWZae+74RyTcCKKvvrBcjSsJ2CHeEmO9TUevtNjZTYaEFTUR171qJ07TCnR8TjXWtexGA9uTwxnC3JdS49qm83WxWxXLk437Em6eFdMHxFuVvRShVXFH9egoxFz+jo3+csXKtsKh6pd/fDkpXcgsbwha4lrFmR56GstuCnpOPplZGKRmV7tDZ/CsFPTcYebiLIOXAU+ql6wQSNB576bF2NE85vMrdn+Jxj8hyf4/Ihno4fheCoek+IHfaDLm2IgUwnvk4TAVNQJZzC/lrXCtm1kkdcqwDTHUV5lAuwWL6k+g+6HBlU+cEXzIdUfpAYU/XxSiPM4iHW6IYPu1QdfGDDyWvkmFv9MxJ/g3u3iWMjG8iHWmAVzBqnVR/nEaM4AK5BzmTtu1RNHmAJQ12gXmAyIwkeHiO6wOPGJI48Zkbw/JrUYv1Yj9+wPd3Y3QiuS6OXjcyJJvOYsHWTCVwqJaiE47Z5B6i/GZciNe8JnfTtoGFrTKfHCHrjtTcCPBo1RqPIVPTZUaIJf0RFnSXBMSna8yQoKI4QNOL52WAOaov3h/5gbl60CuZR70xCXJo/zCcONhHSPOu+NJxmD8lI3ZkCd/ePqoEyj1StG1TH7jGidAQ9nxjMT/w4ZlA3OoNyaRi0mFJ/OOvgjpoYTQb/55YUztqNlvhxP9O5e5kcTNd+YIrBHfr9YDB/cbtDlBdhhBzUFOWfnDTnUF9Hcrs4mI7Oa8/OEIzb9TS5J44+AemtKnfzCU8HFckNtaL7M+f0TDCzuj62eQvyozmoa7y6UGdl/ZS9mQTKDfGb6vTcE+42rOt9Bz10CfloE+HVgpEX52Y4qLO5KrOxbzHZWcG7MmLIi8pmqjCuEyIV4dIiRQ7/KiEuV4RXCtFasAi5EC+50yWL8Cohxot1pBzexe0+zkJjYQ4aEwcniKmUl1U1NZFcsDKSoC8wI62CeMrBskhZYlFRxzAFOgBLmrvoQko49K+aOosOFRzGkK+hkxdLLJvqCAemM+zF+xkKyqIvOR1ivxwMaOKgBi8I/d7kNZSUR4RuNXVeQkm5mnbqYu8Pi0OfqNYDPmhZsHuCvv8C4Z6Dusyu3FTuLx5jh985HjueV2Z169on1/Gcmmqsk032uf8oblCkh+dwDH5Geb7n1ftEf7S7fnS9M2l2eItIN5U+4hT+dst+craaBopvM6ChffHJ22rbyvn2F4BQowAZ70241Qr8pgNm/NY0lA8KBF/17vzVAMw/ALDK/1QhoM2Swwc4dqujNRArfKBxhlqEQU7DQDjSd8UxK4z1rPikIB2Cz7O6+QU08y+rqUOI9RyIMURRZJ7FCZFekBCtRxFUxQdd/8yvAjD6Op/2JsTb/rmIbi5DZlgyxMeCRqIdcckwQPiAQT49kCAM8kraO34LhqBu/oSEjpHRy1DHptFg+An1I29ERhj1+sVufUwG5nBKhqYM8z4doAxLhirUYgQFq5gQrMyWbGLBsD6uRAky09z0MSQ/wlOdoQPwsegTwrivv1LXfj4aDXvFXjIE1lHj564RClDJMDL30qcprr/XQbutDoamejK3QQ9DU9mYmlFjGGFUDtzO1HonXLyOiBgPRcMqQ1k7sO8+tE+pZJgCkEoe4BzczuHtYvjhAnPfx/BkbIWZCoYpqFg6VZRDX4dpRGxOuXV918XQNhBilkDFVDLcm5QT4DqXgsKBXGB4lj4gF0sHww9pY3LLFgxPpla1rkNhxC10ycsfSkqrDKVP7YN9RcJGwdCl/SEGZ5q0DRlqHQofQpikPkdaMHQ1LpdOhuSfXYVhpletm/Lv0zq3w9WEQ5PFNYYe0OnVtE2FYQiZYG3AqH2YII/kLoM4JoIiHIJDwZC4KHZqJ0PpbDJOgiERWlUIal2kNXRs5lOG0u4aQ4manIHoXwXDg85NImJdOReDm255zBcM0Zbj+1gylCA7p5sh+XdfMjzibY0F7GfotGbcSAQZmGWrM9xomRRqkVQyXOdxQoF0zEsZpt8AAKzvOcNWPGQME40Gtm6G0omddLsMU6UZ3ePB6rfO0CYmeNCUCsMPUwuoQkoxoHlIaYdGmtqpWTDs8DQEmJLrYSgx93mzHbKsJr7wTT9DCZsbEwUVhiaOTGZgJqYhueFL4QWGoYbSXoYKPavPl257a6G2xNpSHWCoQF3/JZUMfYBBjogc0YiHlxgSdodehpJJ2N0cDzuszhucC28wDLYm8ioMM90kykhhpxqls9e1itu6yJBkCvaxj2FCsoxI5DT42pyGec66kTqDK4sNhtLpvHFLhgbSyyIq06HB8tLSq1xkKB31r0MfQ2Km2bHMSwuxEcXR+3tMw4XT/GJgtrvJMAdnKEOQVg8lLYe0thB+j3ia7AJD0luM+xgSWrioLcyitgB4OzTnEjZz7+FZqGGGRwwr3wEmDHmrQ/h5/jhnEdC3CmeIiwKRJeYlQ+I0ol6GJN+OqvUh+Dp/7KPB+lDis1FNhgOrbv53XuN/18z3D63x7d9oU/luh76pqKwvxGp8ALYZH/VkqxX+6Jsx/FucmH5rrRof5fQ9cmJZ4yONNAshOgzfluc3GJI8bmhdMfB9lgHH4v8cnk9EatW/JMfya8fJJsuycp4m9iugDsP1/UJt81y17FHvj945yy7M00hsrbeWZw+nNEtEM/wFLzNXmoNWg1XVGk7alohmkvYeDCd4WsgTsX47huuXZFhl9PoyfA+Gr+9LX5vh6+c0d+alM9zf0MxLh2qL04bifAqrT7OWd3lZb50PWNOPmZoynumOH157hLO/P+ow+iwfpEWO2uUHxPsdu7S737Ei3Nhvmk2s97vq+MfiCIpdj2CatcVQffgFTTFTDT6L5vbab/7HBpkm+YVUbN+sAQ+ZbGYbgqigcAAmJIeQZvKi1SFH5fWghfhSo/sNWLkYbHkLpImjaMJGqFqfW+IaFNuewr1ZHw7V+Csdb3a7/a8IQR3kktvrfPr5TGrunZP64d7kxbGn6dlut/uEJt7y8bAAkZ/qp+Enwkhc1dGiKF9MtgBksnMRX9cJEP7a0CZMiBF3fzbQagwBXu0E9j0ybNX4A/M0Kz3ifwQqwjCrMSS9MXOPxStWL5/o2EDMzjMgBmI+IgUY+TlDPZ9UajM0Rd9UjU9athnCi1soW/M0A3NtBUNycT1fvBYMHQ02TiMMxah+cQnsTVhMD1tkQARD/QzFKmoHQ7H0Kx0w6GF4cTN6a65tYL60wpB2MaoybC+OlAz53H5Qmx0+izlOutR60I+XGG50vlBxO0O3NV86MOddZSh96pyAYJjAojcthiGk3ZJhVcox4lNqlGEKgHOB4Urns3i3M2yHv4F1ixpDB0KlwnBNLLOhDAXDM1tlyPTailPEl4/YtOQXb7jfDh2gnXsYXrLDdpI2kLbVGBLHuKswlDItIs5TLUNl4WkMjOkmhCNG1cbE8hFjaCOmsh2+9PP08fFxPoA8orR9aUaPoOhYTmeHtCQ2kNTUGAaIT2DnDKXN1tR1Eu1Wfs5Q813DCLwjNumRen3TglgR41PLK13vZBjpLBxiPZ9ObTHkR1D86e50h9X1rwHXGBqITz8XDEkMOQBAeoMywTDSEEJAwzCi+mjiqNrYucrQQlTlO2R4yAh+mcA8Bt0M8Vcm8Ku70+014IF1/BrDNWjIkF8y+QIROAuGkM5qo4gbE65N+Us7nS1eiOWBTNfdATv0gbj07XbYEd/792LUGOaLn3WGlBmK2N4PT4PO2rKKlyF91beErDBbWhUM1wiehnwpccdhN8MLvrRrL0b/fpoaw5PJr9ViSPdB+VLF0wgQtaxeSuNmmS/xkHTAGGCYW/3NDLv20/Tviaox1LkMOhiGkMWNMlpwEE0rFxfJr5xFzpBk2R9xP0ODpKg/Ytglr/59bVWGZ7EW2MFQ7IxoMqRjUoaho/hQLNPtTJhqvQwt8EMZdu1r69+bWDJ0N0CIMGfol9Fc7KprMfRIopdb4t5kEaTCkBYSuJdhpvP8QuxEup5h5wMkeveXEobxer22vQ00dSS6Lxgq3xl/zYx9EJsXWgylPcA62x9tr6CO3TpDohU4ajLUz/SClrciZYnIS00lXnNYlKF5yj+uu+547d5f2rtHeIX5Tgu6LLnKlVswVBEpf4+Hgw4w1I1uhtIO6Ro8kDpB145iDB2YM2R7gVsRn19Qz9fFbRCZ+eLqfyziFx+3XUlNN5fefd6HLWIwV6fyrGz7H+vN6UiCO6v/z0I6f/+0ciP/gNgxsAjC4d8/uVs7faPfvMb/75slhMF//HoIHE/Cluw/qABlWPn4vZHa6NHHvr36Bofb/DL/Kw2TxCncsNs8kiH2yDGVUa0eVbSdt2m0rugaFVSOaPdrkMrr32/x+vfMvM59T733Ub78vWtvcP/h699D+vr3AQ/eBb0cDLF4/fvxX/+ZCm/wXIzXf7bJGzyf5vWfMfT6z4l6g2d9vf7z2t7gmXuLFuJ1D79c7uNLr36A6XKFeOXzSxcsxGufQfv6zxF+g2dBv/7zvN/gmeyv/1z9N3g3AosYy6qibny/xRu8o+QN3jPz+u8KeoP3Pb3BO7te/71rb/DuvDd4/+Hrv8PyDd5D+gbvkn2D9wEv4p3Od+rYy7+Xe/7vVh8h7bLVmYZFGgjVUXZWpPOkyAiOVMPOkuKYBElr87NFZoMjjro/N4/qjExQKOp84mI4qopyUIpyMo8EzqWZzNgEedCoP6bgWQhonjVOmKiDhv45FFMW68ck8yt87J4dNfwpdclNaK0SPtMYXepjlAn9AY1CFzesTIiYXX/SsMVc6tM0lWno+E60Dj6KyTMm/I3kMRrELGHygewAU5/HeAF+qeSxoTFIHjmwgfzwuMFjhPy4UeUXfNh2Bkt5fCjmSqOEjxjUIFSeYBYiT5VVb2qvanj8Qk+4EcT1HsAx5+c9J5GKmaoS+5iKo8HsnSjo87IoS+YcnSlsJODyU+Tn1jO24JiM3Q0rFPyefyeW4Kgo6XjKaqSKMhd+FEJXFTW0x3AILhGfMgf9rCJ2RJ9Ux7qPpGuVTc1rn4Thc71ikvypuhq2oEd0fjIHfQfWRfdU2bdu7aBh+XJxvjMf9azDtYUF0V4qnh1fp7FubHtyeeLPdeAhKBWNqpoqO6kVdz7ZgR8dW6lDyBVnqM686XG460LfGE0iTjl0fD+1LYs/gMWyU993QipopTyQ6PZ6HlPO14BYVVKKJqdaRf0nNbndcp8PYl5+WBNTC0zAoX+twc4T1NR8J1EJKhKkHxPHo0b67A6OB9cIYoI1/Sfodz7/8A//8A8LxP+pZgBtj2jN1wAAAABJRU5ErkJggg==";
        cardBody.appendChild(image);
    }
    image.className = 'card-img-top';


    let h5 = document.createElement('h5');
    h5.className = 'card-title';

    let price = document.createElement('p');
    price.className = 'card-text';

    let button = document.createElement('a');
    button.className = 'btn btn-primary';

    h5.innerText = ItemCard.name;
    price.innerText = ItemCard.price;
    button.innerText = 'Agregar al carrito';

    // discount
    cardBody.appendChild(h5);
    cardBody.appendChild(price);
    cardBody.appendChild(button);

    card.appendChild(cardBody);
    cardContainer.appendChild(card);
}

let initListofItems = (items) => {

    if (cardContainer) {
        document.getElementById('card-container').replaceWith(cardContainer);
        return;
    }
    cardContainer = document.getElementById('card-container');
    items.forEach((item) => {
        generateCard(item);
    });
};
initListofItems(items)

let selector = document.getElementById("categories")
categories.forEach((category) => {
var c = document.createElement("option")
c.text = category.name
c.value = category.name
selector.appendChild(c)
});

// function searchFunction (searchTerm) {
//     console.log(searchTerm)
// }

function setAction(form) {
    form.action = "register.html";
    alert(form.action);
    return false;
  }

function filterbyCategory(){

}