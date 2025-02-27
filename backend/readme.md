# Backend API Documentation

## Endpoint: `/users/register`

### Description

Registers a new user in the system. Validates input data and creates a new user record in the database.

### HTTP Method

`POST`

### Request Headers

- `Content-Type: application/json`

### Request Body

| Field    | Type   | Description                                                | Example                                      |
| -------- | ------ | ---------------------------------------------------------- | -------------------------------------------- |
| email    | string | The user's email address. Must be in a valid email format. | `"user@example.com"`                         |
| fullName | object | Contains the user's first and last names.                  | `{ "firstName": "John", "lastName": "Doe" }` |
| password | string | The user's password. Must be at least 6 characters long.   | `"securePassword123"`                        |

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

- **400 Bad Request:** Invalid or missing request body.
- **500 Internal Server Error:** Unexpected server error.

---

## Endpoint: `/users/login`

### Description

Authenticates a user in the system. Validates the input data and checks the user's credentials against stored records.

### HTTP Method

`POST`

### Request Headers

- `Content-Type: application/json`

### Request Body

| Field    | Type   | Description                                                | Example               |
| -------- | ------ | ---------------------------------------------------------- | --------------------- |
| email    | string | The user's email address. Must be in a valid email format. | `"user@example.com"`  |
| password | string | The user's password. Must be at least 6 characters long.   | `"securePassword123"` |

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

- **401 Unauthorized:** Invalid email or password.
- **500 Internal Server Error:** Unexpected server error.

---

## Endpoint: `/users/profile`

### Description

Retrieves the authenticated user's profile information.

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

- **401 Unauthorized:** Invalid or missing authentication token.
- **500 Internal Server Error:** Unexpected server error.

---

## Endpoint: `/users/logout`

### Description

Logs out the authenticated user by invalidating their authentication token.

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

- **401 Unauthorized:** Invalid or missing authentication token.
- **500 Internal Server Error:** Unexpected server error.

---

## Endpoint: `/captains/register`

### Description

Registers a new captain in the system. Validates input data and creates a new captain record in the database.

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

#### Example Request Body

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

### Response

#### Success Response

- **Status Code:** `201 Created`
- **Response Body:** A JSON object containing the authentication token and captain information.

##### Example Success Response

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

#### Error Responses

- **400 Bad Request:** Invalid or missing request body.
- **500 Internal Server Error:** Unexpected server error.

---

## Endpoint: `/captains/login`

### Description

Authenticates a captain in the system. Validates the input data and checks the captain's credentials against stored records.

### HTTP Method

`POST`

### Request Headers

- `Content-Type: application/json`

### Request Body

| Field    | Type   | Description                                                   | Example                 |
| -------- | ------ | ------------------------------------------------------------- | ----------------------- |
| email    | string | The captain's email address. Must be in a valid email format. | `"captain@example.com"` |
| password | string | The captain's password. Must be at least 6 characters long.   | `"securePassword123"`   |

#### Example Request Body

```json
{
  "email": "captain@example.com",
  "password": "securePassword123"
}
```

### Response

#### Success Response

- **Status Code:** `201 Created`
- **Response Body:** A JSON object containing the authentication token and captain information.

##### Example Success Response

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

#### Error Responses

- **401 Unauthorized:** Invalid email or password.
- **500 Internal Server Error:** Unexpected server error.

---

## Endpoint: `/captains/profile`

### Description

Retrieves the authenticated captain's profile information.

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

- **401 Unauthorized:** Invalid or missing authentication token.
- **500 Internal Server Error:** Unexpected server error.

---

## Endpoint: `/captains/logout`

### Description

Logs out the authenticated captain by invalidating their authentication token.

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

- **401 Unauthorized:** Invalid or missing authentication token.
- **500 Internal Server Error:** Unexpected server error.

---

## Endpoint: `/maps/coordinates`

### Description

Fetches latitude and longitude coordinates for a given address.

### HTTP Method

`GET`

### Authentication

- Requires a valid user authentication.

### Query Parameters

| Parameter | Type   | Required | Description                          |
| --------- | ------ | -------- | ------------------------------------ |
| address   | string | Yes      | Address to retrieve coordinates for. |

### Response

#### Success Response

- **Status Code:** `200 OK`
- **Response Body:** A JSON object containing latitude and longitude.

##### Example Success Response

```json
{
  "lat": 22.5726,
  "lng": 88.3639
}
```

#### Error Responses

- **400 Bad Request:** Invalid or missing address.
- **404 Not Found:** Address not found.
- **500 Internal Server Error:** Unexpected server error.

---

## Endpoint: `/maps/distance-time`

### Description

Calculates the distance and estimated travel time between two locations.

### HTTP Method

`GET`

### Authentication

- Requires a valid user authentication.

### Query Parameters

| Parameter   | Type   | Required | Description           |
| ----------- | ------ | -------- | --------------------- |
| origin      | string | Yes      | Starting location.    |
| destination | string | Yes      | Destination location. |

### Response

#### Success Response

- **Status Code:** `200 OK`
- **Response Body:** A JSON object containing distance and duration.

##### Example Success Response

```json
{
  "distance": "10 km",
  "duration": "15 mins"
}
```

#### Error Responses

- **400 Bad Request:** Invalid or missing parameters.
- **500 Internal Server Error:** Unexpected server error.

---

## Endpoint: `/maps/suggestions`

### Description

Provides address suggestions based on partial input.

### HTTP Method

`GET`

### Authentication

- Requires a valid user authentication.

### Query Parameters

| Parameter | Type   | Required | Description                      |
| --------- | ------ | -------- | -------------------------------- |
| input     | string | Yes      | Partial address for suggestions. |

### Response

#### Success Response

- **Status Code:** `200 OK`
- **Response Body:** A JSON array of address suggestions.

##### Example Success Response

```json
[
  "Park Street, Kolkata, India",
  "Park Circus, Kolkata, India",
  "Park Lane, London, UK"
]
```

#### Error Responses

- **400 Bad Request:** Invalid or missing input.
- **500 Internal Server Error:** Unexpected server error.

## Endpoint: `/rides/create`

### Description

Creates a new ride request. Validates the input data, calculates the fare based on the pickup and destination locations, and generates an OTP for the ride.

### HTTP Method

`POST`

### Authentication

- Requires a valid user authentication token.

### Request Headers

- `Authorization: Bearer <token>` - The authentication token obtained during login.
- `Content-Type: application/json`

### Request Body

| Field       | Type   | Required | Description                                                       | Example                  |
| ----------- | ------ | -------- | ----------------------------------------------------------------- | ------------------------ |
| pickup      | string | Yes      | The pickup location. Must be at least 3 characters long.          | `"Park Street, Kolkata"` |
| destination | string | Yes      | The destination location. Must be at least 3 characters long.     | `"Salt Lake, Kolkata"`   |
| vehicleType | string | Yes      | The type of vehicle. Must be one of: `auto`, `car`, `motorcycle`. | `"car"`                  |

#### Example Request Body

```json
{
  "pickup": "Park Street, Kolkata",
  "destination": "Salt Lake, Kolkata",
  "vehicleType": "car"
}
```

### Response

#### Success Response

- **Status Code:** `201 Created`
- **Response Body:** A JSON object containing the ride details.

##### Example Success Response

```json
{
  "id": "ride-id",
  "user": "user-id",
  "pickup": "Park Street, Kolkata",
  "destination": "Salt Lake, Kolkata",
  "fare": 120.5,
  "otp": "123456",
  "status": "pending"
}
```

#### Error Responses

- **400 Bad Request:** Invalid or missing request body.
- **401 Unauthorized:** Invalid or missing authentication token.
- **500 Internal Server Error:** Unexpected server error.

### Validation Rules

The following validation rules are applied to the request body:

1. **pickup:**
   - Must be a string.
   - Must be at least 3 characters long.
   - Error message: `"Invalid pickup location"`.
2. **destination:**
   - Must be a string.
   - Must be at least 3 characters long.
   - Error message: `"Invalid destination location"`.
3. **vehicleType:**
   - Must be a string.
   - Must be one of: `auto`, `car`, `motorcycle`.
   - Error message: `"Invalid vehicle type"`.

### Fare Calculation

The fare is calculated based on the following formula:

```
Fare = Base Fare + (Distance × Per Km Rate) + (Time × Per Minute Rate)
```

#### Base Fare

- `auto`: 30
- `car`: 50
- `motorcycle`: 20

#### Per Km Rate

- `auto`: 10
- `car`: 15
- `motorcycle`: 8

#### Per Minute Rate

- `auto`: 2
- `car`: 3
- `motorcycle`: 1.5

### OTP Generation

A 6-digit OTP is generated for each ride using a cryptographically secure random number generator.

### Example Use Case

1. **Request:**
   ```json
   {
     "pickup": "Park Street, Kolkata",
     "destination": "Salt Lake, Kolkata",
     "vehicleType": "car"
   }
   ```
2. **Response:**
   ```json
   {
     "id": "ride-id",
     "user": "user-id",
     "pickup": "Park Street, Kolkata",
     "destination": "Salt Lake, Kolkata",
     "fare": 120.5,
     "otp": "123456",
     "status": "pending"
   }
   ```

## Endpoint: `/rides/fare`

### Description

Calculates the fare for a ride based on the pickup and destination locations. The fare is calculated for all available vehicle types (`auto`, `car`, `motorcycle`).

### HTTP Method

`GET`

### Authentication

- Requires a valid user authentication token.

### Request Headers

- `Authorization: Bearer <token>` - The authentication token obtained during login.

### Query Parameters

| Parameter     | Type   | Required | Description                                                   | Example                  |
| ------------- | ------ | -------- | ------------------------------------------------------------- | ------------------------ |
| `pickup`      | string | Yes      | The pickup location. Must be at least 3 characters long.      | `"Park Street, Kolkata"` |
| `destination` | string | Yes      | The destination location. Must be at least 3 characters long. | `"Salt Lake, Kolkata"`   |

#### Example Request URL

```
GET /rides/fare?pickup=Park%20Street%2C%20Kolkata&destination=Salt%20Lake%2C%20Kolkata
```

### Response

#### Success Response

- **Status Code:** `200 OK`
- **Response Body:** A JSON object containing the fare for each vehicle type.

##### Example Success Response

```json
{
  "auto": 120.5,
  "car": 180.75,
  "motorcycle": 90.25
}
```

#### Error Responses

- **400 Bad Request:** Invalid or missing query parameters.
- **401 Unauthorized:** Invalid or missing authentication token.
- **500 Internal Server Error:** Unexpected server error.

### Validation Rules

The following validation rules are applied to the query parameters:

1. **pickup:**
   - Must be a string.
   - Must be at least 3 characters long.
   - Error message: `"Invalid pickup location"`.
2. **destination:**
   - Must be a string.
   - Must be at least 3 characters long.
   - Error message: `"Invalid destination location"`.

### Fare Calculation

The fare is calculated based on the following formula:

```
Fare = Base Fare + (Distance × Per Km Rate) + (Time × Per Minute Rate)
```

#### Base Fare

- `auto`: 30
- `car`: 50
- `motorcycle`: 20

#### Per Km Rate

- `auto`: 10
- `car`: 15
- `motorcycle`: 8

#### Per Minute Rate

- `auto`: 2
- `car`: 3
- `motorcycle`: 1.5

### Example Use Case

1. **Request:**
   ```
   GET /rides/fare?pickup=Park%20Street%2C%20Kolkata&destination=Salt%20Lake%2C%20Kolkata
   ```
2. **Response:**
   ```json
   {
     "auto": 120.5,
     "car": 180.75,
     "motorcycle": 90.25
   }
   ```
