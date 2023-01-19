# social-blog-API
A multiuser social media based API built on node.js 

## Documentation

### Create an Account or signup
#### POST request
Endpoint :localhost:5000/api/user/signup

body :- 



![image](https://user-images.githubusercontent.com/97692286/213542678-73337a62-1e50-4b8a-9c24-7e2a1a7d4032.png)



### Get All Users
Endpoint:localhost:5000/api/user/

### Login
#### POST request
Endpoint:localhost:5000/api/user/login

Body :-



![image](https://user-images.githubusercontent.com/97692286/213543090-a647ffa2-a388-4af4-aa91-9af64dc30b6c.png)


### Get All blog posts

Endpoint:localhost:5000/api/blog/

### Get Blog Post By ID

Endpoint:localhost:5000/api/blog/:id

### Get Blogs by User ID
Endpoint:localhost:5000/api/blog/user/:id  (User ID)

### Create a Blog Post 
#### POST request
Endpoint:localhost:5000/api/blog/add

Body :-



![image](https://user-images.githubusercontent.com/97692286/213543936-1309ec8f-bbd5-481a-95cc-8531b7818d7d.png)

### Update a Blog Post
#### PUT request
Endpoint:localhost:5000/api/blog/update/:id

Body:-



![image](https://user-images.githubusercontent.com/97692286/213544307-0f8663ba-0dc3-4fc3-af87-a90ec55a0d7a.png)



### Delete A Blog Post
#### Delete request
Endpoint:localhost:5000/api/blog/:id

