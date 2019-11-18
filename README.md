# BackEnd

## [https://chore-tracker-bw.herokuapp.com/](https://chore-tracker-bw.herokuapp.com/)

#Endpoints

### POST /users/register

#### Expects

```
{
       "username": "User1",
       "password": "password123",
       "first_name": "John", (can be null)
       "last_name": "Doe", (can be null)
       "email": "johndoe@email.com",(can be null)
       "family_password": "chores123", (can be null)
       "role": "parent"
}
```

#### Returns
```
{
      "username": "User1" 
}
```

## POST /users/login

### Expects

```
{
    "username": "User1",
    "password": "password123"
}
```

#### Returns
```
{
    "userId": 1,
    "username": "User1",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6InRlc3Q1IiwiaWF0IjoxNTc0MTA2MzE3LCJleHAiOjE1NzQxOTI3MTd9.eSFR6qhfnC8JstvFxo6PmDTZLke_uQHlu6LKEOAePeo"
 }
 ```
