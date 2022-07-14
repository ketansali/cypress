const expect = require('chai').expect
const request = require('supertest')

const server = require('../app')
const app = request.agent(server)

describe('Product Create',()=>{
    it('it return message and products',()=>{
        app.post('/products/addProduct')
        .send({
            title:"demo", price :8000, description :"desc", quantity : 5
        })
        .end((err,res)=>{
            expect(res.body.message).to.equal("Product Added")
            expect(res.body.status).to.equal(201)
        })
    })
})