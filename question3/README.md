# COR Question 3

## Question

> I am implementing a REST API in Node.js which needs to be secure and scalable.
> What infrastructure components would I need to achieve that? 

## Answer

1. Use Express as Server side framework.
2. Enable CORS (Cross-Origin Resource Sharing). Use CORS to restrict domains that can access the API. This will restrict access only from authorized or installed web app (front end).
3. use web token (x-access-token) and API key (x-key)
4. provide version to API. This enable control to type of support available, and can gradually
   improve and deprecate older API over progression.
5. Use establish web token library such as jwt-simple to handle encoding and decoding of x-access-token.

Solution deployed in AWS S3
at

[COR Question 1 ](https://s3-us-west-2.amazonaws.com/kt-cor/question1/index.html)
