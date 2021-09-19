

var 
emly = require('../index')(process.env.KEY),
mocha = require("mocha"),
expect = require('chai').expect;

it("Create a new link", function(done){
    var link_id;
    emly.link.create({
        url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes",
    })
    .then(function(body){
        expect(body).to.have.property('data');
        expect(body.data).to.have.property('id');
        link_id = body.data.id;
        done();
    })
    .catch(function(error){
        return done(error);
    });
})

it("Should list links", function(done){
    emly.link.list()
    .then(function(body){
        expect(body).to.have.property('data');
        expect(body.data).to.be.instanceof(Array);
        done();
    })
    .catch(function(error){
        return done(error);
    });
})
