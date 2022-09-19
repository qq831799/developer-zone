# Introduction

![allxon_infrasturcture](../_img/allxon_infrastructure.svg)

This picture show the Allxon infrastructure a overview. Each plugin communicate with Allxon Agent through JSON-RPC Websocket, and Allxon Agent like a bridge to bring JSON-RPC payload between Allxon cloud and plugin.

## Secure Data

Octo SDK help you to verify decrypt json payload from Allxon Agent, and help you to encrypt json payload to Allxon Agent. 

![security](_img/Security.drawio.svg)

Fortunately, all you have to know is understand how to use Octo SDK to send and receive data.

```cpp
#include <string>
#include "json_validator.h"

int main(int argc, char **argv)
{
    // notifyPluginUpdate json template
    std::string json_content = "{\"jsonrpc\": \"2.0\", \"method\": \"v2/notifyPluginUpdate\"...}"; 
    std::string PLUGIN_NAME = "my_plugin_name";
    std::string PLUGIN_APP_GUID = "my_plugin_app_guid";
    std::string PLUGIN_ACCESS_KEY = "my_plugin_access_key";
    std::string PLUGIN_VERSION = "my_plugin_version";
    
    auto json_validator = JsonValidator(PLUGIN_NAME, PLUGIN_APP_GUID,
                                        PLUGIN_ACCESS_KEY, PLUGIN_VERSION,
                                        json_content); 
    
    std::string other_plugin_api_json_content;
    if (json_validator.Sign(other_plugin_api_json_content))
    {
        // if sign success, you can send it through websocket
        // e.g. 
        // enpoint.send(other_plugin_api_json_content);
    }

    if (json_validator.Verify(other_plugin_api_json_content))
    {
        // if verify success, means json content is safe, you can read it
    }
    return 0;
}
```