import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { SocketService } from '../../_services/socket.service';

@Component({
    selector: 'app-employeetable',
    templateUrl: './employeetable.component.html'
})
export class EmployeetableComponent implements OnInit {
    size: string = "col-lg-8";

    firstnameAlphabetical = 1;
    lastnameAlphabetical = 1;
    usernameAlphabetical = 1;
    rolesAlphabetical = 1;
    currentUser: User;
    users: User[] = [];
    onlineUsers: User[] = [];

    constructor(private userService: UserService, private socketService: SocketService) {
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.socketService.on('receive-user-online', (user: User)=> {
            let u: User = this.users.find(us => us._id===user._id);
            let index = this.onlineUsers.indexOf(u);
            if(index === -1 ){
                this.onlineUsers.push(u);
            }
        });
        this.socketService.on('receive-user-offline', (data) => {
            let u: User = this.onlineUsers.find(us => us._id===data);
            if(u){
                this.onlineUsers.splice(this.onlineUsers.indexOf(u,1));
            }
        })
    }

    ngOnInit() {
        this.loadAllUsers();

    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users });
        this.onlineUsers = this.users.filter(user => user.online===true);
        this.onlineUsers.push(this.currentUser);
    }

    //users updaten => da verwijderen en alleen als een user registreert dan toevoegen => socket.io

    extend() {
        this.size = this.size === "col-lg-12" ? "col-lg-8" : "col-lg-12";
    }


    //methoden hieronder om te sorteren
    sortByfirstName() {
        this.users = this.users.sort((user1, user2) => {
            if (user1.firstName > user2.firstName) {
                return this.firstnameAlphabetical;
            }
            if (user1.firstName < user2.firstName) {
                return -this.firstnameAlphabetical;
            }

            return 0;
        });
        this.firstnameAlphabetical = -this.firstnameAlphabetical;
    }
    sortByLastName() {
        this.users = this.users.sort((user1, user2) => {
            if (user1.lastName > user2.lastName) {
                return this.lastnameAlphabetical;
            }
            if (user1.lastName < user2.lastName) {
                return -this.lastnameAlphabetical;
            }

            return 0;
        });
        this.lastnameAlphabetical = -this.lastnameAlphabetical;
    }
    sortByUsername() {
        this.users = this.users.sort((user1, user2) => {
            if (user1.username > user2.username) {
                return this.usernameAlphabetical;
            }
            if (user1.username < user2.username) {
                return -this.usernameAlphabetical;
            }

            return 0;
        });
        this.usernameAlphabetical = -this.usernameAlphabetical;
    }
    sortByFunctie() {
        this.users = this.users.sort((user1, user2) => {
            if (user1.roles > user2.roles) {
                return this.rolesAlphabetical;
            }
            if (user1.roles < user2.roles) {
                return -this.rolesAlphabetical;
            }

            return 0;
        });
        this.rolesAlphabetical = -this.rolesAlphabetical;
    }

}
