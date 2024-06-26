const handler =(event: any, context:any)=>{
    return {
        body:{
            message:"Simple Test Lambda Function Handler!",
            data:{
                name:"Sanjay",
                city:"Noida"
            }
        },
        statusCode:200
    }
}
export default handler;