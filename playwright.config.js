// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const Config= {
  testDir: './tests',
  reporter :"html",
  
  timeout:30000, //Global waiting time

  expect:{
    timeout:5000  //Waiting only for Assertions
  },
  use:{
    browserName :'chromium',
    // browserName :'webkit'
    // browserName :'webkit'

    headless:false
  }
};
export default defineConfig({
  reporter: [['html', { open: 'always' }]],
});
module.exports =Config