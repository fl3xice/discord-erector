import { Client } from 'discord.js';
import { DefaultConfig } from '../src/ConfigurationLoader';
import ErectorPlugin from '../src/discorderector/Plugin';

export interface BotInterface {
    client: Client;
    config: DefaultConfig;
    plugins?: { [key: string]: ErectorPlugin };
    /**
     * Do not call this method more than once
     */
    run(): void;
}
