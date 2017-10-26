
import {Bericht} from '../_models/bericht';
import { User } from '../_models/user';

export class Conversatie{
    _id:string;
    user1:User;
    userId1:string;
    user2:User;
    userId2:string;

    berichten : Bericht[];

    constructor(user1:User,user2:User){
        this.user1 = user1;
        this.user2 = user2;
        this.userId1 = user1._id;
        this.userId2 = user2._id;
        this.berichten = [];
    }

    stuurBericht(bericht:Bericht){
        this.berichten.push(bericht);
    }
}