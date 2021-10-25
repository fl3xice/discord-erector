import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInterface } from '../declarations';

const ping: CommandInterface = {
    command: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Test Bot'),
    permission: [],
    execute(i, bot) {},
};

export default ping;
