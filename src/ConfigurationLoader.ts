import fs from 'fs';
import toml from 'toml';

export const CONFIG_FILE_NAME = 'config';

export interface DefaultConfig {
    token: string;
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
                    `${__dirname}/../${CONFIG_FILE_NAME}.toml`,
                    'utf-8'
                )
            );
            console.info(parsed);
        } catch (e) {
            console.error(e);
            process.exit(1);
        }
        return parsed;
    }
}
