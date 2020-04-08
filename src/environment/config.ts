const baseConfig: Config = {
  port: parseInt(process.env.PORT, 10) || 4000,
  serviceName: process.env.SERVICE_NAME || 'User Service'
};

export const config: EnvironmentConfig = {
  dev: {
    ...baseConfig
  },
  prod: {
    ...baseConfig
  }
};

export interface EnvironmentConfig {
  dev: Config;
  prod: Config;
}

export interface Config {
  port: number;
  serviceName: string;
}
