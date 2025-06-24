const aiService = require('../service/ai.service'); 

module.exports=(req,res)=>{
    const prompt=req.query.prompt

    if(!prompt){
        return res.status(400).json({ error: 'Prompt is required' });
    }

    const response = aiService(prompt)
    res.send(response)
}