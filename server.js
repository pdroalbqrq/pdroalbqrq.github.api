const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and re-sync db.');
// });

app.get('/', (req, res) => {
  res.json({ message: 'Bem vindo a api do meu curriculo' });
});

require('./app/routes/turorial.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/info.routes')(app);
require('./app/routes/skill.routes')(app);
require('./app/routes/exp.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
