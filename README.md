# WebApps
Project for WebApps class

Url:
https://projectwebappsdaniel.herokuapp.com

User accounts:

  Username             Password               Role
  ----------------------------------------------------------------
  azerty                a                     ADMIN
  
  bestelling            a                     EMPLOYEE, BESTELLING
  
  verpakking            a                     EMPLOYEE, VERPAKKING
  
  levering              a                     EMPLOYEE, LEVERING
  
  ivobart               a                     EMPLOYEE, DRIVER
  
  nicoletdaphne         a                     EMPLOYEE, DRIVER
  
  ankelinda             a                     EMPLOYEE, DRIBER
  
  customer1             a                     CUSTOMER
  
  customer2             a                     CUSTOMER
  
  
Download and run info:
  1. The ports and urls are now configured to 8080 and the heroku app due to the last deploy.
  2. In order to run the application localy the following must me changed:
    - server.js line 35/36
    - authentication.service.ts    line 20/21
    - bedrijf.service.ts           line 11/12
    - conversation.service.ts      line 11/12
    - order.service.ts             line 20/21
    - product.service.ts           line 11/12
    - socket.service.ts            line 9/10
    - user.service.ts              line 11/12

Things you can do on the webapplication:

  - Register
  - Log in as Admin or employee and log out
  - Reset your password
  - As an admin you can see all the other admins and employees and their basic data + who is online
  - Place orders
  - Register and login as a customer

  - Socket.io:
    - Online / offline system -> works also when your browser crashes / internet connection is down
    - Chat system
  - Push notifications
  - Shop system:
    - Customers can place orders (as a registered customer or as a new one)
    - Orders department: Employees can see the new orders process them and send them forward to the packaging department
    - Packaging department: Employees see the processed orders, the products of an order and pack them. Then sneding the order to the delivery department
    - Delivery department: Employees see al the orders that are ready for shippment. They can associate a driver for each order. Drag and drop
    - Drivers: see the orders that are associated with them. Can set the status of an order to "Order picked up" and "Order is on the way". During the delivery the location of the order is being live transmitted to the managers/orders department/customer.
    - Customers see the location of the driver for each order that is being delivered at the same time (even by different drivers)
    
