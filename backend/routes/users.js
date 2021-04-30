const router = require('express').Router();
const User = require('../models/user');

//  
router.route('/').get((req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err=>res.status(400).json('Error: '+err));
})

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const newUser = new User({username});
    console.log(newUser)
    
    newUser.save()
    .then(()=>res.json('User added'))
    .catch(err=>res.status(400).json('Error: '+err))
})

module.exports = router;