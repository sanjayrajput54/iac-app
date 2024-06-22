export const handler =(event: any, context:any)=>{
    return {
        body:{
            message:"Simple Lambda handler"
        },
        statusCode:200
    }
}