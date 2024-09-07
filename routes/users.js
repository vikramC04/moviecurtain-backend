const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')
const User = require('../models/userModel')



//Getting all user movies
router.get('/:email', async (req, res) => {
    console.log("Getting");
    try {
        const paramEmail = req.params.email
        const user = await Movie.find({email: paramEmail})
        if(!user) {
            return res.status(404).json({ message: "No movies are Saved" })
        }
        res.json(user)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

//Creating Movie

router.post('/:email', async (req, res) => {
    
    console.log("Posting");
    
    let user;
    try {
        const paramEmail = req.params.email
        const movieid = req.body.movid
        console.log(paramEmail);
        console.log(movieid);

        user = await Movie.findOne( {
            email: paramEmail,
            movid: movieid
         } )
        if(user != null) {
            console.log("Watchlist already")
            return res.status(409).json({message: "In Watchlist already"})
        }

        const mov = new Movie({
            email: req.params.email,
            movid: req.body.movid,
            title: req.body.title,
            poster: req.body.poster
        })

        const newMovie = await mov.save();
        
        res.status(201).json(newMovie);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
    
  })



module.exports = router