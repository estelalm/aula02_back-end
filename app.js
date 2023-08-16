/*********************************************************
 Objetivo: Realizar o cálculo da média escolar de um aluno
 Data: 09/08/2023
 Autor: Estela Alves de Moraes
 Versão: 1.0
**********************************************************/

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('')
console.log(' -- Cadastrar Boletim Escolar')
console.log('')

entradaDados.question('Digite o nome do aluno: ', function(nomeAluno){

    let nome = nomeAluno

    entradaDados.question('Digite o nome do curso: ', function(nomeCurso){

        let curso = nomeCurso

        entradaDados.question('Digite a disciplina: ', function(nomeDisciplina){

            let disciplina = nomeDisciplina

            console.log('Digite as notas')

            entradaDados.question('Nota 1: ', function(notaUm){

                let nota1 = notaUm.replace(',', '.')

                entradaDados.question('Nota 2: ', function(notaDois){

                    let nota2 = notaDois.replace(',', '.')

                    entradaDados.question('Nota 3: ', function(notaTres){

                        let nota3 = notaTres.replace(',', '.')

                        entradaDados.question('Nota 4: ', function(notaQuatro){

                            let nota4 = notaQuatro.replace(',', '.')

                            //validação de entrada das notas em branco
                            if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                                console.log('')
                                console.log('>> ERRO: Todas as notas devem ser preenchidas.')
                                entradaDados.close()
                            }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                                console.log('>> ERRO: É obrigatório a entrada de dados somente com números.')
                                entradaDados.close()
                            } else if(nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0 || nota3 > 10 || nota3 < 0|| nota4 > 10 || nota4 < 0){
                                console.log('>> ERRO: É obrigatório inserir apenas notas entre 0 e 10.')
                                entradaDados.close()
                            } else {
                    
                            let media = (Number(nota1)+Number(nota2)+Number(nota3)+Number(nota4))/4

                            let situacao
                            if(media <5){
                                situacao = 'Reprovado'
                            } else if (media >= 5 && media < 7){
                                situacao = 'Exame'
                            } else if (media >= 7){
                                situacao = 'Aprovado'
                            }

                            console.log('')
                            console.log('+-----------------')
                            console.log(`| BOLETIM `)
                            console.log('+-----------------')
                            console.log(`| Aluno: ${nome}  `)
                            console.log(`| Curso: ${curso} `)
                            console.log('+-----------------')
                            console.log(`| Disciplina: ${disciplina}`)
                            console.log('+-----------------')
                            console.log(`| Nota 1: ${String(nota1).replace('.',',')} `)
                            console.log(`| Nota 2: ${String(nota2).replace('.',',')} `)
                            console.log(`| Nota 3: ${String(nota3).replace('.',',')} `)
                            console.log(`| Nota 4: ${String(nota4).replace('.',',')} `)
                            console.log(`| Media: ${String(media.toFixed(1)).replace('.',',')} `)
                            console.log(`| Situação: ${situacao}`)
                            console.log('+-----------------')
                            entradaDados.close()
                            }

                        })
                        })    
                    })
                })
            })
        })
    })