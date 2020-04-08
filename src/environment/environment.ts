import { Config, config } from './config';

export const Environment = {
  getEnvironment() {
    return process.env.NODE_ENV || 'dev';
  },
  getConfig(): Config {
    return config[this.getEnvironment()];
  }
};
