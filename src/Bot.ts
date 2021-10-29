/**
 * This is where your bot is located
 */

import { Client } from 'discord.js';
import { BotInterface } from '../declarations';
import DefaultPlugin from '../plugins/DefaultPlugin';
import SlashCommands from '../plugins/SlashCommands';
import { ConfigurationLoader } from './ConfigurationLoader';

const Bot: BotInterface = {
    client: new Client({ intents: [] }),
    config: ConfigurationLoader.getConfig(),
    run() {
        Bot.client.login(Bot.config.token).catch((e) => {
            console.error(e);
            process.exit(1);
        });
    },
    usePlugin(plugin) {
        plugin.use(Bot);
    },
};

Bot.usePlugin(new DefaultPlugin());
Bot.usePlugin(
    new SlashCommands({
        slashCommandsFolder: '../commands',
    })
);

// Here locate your code

// Bot.run();
