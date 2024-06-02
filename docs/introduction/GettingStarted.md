# GettingStarted

Here introduce how to quickly get started with the Allxon API using curl. For a more detailed guide, see [API Overview](./APIOverview.md)

## Create your API key

The first step is to create a new API key in [Allxon Portal](https://dms.allxon.com/developer/apikeys)

> 介紹流程，可能也要叫 user add device 但應該可以串到其他教學就好，可以再強調 API Key secret 的重要性和只會出現一次

## Make a API request
> 目前教學先以 linux 為主，之後應該要再補上 windows 的方法
> 
> 這個地方之後應該會先用取得 device 連線狀態當介紹
### Using curl in the command line

Create a shell script ex: `get_device_connection.sh` contains the script below, and with your API key.

```shell
#!/bin/bash

keyid="Your API Key's Key ID"

secret="Your API Key's Secret"

# get current epoch in milliseconds
EPOCH=$(date +%s%3N)

# calculate signing_key
signing_key=$( echo -n "$(($EPOCH / 3600000))" | openssl dgst -sha256 -hmac "$secret" -r | cut -d' ' -f1 )

# calculate signature
signature=$( echo -n "GET/ota/deployment/$d_uuid/all$EPOCH" | openssl dgst -sha256 -hmac "$signing_key" -r | cut -d' ' -f1 )

curl "https://us.api-uat.allxon.com/ota/deployment/$d_uuid/all" \
-H "Accept: application/json" \
-H "Accept-Encoding: gzip" \
-H "Content-Type: application/json" \
-H "Authorization: ALLXON-SIG1 Credential=\"$keyid\",Signature=\"$signature\"" \
-H "X-Allxon-Epoch: $EPOCH" \
--compressed
```
After created the `get_device_connection.sh`, change the access permissions to execute

```shell
chmod u+x ./get_device_connection.sh
```

And execute the script

```shell
./get_device_connection.sh
```

After that, you should get the response body has been formatted as follows:

```json
[{
    "device_sn": "your device's sn",
    "connection": "connected"
}]
```

