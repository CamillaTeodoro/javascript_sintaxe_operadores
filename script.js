const n1 = Number(prompt('Insira o primeiro valor:'));
const n2 = Number(prompt('Insira o segundo valor:'));
let resultado;



function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`)

}

function compara() {

    if (resultado >= 10 && resultado <= 20) {
        alert(`${resultado} é maior que 10 e menor que 20`)
    } else {
        alert(`${resultado} é menor que 10 ou maior que 20`)
    }

}

if (n1 === n2) {
    alert(`${n1} é igual a ${n2}`)
} else {
    alert(`${n1} é diferente de ${n2}`);
}

soma();
compara();