## HOTEL DASHBOARD API

## API requests

GET requests

| Endponits         | request | type | description                        |
|-------------------|---------|------|------------------------------------|
| /api              | GET     | json | returns a list of available rooms  |
| /api/booked       | GET     | json | returns a list of booked rooms     |
| /api/customers    | GET     | json | returns a list of customers        |
| /api/customers/id | GET     | json | returns a customer by id           |
| /api/rooms        | GET     | json | returns a list of rooms            |
| /api/rooms/id     | GET     | json | returns a room by id               |

POST requests

| Endponits       | request | type | description                  | POST data      |
|-----------------|---------|------|------------------------------|----------------|
| /api/booking    | POST    | json | Books a room for a customer  | [Post data](#-booking-post)  |
| /api/customers/ | POST    | json | Create a new customer        | [Post data](#-customer-post) |
| /api/rooms/     | POST    | json | Create a new room            | [Post data](####-room-post)     |

DELETE requests

| Endponits         | request | type | description             |
|-------------------|---------|------|-------------------------|
| /api/customers/id | DELETE  | json | Delete a customer by id |
| /api/rooms/id     | DELETE  | json | Delete a room by id     |

PUT requests

| Endponits         | request | type | description              |
|-------------------|---------|------|--------------------------|
| /api/customers/id | PUT     | json | Updates a customer by id |
| /api/rooms/id     | PUT     | json | Updates a room by id     |


#### Booking POST

```json
{
	"roomID": "room id here",
	"customerID": "customer id here"
}

```

#### Customer POST

```json
{
    "name": "Jon Doe"
    "phone": 060595004,
    "email": "jon@example.com",
    "address":  "somewhere",
    "role": "customer" //defaults to customer 
    "roomID": "id of the booked room",
}

```

#### Room POST

```json
{
    "number": 4210,
    "isReserved": false,  //default is false
}

```



