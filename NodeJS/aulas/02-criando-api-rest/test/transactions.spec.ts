import {
  expect,
  test,
  beforeAll,
  afterAll,
  describe,
  it,
  beforeEach,
} from 'vitest'
import request from 'supertest'
import { app } from '../src/app'
import { execSync } from 'child_process'

describe('Transaction routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(() => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
  })

  test('comentario sobre o teste, o que é esperado que ele faca', () => {
    // fazer a chamada HTTP para criar uma nova transacao

    const responseStatusCode = 201 // resultado da chamada

    expect(responseStatusCode).toEqual(201)
  })

  test('Usuario pode criar uma nova trasacao', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'new Transection test',
        amount: 5000,
        type: 'credit',
      })
      .expect(201)
  })

  it('lista todas as transacoes', async () => {
    const createTrasactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'new Transection test',
        amount: 5000,
        type: 'credit',
      })

    const cookies = createTrasactionResponse.get('Set-Cookie')

    const listTransactionResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies || [''])
      .expect(200)

    expect(listTransactionResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: 'new Transection test',
        amount: 5000,
      }),
    ])
  })

  it('buscar uma transacao po ID', async () => {
    const createTrasactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'new Transection test',
        amount: 5000,
        type: 'credit',
      })

    const cookies = createTrasactionResponse.get('Set-Cookie')

    const listTransactionResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies || [''])
      .expect(200)

    const transactionId = listTransactionResponse.body.transactions[0].id
    console.log(transactionId)

    const getTransactionResponse = await request(app.server)
      .get(`/transactions/${transactionId}`)
      .set('Cookie', cookies || [''])
      .expect(200)

    expect(getTransactionResponse.body.transaction).toEqual(
      expect.objectContaining({
        title: 'new Transection test',
        amount: 5000,
      }),
    )
  })

  it('lista a soma', async () => {
    const createTrasactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'new Transection test',
        amount: 5000,
        type: 'credit',
      })

    const cookies = createTrasactionResponse.get('Set-Cookie')

    await request(app.server)
      .post('/transactions')
      .set('Cookie', cookies || [''])
      .send({
        title: 'Debit',
        amount: 2000,
        type: 'debit',
      })

    const summaryResponse = await request(app.server)
      .get('/transactions/summary')
      .set('Cookie', cookies || [''])

    console.log(summaryResponse.body.summary)

    expect(summaryResponse.body.summary).toEqual([
      {
        amount: 3000,
      },
    ])
  })
})
