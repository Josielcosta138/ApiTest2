
describe('Função para agrupar os Testes', () => {
    context('Manter os testes mais fáceis de ler e organizados, de acordo com o contexto dos teste.', () => {
      it('1° CENÁRIO: Teste ', () => {
        expect('Teste').to.eq('Teste')
      });
    });
  });


  /** 
   * describe('test token spec', () => {
  it('Test Token', () => {

      cy.request({
          method: "POST",
          url: "https://desenvuseall.useall.com.br/apiuseall/api/Token",
          body: "grant_type=password&username=alvarobr%40useall.com.br&password=!@#Sandbox2020!@#",          
          failOnStatusCode: false,
      }).then((response) => {
           //cy.log(JSON.stringify(response))
          expect(response.status).to.eql(200)
          Cypress.env("token", response.body.access_token)
      }); 

  });
   * 
  */