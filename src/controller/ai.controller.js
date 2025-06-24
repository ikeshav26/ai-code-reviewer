const aiService = require('../service/ai.service'); 

module.exports=async(req,res)=>{
    const code=req.body.code

    if(!code){
        return res.status(400).json({ error: 'Code is required' });
    }

    const response =await aiService(code)
    res.send(response)
}