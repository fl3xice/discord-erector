import { BotInterface } from '../declarations';
import ErectorPlugin from '../src/discorderector/Plugin';

class DefaultPlugin extends ErectorPlugin {
    use(bot: BotInterface): void {
        bot.client.on('ready', () => {
            console.info('Bot Ready');
        });
    }
}

export default DefaultPlugin;
