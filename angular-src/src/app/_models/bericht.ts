export class Bericht{
    van:string;
    naar:string;
    message:string;
    date: Date;
    hours: number;
    minutes: number

    constructor(van:string,naar:string, message:string, date:Date){
        this.van = van;
        this.naar = naar;
        this.message = message;
        this.date = date;
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
    }
}