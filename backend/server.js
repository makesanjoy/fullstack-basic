// const express = require('express');
import express from 'express';
const app = express();

app.get('/',(req,res)=>{
    res.send("Server is ready");
});

//get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "The Mathematician's Dog",
          content: "Why did the mathematician's dog sit in the shade? Because he wanted to work out his tan-gents!",
        },
        {
          id: 2,
          title: "Light Bulb Moment",
          content: "How many programmers does it take to change a light bulb? None. It's a hardware issue.",
        },
        {
          id: 3,
          title: "Coffee Break",
          content: "Why did the coffee file a police report? It got mugged!",
        },
        {
          id: 4,
          title: "The Musical Snake",
          content: "What do you get when you cross a snake and a musical instrument? A rattlesnake!",
        },
        {
          id: 5,
          title: "Invisible Man",
          content: "I used to be a baker because I kneaded dough.",
        },
        {
          id: 6,
          title: "Time Traveler's Bar",
          content: "A time traveler walks into a bar. The bartender says, 'Sorry, we don't serve your type here.'",
        },
        {
          id: 7,
          title: "Telepathic Parrot",
          content: "Why did the telepathic parrot get hired? Because it was good at tweeting thoughts!",
        },
        {
          id: 8,
          title: "Pirate's Favorite Letter",
          content: "What's a pirate's favorite letter? You might think it's 'R,' but it's really the 'C' (sea)!",
        },
        {
          id: 9,
          title: "Cheese Factory Explosion",
          content: "Did you hear about the cheese factory that exploded? There was nothing left but de-brie.",
        },
        {
          id: 10,
          title: "Parallel Universe",
          content: "Why do programmers prefer dark mode? Because light attracts bugs in parallel universes!",
        },
      ];
      res.send(jokes);
      
});


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server listening on ${port}`)
})