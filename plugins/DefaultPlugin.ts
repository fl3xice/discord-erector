import ErectorPlugin, {
    ErectorInterfacePlugin,
} from '../src/discorderector/Plugin';

class DefaultPlugin extends ErectorPlugin implements ErectorInterfacePlugin {
    use() {
        this.Bot.client.on('ready', () => {
            console.info('Bot Ready');
        });
    }
}
export default DefaultPlugin;
