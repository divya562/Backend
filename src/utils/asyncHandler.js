//method 1
const asyncHandler = (requestHandler) =>{
   return (res, req, next) => {
        Promise.resolve(requestHandler(res,req, next))
        .catch((err) => next(err))
    }
}

// method 2
// const asyncHandler2 = (fn) => async (req, res, next) =>{
//     try {
//       await  fn(req, res, next)
//     } catch (error) {
//             res.status(error.code || 500).json ({
//                 success: false,
//                 message: error.message
//             })
//     }
// }

export {asyncHandler}