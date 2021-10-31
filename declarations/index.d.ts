import { SlashCommandBuilder } from '@discordjs/builders';
import {
    ApplicationCommandPermissionData,
    Client,
    CommandInteraction,
    Snowflake,
} from 'discord.js';
import { DefaultConfig } from '../src/ConfigurationLoader';
import ErectorPlugin from '../src/discorderector/Plugin';

export interface BotInterface {
    client: Client;
    config: DefaultConfig;
    /**
     * Do not call this method more than once
     */
    run(): void;
    usePlugin(plugin: ErectorPlugin);
}

export interface CommandInterface {
    command: SlashCommandBuilder;
    category?: string;
    permission: ApplicationCommandPermissionData[];
    execute: (interaction: CommandInteraction, bot: BotInterface) => void;
}
