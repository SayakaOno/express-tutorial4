import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://sayaka:01292019@cluster0-shard-00-00-lhclu.mongodb.net:27017,cluster0-shard-00-01-lhclu.mongodb.net:27017,cluster0-shard-00-02-lhclu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
);

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
  res.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => console.log(`our server is running on port ${PORT}`));
