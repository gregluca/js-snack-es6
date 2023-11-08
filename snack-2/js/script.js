
const footballArray = [
    {
        nome: "milan",
        puntifatti: 0,
        fallisubiti: 0,
    },
    {
        nome: "inter",
        puntifatti: 0,
        fallisubiti: 0,
    },
    {
        nome: "juventus",
        puntifatti: 0,
        fallisubiti: 0,
    },
    {
        nome: "roma",
        puntifatti: 0,
        fallisubiti: 0,
    },
]

footballArray.forEach(element => {
    element.puntifatti =  Math.floor(Math.random() * 101);
    element.fallisubiti = Math.floor(Math.random() * 101);
});

const newArray = [];

footballArray.forEach(element => {
    const { nome, fallisubiti } = element;
    newArray.push({ nome, fallisubiti });
});

console.log(newArray);
