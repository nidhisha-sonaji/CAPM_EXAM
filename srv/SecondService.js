module.exports= cds.service.impl(async function(){
    const { POs } = this.entities;

    this.on('getStatusDefault',async(req,res)=>{
        return {
            "OVERALL_STATUS":"N"
            
        };
        
    })



}) 
