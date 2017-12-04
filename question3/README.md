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
6. Only login route does not require authentication. All other routes will require the caller has authenticated using /login route, and obtained valid access token and x-key.
7. Store the x-access-key and x-key for each login in a distributed data base (SQL or NoSQL). This allows a array of express servers to serve the same session behind a load balancer.
8. Can consider upgrade to other micro-service framework such as Seneca, Molecular.
9. Use Docker to create standardized containers for Node.js API service. Use container technologies to create secure images that can be scaled and started in production on demand
10. Use Docker Compose, or Ansible to define and manage multi-container Docker configurations.

