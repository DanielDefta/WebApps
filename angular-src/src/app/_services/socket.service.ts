import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  socket: SocketIOClient.Socket;

  constructor() {
    //this.socket = io.connect('http://localhost:4000')
    this.socket = io.connect('https://projectwebappsdaniel.herokuapp.com');
    if(sessionStorage.getItem("currentUser")){
      let id = JSON.parse(sessionStorage.getItem("currentUser"))._id;
      this.socket.emit('online',id);
    }
    
  }

  on(eventName: any, callback: any) {
      if (this.socket) {
        this.socket.on(eventName, function(data: any) {
          callback(data);
        });
      }
    };

  emit(eventName: any, data: any) {
      if (this.socket) {
        this.socket.emit(eventName, data);
      }
    };

  removeListener(eventName: any) {
      if (this.socket) {
        this.socket.removeListener(eventName);
      }
    };

}