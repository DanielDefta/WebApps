import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { User } from '../../_models/user';
import {Locatie} from '../../_models/locatie';
import { Conversatie} from '../../_models/conversatie';
import { Bericht } from '../../_models/bericht';
import { UserService } from '../../_services/user.service';
import { ConversationService} from '../../_services/conversation.service';

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

    constructor(private userService : UserService, private conversationService:ConversationService){
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();

    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users });
        this.onlineUsers = this.users.filter(user => user.online===true);
        this.subscribeToData();
    }

    private subscribeToData() {
        this.timerSubscription = Observable.timer(2000).first().subscribe(() => this.loadAllUsers());
    }

    //conersatie opladen in funtie van de 2 deelnemende users
    loadConversation(_id:string){
        if(this.messageSubscription) this.messageSubscription.unsubscribe();
        this.disableScrollDown = false;
        
        let model:any = {};
        model.userId1 = _id;
        model.userId2 = this.currentUser._id;
        this.conversationService.getByUsers(model).subscribe(
            data => {
                this.currentConversation = data;
                this.loadConversationById(data._id);
            },
            error =>{
                this.conversationService.create(new Conversatie(this.currentUser,this.users.find(user => user._id===_id))).subscribe();
                this.conversationService.getByUsers(model).subscribe(data => this.currentConversation=data);
            });
    }

    message:string= "";
    sendMessage(){
        this.currentConversation.berichten.push(new Bericht(this.currentUser._id,this.currentConversation.userId1==this.currentUser._id?this.currentConversation.userId2:this.currentConversation.userId1,this.message));
        this.message="";
        this.conversationService.update(this.currentConversation).subscribe();
        this.loadConversationById(this.currentConversation._id);

    }

    //conversatie updaten
    loadConversationById(_id:string){
        let model:any = {};
        model.userId1 = this.currentConversation.userId1;
        model.userId2 = this.currentConversation.userId2;
        this.conversationService.getByUsers(model).subscribe(
            data => {
                this.currentConversation=data;
                this.messageSubscription = Observable.timer(2000).first().subscribe(() => this.loadConversationById(data._id))
            }
        );
    }

        

    //code hieronder werkt goed in chrome maar niet altijd in safari
    ngAfterViewChecked(){
        this.scrollToBottom();
    }

    //wordt aangeroepen bij het scrollen
    private onScroll() {
        let element = this.myScrollContainer.nativeElement
        let atBottom = element.scrollHeight - element.scrollTop === element.clientHeight
        if (this.disableScrollDown && atBottom) {
            this.disableScrollDown = false
        } else {
            this.disableScrollDown = true
        }
    }


    private scrollToBottom(): void {
        if (this.disableScrollDown) {
            return
        }
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }
    }
}