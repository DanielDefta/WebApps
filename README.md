# WebApps
Project for WebApps class

https://projectwebappsdaniel.herokuapp.com

Things you can do on the webapplication:

Basic:
  - Register
  - Log in as Admin or employee and log out
  - Reset your password
  - As an admin you can see all the other admins and employees and their basic data + who is online
  - Place orders
  - Register as a customer (still in development)

Extras:
  - Socket.io:
    - Online / offline system -> works also when your browser crashes / internet connection is down
    - Chat system
    - Push notifications
    - Shop system:
      - Customers can place orders (as a registered customer or as a new one)
      - Orders department: Employees can see the new orders process them and send them forward to the packaging department
      - Packaging department: Employees see the processed orders, the products of an order and pack them. Then sneding the order to the delivery department
      - Delivery department: Employees see al the orders that are ready for shippment. They can associate a driver for each order.
