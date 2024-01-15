const expresss= require('express');
const router= express.Router();

router.get('/',(req,res,next)=>{
    res.ststus(200).json({
        message:"Handling Get requests to /products"
    });
});

router.post('/',(req,res,next)=>{
    res.ststus(200).json({
        message:"Handling Post requests to /products"
    });
});

router.get('/:productId',(req,res,next)=>{
    const id= req.params.productsId;
})
module.exports=router;