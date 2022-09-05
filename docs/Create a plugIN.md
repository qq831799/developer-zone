---
sidebar_position: 2
---

For simple, we don't make a plugIN from scratch. Let's modify and build a plugIN from [Hello plugIN](https://github.com/allxon/plugIN-hello).

```
git clone https://github.com/allxon/plugIN-hello.git
```

## Apply a plugIN Key

First, [Contact us](https://www.allxon.com/) to apply a `plugin_key.json` file. With the key, Allxon portal can recognize your plugIN, and make sure your data is encrypted and safed. 

Here is a example of `plugin_key.json`:

```json
{
    "app_guid":"a5nf65b-1cf7-46e6-af56-d41eac4nbcC1",
    "access_key":"91IXqwIQkWItqmRJfNyZUTOwAc43smQP",
    "platform":"linux",
    "architecture":"x86_64"
}
```

`app_guid` repesent your plugIN's ID, `access_key` is your key to encrypt your data.

:::caution
Please keep your `access_key` safety, don't reveal on public.
:::

## Modify hello plugIN

