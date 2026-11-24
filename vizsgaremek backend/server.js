require("dotenv").config({ quiet: true });

const { app } = require("./app");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => 
{
    console.log(`Server started listening on port ${PORT}`);
});