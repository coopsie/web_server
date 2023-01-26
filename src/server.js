const express = require("express");
const app = express();

app.use("/static",express.static("public"));
// use method says that if anyone types in my webaddress followed 
// by / static that it will run express.static with the parameter 
// pubilc. Express.static sets up a static webserver that will 
// send back the webpages in the public folder.

app.listen(5001, () => {console.log("Listening on Port 5001")})
// app.listen starts up the express and tells it whcih port to listen
// on. Also you can run a start up function which in this case just
// displays the message listening on port 5001.

