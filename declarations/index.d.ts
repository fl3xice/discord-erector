import { SlashCommandBuilder } from '@discordjs/builders';
import { Client, CommandInteraction, Snowflake } from 'discord.js';
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

export interface CommandInterface {
    command: SlashCommandBuilder;
    category?: string;
    permission: Snowflake[];
    execute: (interaction: CommandInteraction, bot: BotInterface) => void;
}
