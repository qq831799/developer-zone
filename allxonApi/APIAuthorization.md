# Authorization
## API Key Introduction
Allxon API uses an **API key** to authenticate each request. You can view and manage API keys in the [Allxon Portal](https://dms.allxon.com/developer/apikeys).

There is a one-to-one relationship between the **ApiKeyID** and the **ApiSecret**. 

Ex:
```json
"ApiKeyID": "ApiSecret"
```

:::tip
**Secure Your ApiSecret**

Your ApiSecret must be treated like password. To keep your integration secure, never store the secret in your source code or commit it in version control. Instead, use a password manager or deployment system to provide the secret.
:::

Every request in Allxon API must contain an authorization that generated by API key and must be made over HTTPS.

## Authenticating Requests
Your authorization must be included in the `Authorization` header of every request.

The following is an example of the Authorization header value:
```
Authorization: ALLXON-SIG1 Credential="ApiKeyID",Signature="request signature"
```

The following table describes the various components of the Authorization header value:
- `ALLXON-SIG1`: The algorithm that was used to calculate the signature. You must provide this value when you use Allxon Signature version 1 for authentication. The `ALLXON-SIG1` specifies Allxon Signature version 1.
- `Credential`: Your API key's `ApiKeyID`. 
- `Signature`: A hex encoded form of the SHA-256 hash. That can be [generated](#signature-generation) from your API key.

### Signature Generation
Each API request must include a signature. Use your ApiSecret to derive a signing key, and then calculate a signature.

The following code snippet illustrates the general process of computing a signature:

```
SigningKey = Hex(HMAC-SHA256("<ApiSecret>", STR(FLOOR(<X-Allxon-Epoch> / 3600000))))

Signature = Hex(HMAC-SHA256("<SigningKey>", "<HTTPMethod>" + "<EndpointPathWithSearch>" + "<X-Allxon-Epoch>"))
```

Here is the noun in the code snippet
- X-Allxon-Epoch: The timestamp in milliseconds, as in the [request header](./APIOverview.md#request-header).
- HMAC-SHA256(): Computes HMAC by using the SHA256 algorithm with the signing key provided.
- FLOOR(): Rounds and returns the largest integer less than or equal to a given number.
- STR(): Converts the specified value into a string.
- Hex(): Lowercase base-16 encoding.
- HTTPMethod: Your request HTTP method.
- EndpointPathWithSearch: The API endpoint path and string to be searched for, ex: `/path?search=xxx`

#### Step By Step
Example values: 
- **ApiKeyID** is `APIAEXAMPLEKEYID`
- **ApiSecret** is `EPqeEGVcYf6Zpo+6yCqHeoYJSrnDykc9gPShOA==`
- **X-Allxon-Epoch** current epoch timestamp in milliseconds is `1708954065872`.
##### Derive the Signing Key
```
SigningKey = Hex(
        HMAC-SHA256(
            "EPqeEGVcYf6Zpo+6yCqHeoYJSrnDykc9gPShOA==", 
            STR(FLOOR(1708954065872 / 3600000))
        )
    )
          = "9e73a5982eb5a38cb36830773eb92d0d12cbece741a9c95cdab678f1971eb58d"
```
##### Calculate the Signature
```
Signature = Hex(
        HMAC-SHA256(
            "9e73a5982eb5a38cb36830773eb92d0d12cbece741a9c95cdab678f1971eb58d",
            "POST/ota/deployment1708954065872"
        )
    )
          = "77d0a82a06cf01f53fc0d4e2273fc97f876041310790625533de79198ca90379"
```
##### Set the Authorization Header
```
Authorization: ALLXON-SIG1 Credential="APIAEXAMPLEKEYID",Signature="77d0a82a06cf01f53fc0d4e2273fc97f876041310790625533de79198ca90379"
```

