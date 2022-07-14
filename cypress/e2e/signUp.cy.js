const Guid = require('guid')
describe("/user/signUp",()=>{
  const signUpEndPoint = "http://localhost:7600/api/user/signUp"
  it("signup with 200 ", () => {
    let dynamicEmail = Guid.raw() + "@gmail.com"
    let body = {
      firstName: "ketu",
      lastName: "sali",
      email: dynamicEmail,
      password: "7600",
    };
    cy.request("POST", signUpEndPoint, body).then(
      (res) => {
        expect(res.status).to.eq(201);
      }
    );
  });

  it("do not create dublicate user ", () => {
    let TestBadbody = {
      firstName: "ketu",
      lastName: "sali",
      email: "ketu7600@gmail.com",
      password: "7600",
    };
    cy.request({
      method:'POST',
      url:signUpEndPoint,
      failOnStatusCode :false,
      body : TestBadbody
    }).then(
      (res) => {
        expect(res.status).to.eq(400);
        expect(res.body.message).to.eq('User Already Exited');
      }
    );
  });

  it("does not allow bad body user ", () => {
    let TestBadbody = {
      firstName: "",
      lastName: "sali",
      email: "ketusali123@gmail.com",
      password: "7600",
    };
    cy.request({
      method:'POST',
      url:signUpEndPoint,
      failOnStatusCode :false,
      body : TestBadbody
    }).then(
      (res) => {
        expect(res.status).to.eq(400);
      //  expect(res.body).to.eq('error');
      }
    );
  });
  it("invalid email ", () => {
    let TestBadbody = {
      firstName: "ketu",
      lastName: "sali",
      email: "ketusali123@gmail",
      password: "7600",
    };
    cy.request({
      method:'POST',
      url:signUpEndPoint,
      failOnStatusCode :false,
      body : TestBadbody
    }).then(
      (res) => {
        expect(res.status).to.eq(400);
       expect(res.body.error[0]).to.eq("\"email\" must be a valid email");
      }
    );
  });

  it("return 400 when we hit /signUp with no body", () => {
    cy.request({
      method:'POST',
      url:signUpEndPoint,
      failOnStatusCode :false
    })
    .then(
      (res) => {
        expect(res.status).to.eq(400);
      }
    );
  });
})


