let faturamento_json = `
[
    {"dia": 1, "valor": 1000},
    {"dia": 2, "valor": 1500},
    {"dia": 3, "valor": 0},  // Fim de semana
    {"dia": 4, "valor": 1200},
    {"dia": 5, "valor": 0},  // Feriado
    {"dia": 6, "valor": 1100},
    {"dia": 7, "valor": 1700}
]
`;

let faturamento = JSON.parse(faturamento_json);


let valores = faturamento.filter(dia => dia.valor > 0).map(dia => dia.valor);


let menor_valor = Math.min(...valores);
let maior_valor = Math.max(...valores);


let media_mensal = valores.reduce((a, b) => a + b, 0) / valores.length;


let dias_acima_media = valores.filter(valor => valor > media_mensal).length;

console.log(`Menor valor de faturamento: ${menor_valor}`);
console.log(`Maior valor de faturamento: ${maior_valor}`);
console.log(`Dias com faturamento acima da média: ${dias_acima_media}`);
