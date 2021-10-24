/**
 * This is where your bot is located
 */

import { Client } from 'discord.js';
import { BotInterface } from '../declarations';
import DefaultPlugin from '../plugins/DefaultPlugin';
import { ConfigurationLoader } from './ConfigurationLoader';
import PluginLoader from './discorderector/PluginLoader';

const Bot: BotInterface = {
    client: new Client({ intents: [] }),
    config: ConfigurationLoader.getConfig(),
    run() {
        Bot.client.login(Bot.config.token).catch((e) => {
            console.error(e);
            process.exit(1);
        });
    },
};

// Plugin loader for your bot
Bot.plugins = PluginLoader.loadPlugins([DefaultPlugin], Bot);

Bot.plugins['DefaultPlugin'].use();

// Here locate your code

Bot.run();
