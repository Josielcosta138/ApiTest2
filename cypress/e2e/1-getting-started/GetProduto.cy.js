describe(' --> API PRODUTOS.', () => {
    context('GET /produtos', () => {
        it('Verifica o retorno da lista de protudos.', () => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/produtos'
            })
                    .then((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                    expect(response.body.quantidade).to.eq(2)
                    expect(response.body.produtos.length).to.eq(2)
                    expect(response.body.produtos[0]).to.have.all.keys(
                        'nome','preco','descricao','quantidade','_id'
                    )
                    expect(response.body.produtos[0].nome).to.be.equal('Logitech MX Vertical')
                    
                    

                });
        });
    });
});


describe(' --> API CARRINHOS.', () => {
    context('GET /carrinhos', () => {
        it('Verifica o retorno da lista dos carrinhos.', () => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/carrinhos'
            })
                    .then((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                    expect(response.body.quantidade).to.eq(1)
                    expect(response.body.carrinhos.length).to.eq(1)
                    expect(response.body.carrinhos[0].produtos[0]).to.have.all.keys(
                        'idProduto','quantidade','precoUnitario'
                    )
                    

                });
        });
    });
});

