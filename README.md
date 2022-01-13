## HOTEL DASHBOARD API

# API requests

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
| /api/booking    | POST    | json | Books a room for a customer  | [Post data](##-booking-post)  |
| /api/customers/ | POST    | json | Create a new customer        | [Post data](##-customer-post) |
| /api/rooms/     | POST    | json | Create a new room            | [Post data](##-room-post)     |


## Booking POST

```json
{
	"roomID": id,
	"customerID": id
}

```

## Customer POST

```json
{
    phone:   Number,
    email: String,
    address:   String,
    role: {
        type: String,
        default: "customer"
    },
    roomID: String,
}

```

## Room POST

```json
{
    number: Number,
    isReserved: { type: Boolean, default: false },
}

```