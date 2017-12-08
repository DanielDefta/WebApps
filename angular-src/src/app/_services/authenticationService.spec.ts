import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
//import { Router} from '@angular/router';
//import { routes } from './../app.routing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend,
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SocketService } from '../_services/socket.service';
describe("AuthService: login and logout", () => {
    
    
        // getting the service and backend form the TestBed
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule,
                NgxPermissionsModule.forRoot(),
                
            ],
            //,RouterTestingModule.withRoutes(routes),],
            providers: [
              AuthenticationService,
              UserService,
              SocketService,
              { provide: XHRBackend, useClass: MockBackend },
            ]
          })
    });

     it("wrong login should not save user and token in sessionStorage", inject([AuthenticationService, XHRBackend], (authService, mockBackend) => {
        let response = {
            "email" : "testemail@gmail.com",
            "password" : "testpassword",
            "roles": "EMPLOYEE"
        };

        // returns the fake response when we subscribe to a connection with the backend
        mockBackend.connections.subscribe(connection => {
            connection.mockRespond(new Response( <ResponseOptions> {
                body: JSON.stringify(response)
            }));
        });

        // clearing the localStorage for testing purposes 
        sessionStorage.clear();
        authService.login("testemail@gmail.com","testpassword").subscribe(
            data => {
                expect(sessionStorage.length).toBe(0);
            }
        );
    })); 
    it("login should save user and token in sessionStorage", inject([AuthenticationService, XHRBackend], (authService, mockBackend) => {
        let response = {
            email : "testemail@gmail.com",
            password : "testpassword",
            token: "JWTfkjsdfdsqkndsj",
            roles: "EMPLOYEE"
        };

        // returns the fake response when we subscribe to a connection with the backend
        mockBackend.connections.subscribe(connection => {
            connection.mockRespond(new Response( <ResponseOptions> {
                body: JSON.stringify(response)
            }));
        });

        // clearing the localStorage for testing purposes 
        sessionStorage.clear();
        authService.login("testemail@gmail.com","testpassword").subscribe(
            data => {
                expect(sessionStorage.length).toBe(2);
                expect(JSON.parse(sessionStorage.getItem("currentUser"))).toEqual(response);
                sessionStorage.clear();
            }
        );
    })); 

     it("logout should clear the localStorage", inject([AuthenticationService, XHRBackend], (authService, mockBackend) => {
        let fakeUser = {
            email : "testemail@gmail.com",
            password : "testpassword",
            token: "JWTfkjsdfdsqkndsj",
            roles: "EMPLOYEE",
            online: "online"
        };

        // Clear the localStorage first and set a new item afterwards for testing purposes
        sessionStorage.clear();
        sessionStorage.setItem('currentUser', JSON.stringify(fakeUser));
        authService.logout();

        expect(sessionStorage.length).toBe(0);
    }));
})