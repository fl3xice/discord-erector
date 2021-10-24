import { BotInterface } from '../../declarations';
import ErectorPlugin from './Plugin';

class PluginLoader {
    static loadPlugins(
        plugins: typeof ErectorPlugin[],
        Bot: BotInterface
    ): {
        [key: string]: ErectorPlugin;
    } {
        let parsedPlugins: { [key: string]: ErectorPlugin } = {};

        for (let i = 0; i < plugins.length; i++) {
            const plugin = new plugins[i](Bot);
            parsedPlugins[plugin.constructor.name] = plugin;
        }

        return parsedPlugins;
    }
}

export default PluginLoader;
