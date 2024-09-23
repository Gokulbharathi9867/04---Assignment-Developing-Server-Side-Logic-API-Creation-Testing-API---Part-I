// controller
const getallusers = (req,res) => {  
    res.send("Display All Users :- Gokul/bharathi/Bairava/Ravana");
  };
const getuser = (req,res) => {  
    res.send("Display a Particular user :- Gokul");
  };
const createuser = (req,res) => {
    res.send("Create a User :- Gokulbharathi");
  }
const updateuser = (req,res) => {
    res.send("Update a Particular user :- Gokulbharathi/ Aspiring MERN Stack Developer/ From: namakkal");
  }
const deleteuser =  (req,res) => {
    res.send("Delete a Particular User :- Delete/ Gokulbharathi");
  }
module.exports = {getallusers,getuser,createuser,updateuser,deleteuser}; 