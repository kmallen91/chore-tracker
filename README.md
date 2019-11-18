# Chore Tracker BackEnd

## [https://chore-tracker-bw.herokuapp.com/](https://chore-tracker-bw.herokuapp.com/)

# Endpoints

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
       "role": "parent" (can be null)
}
```

#### Returns
```
{
      "username": "User1" 
}
```

### POST /users/login

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
    "userId": "1",
    "username": "User1",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6InRlc3Q1IiwiaWF0IjoxNTc0MTA2MzE3LCJleHAiOjE1NzQxOTI3MTd9.eSFR6qhfnC8JstvFxo6PmDTZLke_uQHlu6LKEOAePeo"
 }
 ```
 
 ## /chores Endpoints

### /chores GET Request

#### Returns
```
{
     "id": 1,
    "name": "sweep",
    "due_date": "2019-11-21",
    "completed": 0, (0 is false, 1 is true)
    "created_at": "2019-11-18 22:00:01"
}
```

### /chores POST Request

#### Expects
```
{
    "name": "sweep",
    "due_date": "2019-11-21",
    "completed": false,
    "points": 10
}
```
id and created_at are generated on post

#### Returns
```
{
  "chore": {
    "id": 2,
    "name": "mop",
    "due_date": "2019-11-25",
    "completed": 0,
    "created_at": "2019-11-18 22:41:00"
  }
}
```

### /chores PUT Request

#### Expects
```
{      
       "id": 2
	"name":"sweep",
	"due_date":"2019-11-28",
	"completed":true,
       "points": 10
}
```

#### Returns
```
{
  "updatedChore": {
    "id": "1",
    "name": "sweep",
    "due_date": "2019-11-22",
    "completed": true,
    "points": 10
  }
  
}
```

### /chores/:id DELETE Request

#### Returns
```
{      
       "id": 2
	"name":"sweep",
	"due_date":"2019-11-28",
	"completed":true,
       "points": 10
}
```
