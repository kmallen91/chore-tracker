# Chore Tracker BackEnd
## [https://chore-tracker-bw.herokuapp.com/](https://chore-tracker-bw.herokuapp.com/)

## For CORS Errors use
## [https://cors-anywhere.herokuapp.com/https://chore-tracker-bw.herokuapp.com/](https://cors-anywhere.herokuapp.com/https://chore-tracker-bw.herokuapp.com/)

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
    "completed": false, 
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
    "points": 9
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
    "completed": false,
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

## /children Endpoints

### /children GET Request

#### Returns
```
[
  {
    "child_id": 3,
    "parent_id": 1,
    "chores": "sweep, mop",
    "child_username": "testchild5",
    "child_password": null,
    "messages": "tester",
    "chore_streak": 0,
    "chore_score": 10,
    "bonus_points": null,
    "role": "child"
  },
  {
    "child_id": 2,
    "parent_id": 1,
    "chores": "sweep, mop",
    "child_username": "Billy",
    "child_password": null,
    "messages": "keep up the good work",
    "chore_streak": 5,
    "chore_score": 20,
    "bonus_points": null,
    "role": "child"
  },
  {
    "child_id": 1,
    "parent_id": 1,
    "chores": "sweep, mop",
    "child_username": "Joey",
    "child_password": null,
    "messages": "Do your chores!",
    "chore_streak": 0,
    "chore_score": 10,
    "bonus_points": null,
    "role": "child"
  }
]
```

### /children POST Request

#### Expects
```
{
	"parent_id": 1,
	"chores": "sweep, mop",
	"child_username": "testchild5",
	"messages": "tester",
	"chore_score": 10,
	"chore_streak": 0,
	"role":"child"
}
```
#### Note you cannot add a child with a parent_id that does not exist

#### Returns
```
[
  {
    "child_id": 3,
    "parent_id": 1,
    "chores": "sweep, mop",
    "child_username": "testchild5",
    "child_password": null,
    "messages": "tester",
    "chore_streak": 0,
    "chore_score": 10,
    "bonus_points": null,
    "role": "child"
  }
]
```

### /children PUT Request

#### Expects
```
{
	"parent_id": 1,
	"chores": "sweep, mop",
	"child_username": "testchild1",
	"messages": "Do your chores!",
	"chore_score": 20,
	"chore_streak": 5,
	"role":"child"
}
```

#### Returns
```
{
  "parent_id": 1,
  "chores": "sweep, mop",
  "child_username": "testchild1",
  "messages": "Do your chores!",
  "chore_score": 20,
  "chore_streak": 5,
  "role": "child"
}
```
#### Not all fields are required in a PUT request

### /children/:id DELETE Request

#### Returns
```
{
	deleted: 2
}
```

## /children/:id/chores Endpoints

### /children/:id/chores GET Request

#### Returns
```
{
     "id": 1,
    "name": "sweep",
    "due_date": "2019-11-21",
    "completed": false, 
    "created_at": "2019-11-18 22:00:01"
}
```

### /children/:id/chores POST Request

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

### /children/:id/chores PUT Request

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

### /children/:id/chores/:id DELETE Request

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
