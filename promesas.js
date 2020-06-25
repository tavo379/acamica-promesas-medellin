

let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("La promesa fue exitosa")
    }, 2000)
})

promesa.then(function(respuesta){
    console.log("Respuesta: " + respuesta)
})


promesa.then(respuesta => console.log("Respuesta: " + respuesta))


let promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("La promesa fue rechazada")
    }, 1000)
})

promesa2.catch(error => console.log("Respuesta: " + error))





let promesa3 = new Promise(function(resolve, reject) {
    let random = Math.random() * 100;
    let number = Math.round(random);

    if(number%2 == 0){
        resolve(`El número ${number} es par `)
    }else {
        reject(`El número ${number} es impar `)
    }
})

promesa3
    .then(respuesta => console.log("Respuesta: " + respuesta))
    .catch(function(error){
        console.log("Respuesta: " + error)
    });



let random = Math.random() * 1000;
let random2 = Math.random() * 1000;

let promesa4 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(`la promesa 4 y duró ${random}`)
    }, random)
})

let promesa5 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(`la promesa 5 y duró ${random2}`)
    }, random2)
})

Promise.race([promesa4, promesa5])
    .then(function(respuesta){
        console.log(`La promesa ganadora fue ${respuesta} milisegundos`)
    })
    .then(function(respuesta2){
        console.log(respuesta2)
        return promesa5,
    })
    .catch(function(error){
        console.log(error)
    })