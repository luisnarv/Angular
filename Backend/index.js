require ("dotenv").config();


const server = require ("./src/server.js");
const db = require ("./src/db.js");


const {PORT, DB_FORCE } = process.env
try {
    db.sync({force: DB_FORCE ? true: false}).then(()=>{
        console.log(`database connection successful`); 
        server.listen(PORT, () => {
      console.log('👋 😀 Server listening on port  ', PORT);
    });
    })
  } catch (error) {
    console.log(' 😶 Error:', error.message);
  }