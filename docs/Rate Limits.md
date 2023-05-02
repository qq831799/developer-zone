# Rate Limits
Our mission is to provide a cutting-edge platform that enables users and developers to easily build and deploy plugins that optimize their business operations.
We have implemented rate limits to prevent abuse or misuse of the **Allxon Octo** and maintain a smooth and consistent experience for all users. Please take note of the applicable rate limits outlined below.

1.	The maximum payload size for each API transmission is **5KB**.
2.	The Agent uploads data(states, metrics, events) **once per minutes** to the Portal. 
3.	A plugin is subject to a maximun hourly limit of **500 API calls** to the Agent calculated on a rolling basis.

Suppose a plugin updates its states to the Agent every 10 seconds, which translates to 6 API calls per minute. However, the Agent only uploads states to the Portal once per minute. In this scenario, the plugin consumes 5 API calls unnecessarily. Therefore, it is advisable to optimize data uploads by extending the update interval to be greater as possible than one minute.

:::tip **Tips for staying within rate limits**
1. Consider updating your data at longer intervals, rather than every minute.
2. Consolidate data into an object and avoid transmitting them individually.
3. Update only those values that have changed, avoiding unnecessary updates for values that remain static.
:::


In addition to the rate limits, it is important to consider that IoT and edge AI devices are often subject to limited compute resources, constrained network bandwidth, and harsh installation environments. As such, it is imperative that your plugin does not compromise the performance of the device or any other applications, and that users feel confident in using your plugin.

We appreciate your cooperation in creating a better experience for our users, and we look forward to seeing the innovative plugins you develop on our platform.
