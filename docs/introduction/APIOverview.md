# API Overview

## About requests to the Allxon API
This section describes the elements that make up an API request:

- [API Regional Domains](#api-regional-domains)
- [HTTP method](#http-method)
- [Requests Headers](#requests-headers)

### API Regional Domains
- US Region  
  https://us.api.allxon.com
- EU Region  
  https://eu.api.allxon.com
- JP Region  
  https://jp.api.allxon.com

> 看有沒有需要列其他 region 的資訊

### HTTP method

Current Allxon API support the following method

- GET
- POST
- PUT

If you request an unsuppoted method, you will see error responses with status code `405`.

### Requests Headers

The list here is **required** header in every request with Allxon API.
> 確認 header 不完整回的 error

#### Accept

Allxon API only support `application/json`. Should pass an `Accept` header with a value of `application/json`, for example:
```
Accept: application/json
```

#### Accept-Encoding

Allxon API only support `gzip`. Must pass the `Accept-Encoding` header with a value of `gzip`, for example:

```
Accept-Encoding: gzip
```

#### Content-Type

Allxon API only support `application/json`. Must pass the `Content-Type` header with a value of `application/json`, for example:
```
Content-Type: application/json
```

#### Authorization

Allxon API only support Allxon Signature Version 1(`ALLXON-SIG1`) for authentication. Must pass the `Authorization` header with a format below:

```
Authorization: ALLXON-SIG1 Credential="Key ID",Signature="Signature"
```

See [API Authorization](./APIAuthorization.md) for more detail.

#### X-Allxon-Epoch

The UTC epoch in number of milliseconds. It's needed for calculating signature in `Authorization` header. Upon receiving requests, server will validate the value of `X-Allxon-Epoch` within **10 minute** window. Must pass the `X-Allxon-Epoch` header with a format below:

```
X-Allxon-Epoch: 1708954065872
```

#### X-Allxon-Version (TBD)
> 之後才會用到

## About the Allxon API response

- [Response Headers](#response-headers)
- [Response HTTP status code](#response-http-status-code)

### Response Headers

The list here is the header in every response from Allxon API.

#### Content-Encoding

Allxon API always uses value `gzip` in response, for example:
```
Content-Encoding: gzip
```

#### Content-Type

Allxon API always uses value `application/json` in response, for example:
```
Content-Type: application/json
```

##### X-Request-ID

The value for the `X-Request-ID` is a random token which is unique per HTTP request. A UUID 4 string is used as identifier, for example:

```
X-Request-ID: 0535ae17-3bb1-4b07-aa07-a25b831e5979
```

##### X-Ratelimit-Limit
The maximum number of requests that you can make per hour, for example:
```
X-Ratelimit-Limit: 1000
```

##### X-Ratelimit-Remaining
The number of requests remaining in the current rate limit window, for example:
```
X-Ratelimit-Remaining: 900
```

##### X-Ratelimit-Reset
The epoch seconds at which the current rate limit window resets, for example:
```
X-Ratelimit-Reset: 1714726743
```

### Response HTTP status code
Allxon API uses HTTP response codes to indicate the success or failure of an API request.

In general:
- 2xx: Indicate success, differ by API endpoint.
- 4xx: Indicate a client errors that occur due to invalid or incomplete information in the request
- 5xx: Indicate an error with servers

In `4xx` error codes, if there is response body, it will be formatted as follows:
```json
{
    "code": "E403-1",
    "message": "The failed reason"
}
```

HTTP Status Code Summary
| Code | Description                                                             |
| ---- | ----------------------------------------------------------------------- |
| 200  | The request has been done                                               |
| 202  | The request has been submitted and will be processed in the background. |
| 400  | Invalid or incomplete information in the request                        |
| 401  | No valid API key provided.                                              |
| 403  | The API key doesn’t have permissions to perform the request.            |
| 404  | The requested resource doesn’t exist.                                   |
| 405  | The request method is not supported                                     |
| 409  | The requested resource already exists.                                  |
| 429  | Has exceeded the rate limits                                            |
| 500  | Something went wrong on server.                                         |