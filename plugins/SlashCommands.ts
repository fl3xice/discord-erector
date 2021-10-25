import ErectorPlugin, {
    ErectorInterfacePlugin,
} from '../src/discorderector/Plugin';
import fs from 'fs';

class SlashCommands extends ErectorPlugin implements ErectorInterfacePlugin {
    /**
     * slashCommandsFolder: folder with commands
     * @param args
     */
    use(args?: { [key: string]: any }) {
        if (args) {
            fs.readdirSync(args.slashCommandsFolder).forEach((path) => {
                console.log(path);
            });
        }
    }
}

export default SlashCommands;
