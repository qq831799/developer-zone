![allxon_infrasturcture](_img/allxon_infrastructure.svg)

## Terminologies
- Allxon Cloud: The backend server(s) of Allxon service, both Allxon Portal and Allxon Agents are connected to Allxon Cloud.
- Allxon Portal: The frontend server(s) of Allxon service.
- Allxon Agent: The agent application of Allxon service.
- Plugin: A software application developed by developers to extend the functionalities of Allxon service.  Plugin sends collected data from modules to Allxon Cloud via Allxon Agents.  Also plugin sends commands to modules from Allxon Portal via Allxon Agents.
- Module: A hardware component or a software application developed by its vendors.  Plugin collects data or send commands to a module via the methods provided by its vendor.
- MQTT Broker: Each Allxon Agent will connect to a MQTT broker hosted by Allxon Cloud.  All the data exchange between Allxon Agents and Allxon Cloud will go through this channel.
- WebSocket Server: Each plugin will connect to a WebSocket server hosted within the Allxon Agent.  Plugin sends and receives data to/from Allxon Cloud with plugIN APIs through this channel.
- plugIN API: The Application Programming Interface used to communicate between Allxon Agent and Plugin.
- Allxon Octo SDK: The Software Development Kit provided by Allxon to help developers to build up and verify plugIN APIs.
- App GUID: A unique identifier assigned by Allxon to each plugin in UUIDv4 format.
Access Key: A secret key assigned by Allxon to each plugin for message signing.