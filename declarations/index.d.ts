import { Client } from 'discord.js';
import { DefaultConfig } from '../src/ConfigurationLoader';

export interface BotInterface {
    client: Client;
    config: DefaultConfig;
    run(): void;
}
