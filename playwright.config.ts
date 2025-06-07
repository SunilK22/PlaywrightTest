import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    expect: {
        timeout: 10000
    },

    // Retry
    retries: 0,

    workers: 1,
    use: {

        screenshot: 'only-on-failure',

        actionTimeout: 10000,
        // navigationTimeout: 30000,
    },

    reporter: [['list'],
    ['html', { outputFolder: './reports/htmlreport', open: 'never' }]],
    snapshotDir: 'reports/screenshots/',
    timeout: 120000

};
export default config;