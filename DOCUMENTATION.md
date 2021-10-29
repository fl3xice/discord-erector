# Docs

## Bot.ts

This is the starting point for your bot, here are all the data for your bot, and here you can add plugins to your bot.

## config.toml

The configuration file is not required, but the standard is toml, the configuration file itself can have predefined fields and sections in the DefaultConfig interface, which is in ConfigurationLoader.ts

E.G if you do not want to use ConfigurationLoader, you can try this method

### Before:

```ts
const Bot: BotInterface = {
    // -snip-
    config: ConfigurationLoader.getConfig(),
    // -snip-
};
```

### After:

```ts
const Bot: BotInterface = {
    // -snip-
    config: {
        token: '<your-token>',
        database: {
            mongourl: '<mongo-url>',
        },
    },
    // -snip-
};
```

### Options

#### Default section

| Name     | Type   |
| -------- | ------ |
| token    | string |
| clientID | string |

#### [database] section

| Name      | Type   |
| --------- | ------ |
| mongourl  | string |
| sqlite    | string |
| mysql     | string |
| postgres  | string |
| redis     | string |
| memcached | string |

## Plugins

Plugins can be added using the standard ErectorPlugin class and the ErectorInterfacePlugin interface, the first one must be inherited and the other one implemented, then you use the standard use() method
