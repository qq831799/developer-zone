# Overview

## Requests to Allxon API
This section describes the elements that make up an API request:

- [API Regional Domains](#api-regional-domains)
- [HTTP method](#http-method)
- [Requests Headers](#requests-headers)


### API Regional Domains
- US Region  
  https://us.api.allxon.com
- EU Region  
  https://eu.api.allxon.com


### HTTP Method
Currently, Allxon API supports the following methods

- GET
- POST
- PUT

If you request an unsuppoted method, you will see an error response with status code `405`.


### Requests Headers
The headers here are **required** in every request with Allxon API.
If the headers are incomplete, you will see an error response with status code `401`.

#### Accept
Allxon API only supports `application/json`. When making a request, you should pass an `Accept` header with a value of `application/json`, for example:
```
Accept: application/json
```

#### Accept-Encoding
Allxon API only supports `gzip`. When making a request, you must pass the `Accept-Encoding` header with a value of `gzip`, for example:

```
Accept-Encoding: gzip
```

#### Content-Type
Allxon API only supports `application/json`. When making a request, you must pass the `Content-Type` header with a value of `application/json`, for example:
```
Content-Type: application/json
```

#### Authorization
Allxon API only supports Allxon Signature Version 1(`ALLXON-SIG1`) for authentication. When making a request, you must pass the `Authorization` header in the format below:

```
Authorization: ALLXON-SIG1 Credential="ApiKeyID",Signature="Signature"
```

See [API Authorization](./APIAuthorization.md) for more detail.
#### X-Allxon-Epoch
The UTC timestamp in number of milliseconds. It's needed for calculating the signature in the `Authorization` header. Upon receiving a request, the server will validate the value of `X-Allxon-Epoch` within a **10 minute** window. When making a request, you must pass the `X-Allxon-Epoch` header with the format below:

```
X-Allxon-Epoch: 1708954065872
```

## Allxon API response
- [Response Headers](#response-headers)
- [Response HTTP status code](#response-http-status-code)

### Response Headers
These headers are included the header in every response from Allxon API.

#### Content-Encoding
Allxon API always uses the value `gzip` in response, for example:
```
Content-Encoding: gzip
```

#### Content-Type
Allxon API always uses the value `application/json` in response, for example:
```
Content-Type: application/json
```

##### X-Request-ID
The value for the `X-Request-ID` is a random token which is unique per HTTP request. A UUID 4 string is used as the identifier, for example:
```
X-Request-ID: 0535ae17-3bb1-4b07-aa07-a25b831e5979
```

##### X-Ratelimit-Limit
The maximum number of requests that you can make per hour, for example:
```
X-Ratelimit-Limit: 1000
```

##### X-Ratelimit-Remaining
The number of requests remaining in the current rate-limit window, for example:
```
X-Ratelimit-Remaining: 900
```

##### X-Ratelimit-Reset
The epoch time, in seconds, at which the current rate-limit window resets. For example:
```
X-Ratelimit-Reset: 1714726743
```

### Response HTTP Status Codes
Allxon API uses HTTP response codes to indicate the success or failure of an API request.
In general:
- 2xx: Indicate success, different per API endpoint
- 4xx: Indicate a client errors that occur due to invalid or incomplete information in the request
- 5xx: Indicate an error with the server

The response body for `4xx` error codes will be formatted as follows:
```json
{
    "code": "E403-1",
    "message": "The failed reason"
}
```

HTTP Status Code Summary
| Code | Description                                                             |
| ---- | ----------------------------------------------------------------------- |
| 200  | The request has completed successfully                                  |
| 202  | The request has been submitted and will be processed in the background  |
| 400  | The request contains invalid or incomplete information                  |
| 401  | The request does not contain a valid API key                            |
| 403  | The API key does not have permissions to perform the request            |
| 404  | The requested resource does not exist                                   |
| 405  | The requested method is not supported                                   |
| 409  | The requested resource already exists                                   |
| 429  | The number of requests have exceeded the rate limits                    |
| 500  | Something went wrong on server                                          |
