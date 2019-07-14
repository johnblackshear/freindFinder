var matchFreind = require("../data/friends.js");

module.exports =function(app){
    app.get("/api/freinds", function(req, res){
        res.json(matchFreind);
    });
    
    app.post("/api/freinds", function(req, res){
        
        
    });
};
