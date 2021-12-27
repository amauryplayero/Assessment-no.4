let users = []


module.exports = {

    compliments: (req, res) => {
        
            const compliments = ["Gee, you're a smart cookie!",
                               "Cool shirt!",
                               "Your Javascript skills are stellar.",
            ];
            // choose random compliment
            let randomIndex = Math.floor(Math.random() * compliments.length);
            let randomCompliment = compliments[randomIndex];
          
            res.status(200).send(randomCompliment);
            
    },

    fortune: (req, res) => { 
        const fortune = [
        'A beautiful, smart, and loving person will be coming into your life.',
        'A dubious friend may be an enemy in camouflage.',
        'A faithful friend is a strong defense.',
        'A feather in the hand is better than a bird in the air.',
        'A fresh start will put you on your way.'
            ];
                // choose random compliment
                let randomIndex = Math.floor(Math.random() * fortune.length);
                let randomFortune = fortune[randomIndex];
            
                res.status(200).send(randomFortune);

    },

    nameAge: (req, res) => {
     

        let user = {
            name:req.body.name,
            age: req.body.age,
            id:1
        }
        users.push(user)
        let {name, age} = user
       nameAge = [name, age]
        res.status(200).send(users)
    },

    editAge: (req, res) => {
        console.log(req.body)
        users[0].age = req.body.age
       
        res.status(200).send(users)

         

    },

    deleteUser: (req, res) => {

    //    for(let i=0;i<users.length; i++){
    //        if (req.body)
    //    }
   
        users.splice(0)
    
    
    
    res.status(200).send(users)
    }
    


}
