import { BotInterface } from '../../declarations';

export interface ErectorInterfacePlugin {
    use?: (args?: { [key: string]: any }) => void;
}

class ErectorPlugin implements ErectorInterfacePlugin {
    protected readonly Bot: BotInterface;

    constructor(Bot: BotInterface) {
        this.Bot = Bot;
    }

    use(args?: { [key: string]: any }) {
        throw new Error('Method not implemented.');
    }
}

export default ErectorPlugin;
