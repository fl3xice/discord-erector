/**
 * This is where your bot is located
 */

import { Client } from 'discord.js';
import { BotInterface } from '../declarations';
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
};

// Here locate your code

Bot.client.on('ready', () => {
    console.info("I'm ready");
});

Bot.run();
