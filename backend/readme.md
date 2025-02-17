# Backend API Documentation

## Endpoint: `/users/register`

### Description

This endpoint registers a new user in the system. It validates input data and creates a new user record in the database.

### HTTP Method

`POST`

### Request Headers

- `Content-Type: application/json`

### Request Body

The request body must be a JSON object containing the following fields:

- `email` (string) - The user's email address. Must be in a valid email format.
- `fullName` (object) - Contains:
  - `firstName` (string) - The user's first name. Must be at least 3 characters long.
  - `lastName` (string) - The user's last name. Optional but must be at least 3 characters long if provided.
- `password` (string) - The user's password. Must be at least 6 characters long.

#### Example Request Body

```json
{
  "email": "user@example.com",
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "password": "securePassword123"
}
```

### Response

#### Success Response

- **Status Code:** `201 Created`
- **Response Body:** A JSON object containing the authentication token and user information.

##### Example Success Response

```json
{
  "token": "jwt-auth-token",
  "user": {
    "id": "user-id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "user@example.com"
  }
}
```

### Error Responses

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Description:** Validation errors in the request body.
- **Response Body:** A JSON object with an `errors` array detailing validation issues.

##### Example Error Response (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Invalid email format",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Server Error

- **Status Code:** `500 Internal Server Error`
- **Description:** An unexpected error occurred on the server.
- **Response Body:** A JSON object with a `message` field.

##### Example Error Response (500 Internal Server Error)

```json
{
  "message": "Internal server error"
}
```

---

## Endpoint: `/users/login`

### Description

This endpoint is used to authenticate a user in the system. It validates the input data and checks the user's credentials against the stored records.

### HTTP Method

`POST`

### Request Headers

- `Content-Type: application/json`

### Request Body

The request body must be a JSON object containing the following fields:

- `email` (string) - The user's email address. Must be a valid email format.
- `password` (string) - The user's password. Must be at least 6 characters long.

#### Example Request Body

```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

### Response

#### Success Response

- **Status Code:** `200 OK`
- **Response Body:** A JSON object containing the authentication token and user information.

##### Example Success Response

```json
{
  "token": "jwt-auth-token",
  "user": {
    "id": "user-id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "user@example.com"
  }
}
```

### Error Responses

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Description:** Validation errors in the request body.
- **Response Body:** A JSON object with an `errors` array detailing validation issues.

##### Example Error Response (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Invalid email format",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Unauthorized Error

- **Status Code:** `401 Unauthorized`
- **Description:** Invalid email or password.
- **Response Body:** A JSON object with a `message` field.

##### Example Error Response (401 Unauthorized)

```json
{
  "message": "Invalid email or password"
}
```

#### Server Error

- **Status Code:** `500 Internal Server Error`
- **Description:** An unexpected error occurred on the server.
- **Response Body:** A JSON object with a `message` field.

##### Example Error Response (500 Internal Server Error)

```json
{
  "message": "Internal server error"
}
```
