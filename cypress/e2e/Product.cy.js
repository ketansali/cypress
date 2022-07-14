const expect = require('chai').expect
const mongoose = require('mongoose')
const mongoUnit = require('../../src/app')
const controller  = require('../../src/controller/Product.controller')
const  MONGO_USER = process.env.MONGO_USER
const  MONGO_PASS = process.env.MONGO_PASS
const  DB = process.env.DB
const mongoUrl = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.jc8ks.mongodb.net/${DB}?retryWrites=true&w=majority`

describe('service', () => {
  const testData = require('../fixtures/testData.json')
  beforeEach(() => mongoUnit.initDb(mongoUrl, testData))
  afterEach(() => mongoUnit.drop())
 
  it('should find all products', () => {
    return controller.getAllProduct()
      .then(products => {
        expect(products.length).to.equal(6)
        // expect(tasks[0].name).to.equal('test')
      })
  })
 
  // it('should create new task', () => {
  //   return service.addTask({ name: 'next', completed: false })
  //     .then(task => {
  //       expect(task.name).to.equal('next')
  //       expect(task.completed).to.equal(false)
  //     })
  //     .then(() => service.getTasks())
  //     .then(tasks => {
  //       expect(tasks.length).to.equal(2)
  //       expect(tasks[1].name).to.equal('next')
  //     })
  // })
 
  // it('should remove task', () => {
  //   return service.getTasks()
  //     .then(tasks => tasks[0]._id)
  //     .then(taskId => service.deleteTask(taskId))
  //     .then(() => service.getTasks())
  //     .then(tasks => {
  //       expect(tasks.length).to.equal(0)
  //     })
  // })
 })









// const expect = require('chai').expect
// const mongoUnit = require('')
// // const testMongoUrl = process.env.MONGO_URL
// const testData = require('../fixtures/testData.json')
// const  MONGO_USER = process.env.MONGO_USER
// const  MONGO_PASS = process.env.MONGO_PASS
// const  DB = process.env.DB
// const testMongoUrl = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.jc8ks.mongodb.net/${DB}?retryWrites=true&w=majority`

// let service
// mongoUnit.start({ dbName: `${DB}` }).then(() => {
//   testMongoUrl = mongoUnit.getUrl()
//   run() // this line start mocha tests
// })

// after(async () => {
//   const client = service.getClient()
//   await client.disconnect()
//   await mongoUnit.stop()
// })

// describe('service', () => {
//   before(() => {
//     // create it after DB is started
//     service = require('./app/service')
//   })
//   beforeEach(() => mongoUnit.initDb(testData))
//   afterEach(() => mongoUnit.dropDb())

//   it('should find all products', () => {
//         return controller.getAllProduct()
//           .then(products => {
//             expect(products.length).to.equal(6)
//             // expect(tasks[0].name).to.equal('test')
//           })
//       })

//   // it('should create new task', () => {
//   //   return service
//   //     .addTask({ name: 'next', completed: false })
//   //     .then(task => {
//   //       expect(task.name).to.equal('next')
//   //       expect(task.completed).to.equal(false)
//   //     })
//   //     .then(() => service.getTasks())
//   //     .then(tasks => {
//   //       expect(tasks.length).to.equal(2)
//   //       expect(tasks[1].name).to.equal('next')
//   //     })
//   // })
//   // it('should remove task', () => {
//   //   return service
//   //     .getTasks()
//   //     .then(tasks => tasks[0]._id)
//   //     .then(taskId => service.deleteTask(taskId))
//   //     .then(() => service.getTasks())
//   //     .then(tasks => {
//   //       expect(tasks.length).to.equal(0)
//   //     })
//   // })
// })
