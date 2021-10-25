import ErectorPlugin, {
    ErectorInterfacePlugin,
} from '../src/discorderector/Plugin';

class SlashCommands extends ErectorPlugin implements ErectorInterfacePlugin {
    use(args?: { [key: string]: any }) {
        console.log(args);
    }
}

export default SlashCommands;
