let express=require("express")
let OurApp=express()
OurApp.use(express.urlencoded({extended:false}))
OurApp.get('/',function(req,res){
    res.send(`
    <form action="/answer" method ="POST">
    <p>Which  is the most supreme country in the  whole world?</p>
    <input name="Supremecountry" autocomplete ="off">
    <button>Submit</button>
    </form>
    
    `)
}
)
    OurApp.post('/answer',function(req,res){
        if(req.body.Supremecountry.toUpperCase()=="USA"){
            res.send(`
            <p><b>Congrats.That is correct</p>
            <a href='/'>Back to Homepage</a>
            `)
        }
        else
        {
            res.send(`
            <p><b>Oops.That is incorrect try again</p>
            <a href='/'>Back to Homepage</a>
            `)

        }
    }
)
OurApp.listen(3000)