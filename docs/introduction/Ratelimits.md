# Rate limits

Every Allxon API endpoint has a rate limit on the number of requests you can make within a specific time window. If you exceed this limit, you will see error responses with status code `429`.

The rate limiter restricts the number of API requests is `1000 calls/1 hour`.

> user 可以再付錢增加

## Checking rate limit
You can use the API response's headers to determine your rate limit.

| Header name           | Description                                                       |
| --------------------- | ----------------------------------------------------------------- |
| X-Ratelimit-Limit     | The maximum number of requests that you can make per hour         |
| X-Ratelimit-Remaining | The number of requests remaining in the current rate limit window |
| X-Ratelimit-Reset     | The epoch seconds at which the current rate limit window resets   |

## Exceeding the rate limit

If you reach the rate limit, you will receive a `429` response, and the `X-Ratelimit-Remaining` header will be 0. You should not retry your request until after the time specified by the `X-Ratelimit-Reset` header.

To ensure continued access to the API, please avoid making excessive requests. Exceeding your rate limit may result in temporary blocking of your integration.