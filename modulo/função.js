const BR = require("./estados_cidades.js");
const listaDeEstados = BR.listaDeEstados.estados

//lista de siglas
const getListaDeEstados = function(){
    
    let uf = []
    let lista
    let quantidade

    listaDeEstados.forEach(function(itemsigla){
        uf.push(itemsigla.sigla)
    })

    quantidade = uf.length
    lista = {uf, quantidade}

    console.log(lista)
    return lista
}

//estados e descrição
const getDadosEstado = function(siglaStados){
    let sigla = String(siglaStados).toUpperCase()
    let uf 

    for(let estados of listaDeEstados){
        if(sigla == estados.sigla){
            return uf = {
                uf : estados.sigla,
                descricao: estados.nome,
                capital: estados.capital,
                regiao: estados.regiao
            }
        }
    }
    return false
}

const getCapitalEstado = function(siglaStados){
    let sigla = String(siglaStados).toUpperCase()
    let resultado = false

    listaDeEstados.forEach(function(item){
        if(sigla == item.sigla){
            return resultado = {
                uf : item.sigla, descricao: item.nome, capital: item.capital, 
            }
        }
    })

    return resultado
}

const getEstadosRegiao = function(regiao){
    let 
}

//getListaDeEstados()
//console.log(getDadosEstado("rj"))
console.log(getCapitalEstado("ac"))


