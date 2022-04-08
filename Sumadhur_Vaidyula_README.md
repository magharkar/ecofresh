# Assignment 3 - CSCI 5709

## Author

- [Sumadhur Vaidyula](mailto:sumadhurvaidyula@dal.ca)

# GitLab Group Repository - Assignment 3

Group Repository: [https://git.cs.dal.ca/agharkar/group_10_csci_5709.git](https://git.cs.dal.ca/agharkar/group_10_csci_5709.git)


# Deployed Application Link - Assignment 3

Web App: [https://group10-ecofresh.herokuapp.com/](https://group10-ecofresh.herokuapp.com/)


## Features developed along with its related tasks - Assignment 3
Supplier Login Credentials: [email:supplier@gmail.com] [password:Supplier@123]
Supplier Management:
-> Supplier Dashboard: Supplier is able to get the direct navigation links to the View Orders and View Pantry 
-> Supplier Orders: Supplier will be able to view all the orders with the status : "Placed", and will have the option to view them individually and will be given an option to fulfill the order.
-> Supplier Order Details: The Individual order details are fetched from multiple collections in the MongoDB database, fetching Ingredients from Recipe Collection, referencing from the Recipe Name identified in the current order.
-> Supplier Order Fulfilment: Once all the ingredients are pickedd by the supplier, the supplier will have the option to fulfil the Order, once it os fulfilled, the status of the order is updated to "Completed" and it is reoomved from the list of current orders.
-> Supplier View Pantry: Supplier will be able to view the pantry, which can be used to check on the availability status of the items. 

[ Nice to have features to be implemented further ]: To get substitutions in the case of unavailability of items.

## Files Created - Assignment 3
Client Side:
-> SupplierDashboard.js [ecofresh/client/src/pages/Supplier/SupplierDashboard.js]
-> SupplierOrders.js  [ecofresh/client/src/pages/Supplier/SupplierOrders.js]
-> OrderDetail.js [ecofresh/client/src/pages/Supplier/OrderDetail.js]
-> OrderFulfilment.js [ecofresh/client/src/pages/Supplier/OrderFulfilment.js.js]
-> SupplierPantry.js [ecofresh/client/src/pages/Supplier/SupplierPantry.js]
-> NavSupplier.js [ecofresh/client/src/components/Navbar/NavSupplier.js]

Server Side:
->  orderRoutes.js [ecofresh/server/routes/orderRoutes.js]


## References

- [React](https://reactjs.org/) - Front-end framework
- [Heroku](https://dashboard.heroku.com/) - The cloud platform used for application deployment
- [GitLab](https://git.cs.dal.ca/) - The version control tool
- [Visual Studio Code](https://code.visualstudio.com/download) - The source code editor used
- [Postman](https://www.postman.com/) - Postman is an API platform for building and using APIs
- [MongoDB Documentation](https://www.mongodb.com/docs/upcoming/reference/operator/aggregation/lookup/) - To perform an equality match between a field from the input documents with a field from the documents of the "joined" collection.
- [Mongoose Documentation](https://mongoosejs.com/docs/) - Mongoose is used to interact with MongDB Database using Node.js.
- [Material UI](https://mui.com/getting-started/installation/) - Material UI is used to build Frontend Components.
- [Axios Documentation](https://axios-http.com/docs/intro) - Axios is used to interact with the server side APIs from the frontend components.


## Integration Instructions - Assignment 3
Steps taken to integrate the individual tasks:
-> A CI/CD Pipeline was structured in the Gitlab repository for Deployment.
-> A coherent structure was identified, based on the application flow and its features distribution among the members of the group.
-> According to the chronology of featured developed, the code from individual branches was merged to the main repository.
-> After every step of merging, the following feature with individual branch, pulled the code from the main branch and merged it to resolve the corresponding conflicts locally.
-> After resolution of conflicts, the merged code of main branch with individual branch, was pushed back to the individual feature branch.
-> Then, the individual feature branch was merged with main branch, and after successful pass of the CI/CD pipeline from main branch, the code is deployed.
-> This procedure iteratively repeated for all the individual feature branches, untill all the features were merged with the main branch.
