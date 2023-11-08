const bikeArray = [
    {
        nomes: "red",
        peso: 50,
    },
    {
        nomes: "blue",
        peso: 30,
    },
    {
        nomes: "green",
        peso: 10,
    },
    {
        nomes: "yellow",
        peso:85,
    },
];

let bikeMin = 999;
let bikeName = "";

console.log(bikeArray);
const result = start();



function start (){
    for (let i = 0; i < bikeArray.length; i++){
        const curBike = bikeArray[i]; 
        const {nomes,peso} = curBike;
        console.log(nomes,peso);
        if (peso < bikeMin){
            bikeMin = peso;
            bikeName = nomes;
        } 
    };
    
}

console.log("bici con peso minore", bikeName, bikeMin)