
describe("/user/signUp",()=>{
  const signInEndPoint = "http://localhost:7600/api/user/signIn"
  it("signIn valid user with 200 ", () => {
    
    let body = {
      email: 'ketu7600@gmail.com',
      password: "7600",
    };
    cy.request("POST", signInEndPoint, body).then(
      (res) => {
        expect(res.status).to.eq(200);
      }
    );
  });

  
})


