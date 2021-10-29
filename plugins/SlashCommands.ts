import fs from 'fs';
import { join } from 'path';
import { BotInterface, CommandInterface } from '../declarations';
import ErectorPlugin from '../src/discorderector/Plugin';
const { resolve } = require('path');

class SlashCommands extends ErectorPlugin {
    constructor(options: { slashCommandsFolder: string }) {
        super();
        this.getFiles(join(__dirname, options.slashCommandsFolder)).then(
            (files) => {
                files.forEach((file) => {
                    const command: CommandInterface = require(file).default;
                    console.log(command);
                });
            }
        );
    }

    use(bot: BotInterface) {}

    private async getFiles(dir: string) {
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
