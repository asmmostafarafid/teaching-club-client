Live link : https://thirsty-shaw-0b3a94.netlify.app/

cilent : https://github.com/asmmostafarafid/teaching-club-client

server link: https://github.com/asmmostafarafid/teaching-club-server

Teaching Club 

This is demo website of a coaching center where the students can find the best teachers to assist them with reasonable cost.

Important Features:

1. Home page (5 sections. two dynamic where data are loaded from databse (service, testimonial)).
2. By clicking any service from homepage the user will be directed to login page if not loggedIn where he has to log in (Google Sign In option is added by firebase authentication ). After login he will be directed to shipment page where user info and order info will be loaded dynamically and then he has to give credit card info (stripe is added as payment gateway) to place the order successfully. After placing the order , the info will be recorded in the database.
3. Different Dynamic Dashboard for admin and User. 
i) For Admin: 1)Orders (All Orders will be shown and there he can change the status of order) 
2)Review (The admin can give review that will be saved in database and shown in homepage dynamically along with the info of user) 
3)Add Service (Admin can add services in the database that will be shown in service section dynamically) 
4)Manage Services ( Admin can remove any service)
5)Make Admin (Admin can make any other email as admin)
ii) For Normal User:
1)Order (Order of the particular user will be shown ) 
2)Review.

 iii) Used Technologies : React Js, React-Bootstrap ,React-Router, React-Hook-form, Stripe, React-Modals, firebase, Node Js, Express Js, Mongodb, heroku, netlify etc.
