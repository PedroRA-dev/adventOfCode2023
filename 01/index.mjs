// abrir el archivo input.txt
import fs from 'fs'

const data = fs.readFileSync('input.txt', 'utf-8')


//separar las lineas en 'data'
const linesArray = data.split('\n') // array de strings

//recorrer cada linea del array

const processedArray = linesArray.map((line) => {

    let first, last
    //conseguir los digitos numericos de la linea
    let characters = line.split('')
    characters.forEach((char) => {
        if (!isNaN(char)) {
            if (!first) first = char
            last = char
        }
    })
    return Number(first + last)
})

const result = processedArray.reduce((prev,curr) => prev + curr)

// encontrar las palabras numericas en las lineas

const numberWords = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine':9
}


