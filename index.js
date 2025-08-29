const matrizGastos = [

[ "Alimentacao", 0],
[ "Transporte" ,0],
["Lazer" , 0],
["Outros" ,0],
["Total" ,0],
]

const obterElemento = (id) =>  document.getElementById(id);
const obterValorinformado =() =>parseFloat(obterElemento("valor").value);
const obterCategoriaInformada =() =>obterElemento("categoria").value; 
const obterCategoria =(matriz, nomeCategoria) => matriz.find((item) => item [0] ===nomeCategoria);
const valorNegativo = (valor) => valor < 0;
const somaValor = (total,valor) => total + valor ;
const formataMoeda = (valor) => `R$ ${valor.toFixed(2).replace('.', ',')}`;
const atualizaValorCategoria =(categoria , valor) => categoria[1] = somaValor(categoria[1],valor);

const atualizarInterface =() => {
    matrizGastos.forEach(([nome  , valor]) =>{
                const elemento = obterElemento(nome);       
   
        if (elemento) {
           
            const textoOriginal = elemento.textContent.split(':')[0];
            elemento.textContent = `${textoOriginal}: R$ ${formataMoeda(valor)}`;
        }
    })
}
const limparCampo = () => obterElemento("valor").value = '';

function adicionarGastos(){
const valorInformado = obterValorinformado();
const categoriaInformada = obterCategoriaInformada();
    
if (isNaN(valorInformado)) {
        alert("Valor inválido. Digite um valor numérico.");
        return;
    }
    
    if(valorNegativo(valorInformado)){
        alert("valor invalido. O valor não pode ser negativo ");
        return;
    }
    const categoria = obterCategoria(matrizGastos, categoriaInformada);
const total = obterCategoria(matrizGastos, "Total");    
atualizaValorCategoria(categoria,valorInformado);
atualizaValorCategoria(total,valorInformado);
atualizarInterface();
limparCampo();
}