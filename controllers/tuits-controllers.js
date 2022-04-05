import posts from "./tuits.js";
let tuits = posts;

const tuitsController = (app) => { //use express instance app to declare http get requerst pattern api to call a function
    app.get('/api/tuits', findAllTuits);
    app.post('/api/tuits', createTuit);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = (req, res) =>
    res.json(tuits);
const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}


export default tuitsController;

