const express = require('express');
const app = express();
const port = 5000 ; 
app.use(express.urlencoded({extended:true}))

const userRouter =require("./routes/user.route")
app.use(userRouter)






app.use((req,res,next)=>{
    res.status(404).json({
        message: "this is imvalid route"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})