// import posts from "./tuits.js";
// let tuits = posts;
import tuitsDao from "../services/tuits-dao;"

const tuitsController = (app) => { //use express instance app to declare http get requerst pattern api to call a function
    app.get('/api/tuits', findAllTuits);
    app.post('/api/tuits', createTuit);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime()+'';
    // newTuit.likes = 0;
    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const findAllTuits = async (req, res) => {
const tuits = await tuitsDao.findAllTuits();
    res.json(tuits);}

const updateTuit = async (req, res) => {
    // const tuitdIdToUpdate = req.params.tid;
    // const updatedTuit = req.body;
    //tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    // const tuits = await tuitsDao.findAllTuits();
    // res.sendStatus(200);
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);

    res.send(status);

}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    // tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(status);
}


export default tuitsController;

