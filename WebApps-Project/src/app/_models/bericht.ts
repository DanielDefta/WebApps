export class Bericht{
    van:string;
    naar:string;
    message:string;
    hour: string;

    constructor(van:string,naar:string, message:string){
        this.van = van;
        this.naar = naar;
        this.message = message;
    }
}