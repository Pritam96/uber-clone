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

#### Error Responses

- **Validation Error:** If the request body contains invalid data, a `400 Bad Request` response will be returned.
- **Internal Server Error:** If an unexpected error occurs, a `500 Internal Server Error` response will be returned.

## Endpoint: `/users/login`

### Description

This endpoint authenticates a user in the system. It validates the input data and checks the user's credentials against the stored records.

### HTTP Method

`POST`

### Request Headers

- `Content-Type: application/json`

### Request Body

The request body must be a JSON object containing the following fields:

- `email` (string) - The user's email address. Must be in a valid email format.
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

#### Error Responses

- **Unauthorized Error:** If the email or password is invalid, a `401 Unauthorized` response will be returned.
- **Internal Server Error:** If an unexpected error occurs, a `500 Internal Server Error` response will be returned.

## Endpoint: `/users/profile`

### Description

This endpoint retrieves the authenticated user's profile information.

### HTTP Method

`GET`

### Request Headers

- `Authorization: Bearer <token>` - The authentication token obtained during login.

### Response

#### Success Response

- **Status Code:** `200 OK`
- **Response Body:** A JSON object containing the user's profile information.

##### Example Success Response

```json
{
  "id": "user-id",
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "user@example.com"
}
```

#### Error Responses

- **Unauthorized Error:** If the authentication token is invalid or missing, a `401 Unauthorized` response will be returned.
- **Internal Server Error:** If an unexpected error occurs, a `500 Internal Server Error` response will be returned.

## Endpoint: `/users/logout`

### Description

This endpoint logs out the authenticated user by invalidating their authentication token.

### HTTP Method

`GET`

### Request Headers

- `Authorization: Bearer <token>` - The authentication token obtained during login.

### Response

#### Success Response

- **Status Code:** `200 OK`
- **Response Body:** A JSON object containing a success message.

##### Example Success Response

```json
{
  "message": "User logged out successfully"
}
```

#### Error Responses

- **Unauthorized Error:** If the authentication token is invalid or missing, a `401 Unauthorized` response will be returned.
- **Internal Server Error:** If an unexpected error occurs, a `500 Internal Server Error` response

## Endpoint: `/captains/register`

### Description

This endpoint registers a new captain in the system. It validates input data and creates a new captain record in the database.

### HTTP Method

`POST`

### Request Headers

- `Content-Type: application/json`

### Request Body

| Field    | Type   | Description                                                   | Example                                                                      |
| -------- | ------ | ------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| email    | string | The captain's email address. Must be in a valid email format. | `"captain@example.com"`                                                      |
| fullName | object | Contains the captain's first and last names.                  | `{ "firstName": "John", "lastName": "Doe" }`                                 |
| password | string | The captain's password. Must be at least 6 characters long.   | `"securePassword123"`                                                        |
| vehicle  | object | Contains the vehicle's details.                               | `{ "color": "Red", "plate": "ABC123", "capacity": 4, "vehicleType": "car" }` |

### Response

#### Success Response

- **Status Code:** `201 Created`
- **Response Body:** A JSON object containing the authentication token and captain information.

#### Error Responses

- **400 Bad Request:** If the request body is invalid or missing required fields.
- **500 Internal Server Error:** If an unexpected error occurs.

### Example Request Body

```json
{
  "email": "captain@example.com",
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "password": "securePassword123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Success Response

```json
{
  "token": "jwt-auth-token",
  "captain": {
    "id": "captain-id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "captain@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

## Endpoint: `/captains/login`

### Description

This endpoint authenticates a captain in the system. It validates the input data and checks the captain's credentials against the stored records.

### HTTP Method

`POST`

### Request Headers

- `Content-Type: application/json`

### Request Body

| Field    | Type   | Description                                                   | Example                 |
| -------- | ------ | ------------------------------------------------------------- | ----------------------- |
| email    | string | The captain's email address. Must be in a valid email format. | `"captain@example.com"` |
| password | string | The captain's password. Must be at least 6 characters long.   | `"securePassword123"`   |

### Response

#### Success Response

- **Status Code:** `201 Created`
- **Response Body:** A JSON object containing the authentication token and captain information.

#### Error Responses

- **401 Unauthorized:** If the captain's credentials are invalid.
- **500 Internal Server Error:** If an unexpected error occurs.

### Example Request Body

```json
{
  "email": "captain@example.com",
  "password": "securePassword123"
}
```

### Example Success Response

```json
{
  "token": "jwt-auth-token",
  "captain": {
    "id": "captain-id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "captain@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

## Endpoint: `/captains/profile`

### Description

This endpoint retrieves the authenticated captain's profile information.

### HTTP Method

`GET`

### Request Headers

- `Authorization: Bearer <token>` - The authentication token obtained during login.

### Response

#### Success Response

- **Status Code:** `200 OK`
- **Response Body:** A JSON object containing the captain's profile information.

##### Example Success Response

```json
{
  "id": "captain-id",
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "captain@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Error Responses

- **Unauthorized Error:** If the authentication token is invalid or missing, a `401 Unauthorized` response will be returned.
- **Internal Server Error:** If an unexpected error occurs, a `500 Internal Server Error` response will be returned.

## Endpoint: `/captains/logout`

### Description

This endpoint logs out the authenticated captain by invalidating their authentication token.

### HTTP Method

`POST`

### Request Headers

- `Authorization: Bearer <token>` - The authentication token obtained during login.

### Response

#### Success Response

- **Status Code:** `200 OK`
- **Response Body:** A JSON object containing a success message.

##### Example Success Response

```json
{
  "message": "Captain logged out successfully"
}
```

#### Error Responses

- **Unauthorized Error:** If the authentication token is invalid or missing, a `401 Unauthorized` response will be returned.
- **Internal Server Error:** If an unexpected error occurs, a `500 Internal Server Error` response will be returned.
