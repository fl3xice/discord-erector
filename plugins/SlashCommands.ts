import { Snowflake } from 'discord.js';
import fs from 'fs';
import { join } from 'path';
import { BotInterface, CommandInterface } from '../declarations';
import ErectorPlugin from '../src/discorderector/Plugin';
import { REST } from '@discordjs/rest';
const { Routes } = require('discord-api-types/v9');
const { resolve } = require('path');

class SlashCommands extends ErectorPlugin {
    private slashCommandsDir: string;
    private clientId?: Snowflake = undefined;
    private guildId?: Snowflake = undefined;

    constructor(options: {
        slashCommandsDir: string;
        clientId?: Snowflake;
        guildId?: Snowflake;
    }) {
        super();
        this.slashCommandsDir = join(__dirname, options.slashCommandsDir);
        this.clientId = options.clientId;
        this.guildId = options.guildId;
    }

    use(bot: BotInterface) {
        const rest = new REST({ version: '9' }).setToken(bot.config.token);

        if (!this.clientId) {
            this.clientId = bot.config.clientId;
        }

        if (!this.clientId) throw Error('Need a ClientID');

        (async () => {
            const paths = await this.getFiles(this.slashCommandsDir);

            const commands: any[] = [];

            for (const path of paths) {
                const command: CommandInterface = require(path).default;
                commands.push(command.command.toJSON());
            }

            try {
                console.log('Started refreshing application (/) commands.');

                await rest.put(
                    this.guildId
                        ? Routes.applicationGuildCommands(
                              this.clientId,
                              this.guildId
                          )
                        : Routes.applicationCommands(this.clientId),

                    { body: commands }
                );

                console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
                console.error(error);
            }
        })();
    }

    private async getFiles(dir: string): Promise<any> {
        const dirents = fs.readdirSync(dir, { withFileTypes: true });
        const files: string[] = await Promise.all(
            dirents.map((dirent) => {
                const res = resolve(dir, dirent.name);
                return dirent.isDirectory() ? this.getFiles(res) : res;
            })
        );
        return Array.prototype.concat(...files);
    }
}

export default SlashCommands;
