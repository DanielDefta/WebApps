# WebApps
Project for WebApps class

https://projectwebappsdaniel.herokuapp.com

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
    
