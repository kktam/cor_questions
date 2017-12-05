# COR Question 5

## Question

> I am designing a REST API that returns a set of customer records based on some search
> criteria provided as input. What would one possible design look like (url route, input,
> output, http method, return codes etc)

## Answer
 
### Basic characteristics of API 
 
All inputs are string.
All output as JSON serialized string in Http body.
all API return Http code 200 for success
all API return Http code 404 for not authorized 
 
### Baseline sets

POST /customer create a new customer
PUT  /customer add a new customer
GET  /customer/{customerid} - return a full customer record detail by customer id
PUT  /customer/{customerid} - update selected customer by id with form data
DELETE /customer/{customerid} - delete a customer. depending on needs of application, either this will physically delete the
  customer record from database, or marked it as inactive, or move to historical database.

  
To support more advanced query, the following API can be introduced based on actual parameters supported in the customer records.
Assuming customer record contains the following parmeters

- first name
- middle name
- last name
- address (street, city, province, postal code, country)
- a list of phone numbers (phone number is a different entity with type field - cell, fax, main etc)
- date created (or joined service)

all of the queries below may require elevated privileges (supervisor roles).

GET  /customers?start=start_id&next=numberofcustomers - returns a list of customers in a summary in range (start_id, start_id + numberofcustomers)
   - if the start_id is invalid or out of range, the API return 0 records.

GET /customers/findByLastname/{lastname}/{records} - return a list of customers in a summary
   where {lastname} is the partial or full phrase of last name to match in the database.
       and {records} is the maximum number of records to return.  this number shall not exceed system limit, set internally 
	       as maxrecords
		   
GET /customers/findByPhone/{phone}/{records} - return a list of customers in a summary with the phone number
   where {phone} is the partial or full phone number belong to customer(s) to match in the database.
       and {records} is the maximum number of records to return.  this number shall not exceed system limit, set internally 
	       as maxrecords
	accepts null as possible input, "null" is place in {phone}, and API will return 0 records

GET /customers/findByCreateDate/{date}/{records} - return a list of customers in a summary whom joined the service in a given date
   where {date} is the date in which customer(s) joined the service, and to match in the database.
       and {records} is the maximum number of records to return.  this number shall not exceed system limit, set internally 
	       as maxrecords		   
	accepts null as possible input, "null" is place in {phone}, and API will return 0 records
	
GET /customers/count - return the total number of active customers in the database	

		   