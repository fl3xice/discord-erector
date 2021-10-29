import { BotInterface } from '../../declarations';

export default abstract class ErectorPlugin {
    abstract use(bot: BotInterface): void;
}
