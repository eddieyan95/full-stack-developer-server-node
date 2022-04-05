import express from 'express';
import cors from 'cors';
import helloController
    from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controllers.js";
const app = express();
app.use(cors());
app.use(express.json());
app.get('/hello', (req, res) => {res.send('Hello World!')})
helloController(app);
userController(app); //pass it to app
tuitsController(app);
app.listen(process.env.PORT || 4000);
