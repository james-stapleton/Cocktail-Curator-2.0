const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const cors = require("cors");


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

//set handlebars for default 
//app.engine
//app.set
//set static path
//require use of specif routes

const hbs = exphbs.create({ helpers });
app.engine('handlebars', exphbs({defaultLayout: "main", layoutsDir: path.join(__dirname, "views/layouts")}));
app.set("view engine", "handlebars")
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.render('main', {layout : 'userDrinks'});
  });




const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});