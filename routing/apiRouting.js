var matchFreind = require("../app/data/friends.js");

app.get("api/freinds", function(req, res){
    res.json(matchFreind);
});

app.post("api/freinds"), function(req, res){

}