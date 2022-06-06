A CORS policy failure is received during POST request in Login, thus responseData value is manually written.

To bypass Login failure, a finally block is created to force navigation to the next page - PatientsDashboard.

The response failure not only affects the navigation but the access to "user_id" in order to display the list 
of patients for the equivalent user. 

To bypass the issue above, "user_id" from Login has been declared as Context value to be consumed by PatientsDashboard, 
but inability to construct dynamic urls to axios stopped the progress here.