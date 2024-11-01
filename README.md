# Flipkart Clone - Backend
This README provides a detailed description of the backend architecture and features for the Flipkart Clone project. The backend is built to mimic the functionality of an e-commerce platform similar to Flipkart, providing robust and scalable solutions for managing user authentication, product data, orders, payments, and more.

## Features of the Backend:
**1. User Authentication & Authorization**
Secure user registration and login using JWT (JSON Web Token) for session management.
Password hashing using bcrypt to enhance security.
Role-based access control for admin and regular users to manage permissions.
**2. Product Management**
CRUD Operations: Create, read, update, and delete product listings.
Support for categories, product variations (e.g., size, color), and multiple images per product.
Inventory management to keep track of stock levels and automatically update quantities upon order completion.
Search and filter features for efficient product browsing.
**3. Order Management**
Complete order lifecycle management: from order creation to tracking, shipment, and delivery.
Order status updates for customers, including notifications via email.
Ability to manage and process returns and refunds seamlessly.
Detailed order history and invoice generation.
**4. Shopping Cart & Wishlist**
Persistent shopping cart: Users can add, update, or remove items from their cart, even when logged out.
Wishlist feature for users to save products they intend to purchase later.
Real-time cart updates based on product availability and stock status.
**5. Admin Dashboard**
Access to a powerful admin interface for managing users, products, categories, orders, and more.
Analytics and reporting tools to monitor sales, revenue, and user engagement.
Support for promotional activities, such as managing discounts and featured products.

## Technology Stack:
**1. Programming Language & Frameworks**
Node.js with Express.js for building a fast and scalable API server.
React.js for improved developer experience and maintainability.

**2. Database**
MongoDB (NoSQL) for flexible and scalable data storage, using Mongoose for object data modeling.

**3. Authentication & Security**
JWT for stateless authentication.
bcrypt for secure password hashing.
CORS for enhanced security and cross-origin resource sharing.

**4. Other Technologies & Tools**
Cloudinary for storing product images.

## Link of Front-end Repo:
https://github.com/dhruv-bhatia246/E-commerce-frontend

## Link of Admin Panel Repo:
https://github.com/dhruv-bhatia246/E-commerce-admin-app
