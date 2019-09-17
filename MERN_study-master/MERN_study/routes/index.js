module.exports = function(app, Customer) {
   
    // 생성
    app.post('/api/customers', function(request, response) {
        let customer00 = new Customer();
        customer00.id = request.body.id;
        customer00.image = request.body.image;
        customer00.name = request.body.name;
        customer00.birthday = request.body.birthday;
        customer00.gender = request.body.gender;
        customer00.job = request.body.job;

        customer00.save(function(err) {
            if(err) {
                console.error(err);
                response.json({result: 0});
                return;
            }
            response.redirect('http://localhost:3000');
        })
    })

    // 전체 찾기
    app.get('/api/customers', function(request, response) {
        Customer.find(function(err, customers) {
            if(err) return response.status(500).send({error: 'database failure'});
            response.json(customers);
        })
    })

    // 하나 찾기
    app.get('/api/customers/:customer_id', function(request, response) {
        
        Customer.findOne({id:request.params.customer_id}, function(err, customer) {
            if(err) return response.status(500).json({error: err});
            if(!customer) return response.status(404).json({error: 'customer not found'});
            response.json(customer);
        })
    })

    // 업데이트
    app.post('/api/customers_update/:customer_id', function(request, response) {
        Customer.update({id:request.params.customer_id}, {$set: request.body}, function(err, output) {
            if(err) return response.status(500).json({error: 'database failure'});
            console.log(output);
            
            if(!output.n) return response.status(404).json({error: 'customer not found'});
            response.redirect('http://localhost:3000');
        })
    })

    app.get('/api/customers_delete/:customer_id', function(request,response) {
        Customer.remove({id : request.params.customer_id}, function(err, output) {
            if(err) return response.status(500).json({ error : 'database failure'});

            response.json({message:"success"});
        })
    })

}