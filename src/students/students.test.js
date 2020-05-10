//@ts-check
/// <reference types="jest" />

const student = require('./student')

describe('Teste para alunos', () => {
  it('Deve retornar 10 quando as notas forem 5, 3, e 2', () => {
    const grades = [5, 3, 2]
    expect(student.sum(grades)).toEqual(10)
  })

  it('Deve retornar zero quando uma das notas for zero', () => {
    const grades = [1, 2, 3, 0]
    expect(student.sum(grades)).toEqual(0)
  })

  it('Deve dobrar a nota quando o aluno tiver mais de cinco notas', () => {
    const grades = [1, 2, 3, 4, 5, 6, 7]
    expect(student.sum(grades)).toEqual(56)
  })

  it('Deve dobrar a nota quando for maior que nove', () => {
    const grades =  [10, 5, 3]
    expect(student.sum(grades)).toEqual(28)
  })
})
