export const handler =(event: any, context:any)=>{
    return {
        body:{
            message:"Simple Test Lambda Function Handler!"
        },
        statusCode:200
    }
}