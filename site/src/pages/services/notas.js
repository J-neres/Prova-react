export function criarArray(tamanho) {
    let notas = [];
    for (let volta = 1; volta <= tamanho; volta++) {
        notas.push(0);
    }
    return notas;
}

export function calcMedia(notas) {
    let soma = 0;
    for (let volta = 0; volta < notas.length; volta++) {
        soma = soma + notas[volta];
    }
    let m = soma / notas.length;
    return m;
}

export function calcMaior(notas) {
    let m = 0;
    for (let volta = 0; volta < notas.length; volta++) {
        if (notas[volta] > m) {
            m = notas[volta];
        }
    }
    
    return m;
}

export function calcMenor(notas) {
    let m = 11;
    for (let volta = 0; volta < notas.length; volta++) {
        if (notas[volta] < m) {
            m = notas[volta];
        }
    }
    
    return m;
}