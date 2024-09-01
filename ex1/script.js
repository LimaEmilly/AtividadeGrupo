
let calcular_notas_growcoins = Number(prompt("Informe o valor a sacar:"));
let notas50, notas10, notas5, notas1;

if (calcular_notas_growcoins <0) {
    document.write("Valor solicitado deve ser maior que 0.");
} else if (isNaN(calcular_notas_growcoins)) {
    document.write("Valor solicitado deve ser informado.");
} else if (!Number.isInteger(calcular_notas_growcoins)) {
    document.write("Valor solicitado deve ser inteiro.");
} else {
    document.write(`Valor solicitado: ${calcular_notas_growcoins}.<br>`);

    let quantidade_notas = calcular_notas_growcoins;

    notas50 = Math.floor(quantidade_notas / 50);
    quantidade_notas %= 50;
    document.write(`Serão dadas ${notas50} notas de 50.<br>`);

    notas10 = Math.floor(quantidade_notas / 10);
    quantidade_notas %= 10;
    document.write(`Serão dadas ${notas10} notas de 10.<br>`);

    notas5 = Math.floor(quantidade_notas / 5);
    quantidade_notas %= 5;
    document.write(`Serão dadas ${notas5} notas de 5.<br>`);

    notas1 = quantidade_notas;
    document.write(`Serão dadas ${notas1} notas de 1.<br>`);

    

    if (quantidade_notas !== 0) {
        document.write(`Sobra ${quantidade_notas}.`);
    } else {
        document.write("Tenha um dia próspero e gaste com sabedoria! Até a próxima.");
    }
}