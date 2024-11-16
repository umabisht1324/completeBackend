const asyncHandler=(reqHandler)=>{
    (req,res,next)=>{
        Promise.resolve(reqHandler(req,res,next)).
        catch((err)=> next(err))
    }
}

export {asyncHandler}

// const functionHandler=()=>{}
// const functionHandler=()=>async()=>{}

// const asyncHandler=(fun)=>async(req,res,next)=>{
//     try{
            // await fun(req,res.next) 
//     }
//     catch(error)
//     {
//         res.status(err.code||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }