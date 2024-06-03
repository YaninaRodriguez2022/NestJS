/*import { HttpException, HttpStatus } from "@nestjs/common";

export class ErrorManager extends Error {
  constructor(type,message:{type: keyof typeof HttpStatus, message: string}) {
    super(`${type}`::`${message}`) 
  }
public static createSignatureError(message:string){}
 const name= this.message.split(" :: ")[0]
 if(name){
    throw HttpException(this.message, HttpStatus)
 }else{
    throw HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR)
 }
}*/
