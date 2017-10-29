import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { User } from '../../_models/user';
import {Locatie} from '../../_models/locatie';
import { Conversatie} from '../../_models/conversatie';
import { Bericht } from '../../_models/bericht';
import { UserService } from '../../_services/user.service';
import { ConversationService} from '../../_services/conversation.service';
import { SocketService } from '../../_services/socket.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {

    @ViewChild('scrollMe') private myScrollContainer: ElementRef;
    disableScrollDown = false;

    currentUser : User;
    users: User[] = [];
    onlineUsers : User[] = [];

    currentConversation: Conversatie;

    timerSubscription;
    messageSubscription;

    constructor(private userService : UserService, private conversationService:ConversationService, private socketService: SocketService){
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.socketService.on('message-received', (msg: any) => {
            if(this.currentConversation != undefined){
                if(msg.naar === this.currentConversation.userId2 || msg.naar === this.currentConversation.userId2)
                this.currentConversation.berichten.push(msg);
            }
          });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users });
        this.onlineUsers = this.users.filter(user => user.online===true);
        this.subscribeToData();
    }

    private subscribeToData() {
        this.timerSubscription = Observable.timer(2000).first().subscribe(() => this.loadAllUsers());
    }

    //conersatie opladen in funtie van de 2 deelnemende users (parameter _id is de id van de ontvanger, de id van de huidige user wordt genomen van de currentUser)
    loadConversation(_id:string){
        if(this.messageSubscription) this.messageSubscription.unsubscribe();
        this.disableScrollDown = false;
        
        let model:any = {};
        model.userId1 = _id;
        model.userId2 = this.currentUser._id;
        this.conversationService.getByUsers(model).subscribe(
            data => {
                this.currentConversation = data;
            },
            error =>{
                this.conversationService.create(new Conversatie(this.currentUser,this.users.find(user => user._id===_id))).subscribe();
                this.conversationService.getByUsers(model).subscribe(data => this.currentConversation=data);
            });
    }

    //hier kan nog een methode komen als de user op de textbox drukt => "aan het typen" sturen via socket.io aan de andere user

    //hier kan nog een methode komen als de user het bericht leest


    //deze methode vervolledigen met socket.io => DONE
    message:string= "";
    sendMessage(){
        this.currentConversation.berichten.push(new Bericht(this.currentUser._id,this.currentConversation.userId1==this.currentUser._id?this.currentConversation.userId2:this.currentConversation.userId1,this.message));
        this.message="";
        this.conversationService.update(this.currentConversation).subscribe();
        this.socketService.emit('send-message', this.currentConversation.berichten[this.currentConversation.berichten.length-1]);

    }

        

    //code hieronder werkt goed in chrome maar niet altijd in safari
    ngAfterViewChecked(){
        this.scrollToBottom();
    }

    //wordt aangeroepen bij het scrollen
    public onScroll() {
        let element = this.myScrollContainer.nativeElement
        let atBottom = element.scrollHeight - element.scrollTop === element.clientHeight
        if (this.disableScrollDown && atBottom) {
            this.disableScrollDown = false
        } else {
            this.disableScrollDown = true
        }
    }


    public scrollToBottom(): void {
        if (this.disableScrollDown) {
            return
        }
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }
    }
}