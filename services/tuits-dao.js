import tuitsModel from './tuits-model.js';
const findAllTuits = () => tuitsModel.find();
const createTuit = (tuit) => tuitsModel.create(tuit);
const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})

module.exports = {
  findAllTuits: findAllTuits,
  createTuit: createTuit,
  updateTuit: updateTuit,
  deleteTuit: deleteTuit
}

//
// import tuitsModel from './tuits-model.js';
//
// const findAllTuits = async () => {
//     return await tuitsModel.find()
// }
// const findTuitById = async (id) => {
//     return await tuitsModel.findById(id)
// }
// const createTuit = async (tuit) => {
//     return await tuitsModel.create(tuit)
// }
// const deleteTuit = async (id) => {
//     return await tuitsModel.deleteOne({_id: id})
// }
// const updateTuit = async (id, updatedTuit) => {
//     return await tuitsModel.updateOne(
//         {_id: id},
//         {$set: updatedTuit})
//     // {$set: {
//     //   tuit: updatedTuit.tuit,
//     //     likes: updatedTuit.likes
//     // }})
// }
// module.exports = {
//     findAllTuits, createTuit, updateTuit, deleteTuit, findTuitById
// }