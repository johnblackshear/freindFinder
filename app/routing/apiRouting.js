var matchFreind = require("../data/friends.js");

module.exports =function(app){
    app.get("/api/freinds", function(req, res){
        res.json(matchFreind);
    });
    
    app.post("/api/freinds", function(req, res){
        var newFreind = req.body;
        var newFriendScore = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;

        for(i = 0; i < matchFreind.length; i++){
            var totalDifference = 0;
        

        for(j = 0; j < newFriendScore.length; j++){
            totalDifference += (Math.abs(parseInt(matchFreind[i].scores[j]) - parseInt(newFriendScore[j])));
        }

        scoresArray.push(totalDifference);

    }

    for(i = 0; i < scoresArray.length; i++){
        if(scoresArray[i] <= scoresArray[bestMatch]){
            bestMatch = i; 
        }
    }

    var bestFreind = matchFreind[bestMatch];
        res.json(bestFreind);

    matchFreind.push(newFreind);
        
    });
};
