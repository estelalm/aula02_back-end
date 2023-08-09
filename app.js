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

                let nota1 = notaUm

                entradaDados.question('Nota 2: ', function(notaDois){

                    let nota2 = notaDois

                    entradaDados.question('Nota 3: ', function(notaTres){

                        let nota3 = notaTres

                        entradaDados.question('Nota 4: ', function(notaQuatro){

                            let nota4 = notaQuatro

                            //validação de entrada das notas em branco
                            if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                                console.log('')
                                console.log('>> ERRO: Todas as notas devem ser preenchidas.')
                            }else{




                            var media = (Number(nota1)+Number(nota2)+Number(nota3)+Number(nota4))/4

                            console.log('')
                            console.log('+-----------------')
                            console.log(`| BOLETIM `)
                            console.log('+-----------------')
                            console.log(`| Aluno: ${nome}  `)
                            console.log(`| Curso: ${curso} `)
                            console.log('+-----------------')
                            console.log(`| Disciplina: ${disciplina}`)
                            console.log('+-----------------')
                            console.log(`| Nota 1: ${nota1} `)
                            console.log(`| Nota 2: ${nota2} `)
                            console.log(`| Nota 3: ${nota3} `)
                            console.log(`| Nota 4: ${nota4} `)
                            console.log(`| Media: ${media} `)
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