/**
 * This is where your bot is located
 */

import { Client } from 'discord.js';
import { join } from 'path';
import { BotInterface } from '../declarations';
import DefaultPlugin from '../plugins/DefaultPlugin';
import SlashCommands from '../plugins/SlashCommands';
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
Bot.plugins = PluginLoader.loadPlugins([DefaultPlugin, SlashCommands], Bot);

Bot.plugins['DefaultPlugin'].use();
Bot.plugins['SlashCommands'].use({
    slashCommandsFolder: join(__dirname, '..', 'commands'),
});

// Here locate your code

Bot.run();
