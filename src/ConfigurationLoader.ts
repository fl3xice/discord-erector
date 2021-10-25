import fs from 'fs';
import { join } from 'path';
import toml from 'toml';

export const CONFIG_FILE_NAME = 'config.toml';

export interface DefaultConfig {
    readonly token: string;
    database: {
        mongourl?: string;
        sqlite?: string;
        mysql?: string;
        postgres?: string;
        redis?: string;
        memcached?: string;
    };
}

export class ConfigurationLoader {
    public static getConfig(): DefaultConfig {
        // This variable will store the future result of parsing a configuration file
        let parsed: DefaultConfig;

        try {
            parsed = toml.parse(
                fs.readFileSync(
                    join(__dirname, '..', CONFIG_FILE_NAME),
                    'utf-8'
                )
            );
        } catch (e) {
            console.error(e);
            process.exit(1);
        }
        return parsed;
    }
}
