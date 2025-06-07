import { test, expect } from '@playwright/test';


test('Demo_Test02', async ({ page }, testInfo) => {

  try {
    // Open the application URL
    await console.log('Navigate to : https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'domcontentloaded' });

    //Assert for login page
    let loginButton = 'button[type="submit"]';
    await page.waitForSelector(loginButton, { state: 'visible' });
    expect(await page.title()).toBe('OrangeHRM');

    // Enter login credentials
    console.log('Enter Username and Password.')
    await page.fill('input[name="username"]', 'admin');
    await page.fill('input[name="password"]', 'admin123');

    // Click the login button
    console.log('Clicking on login button.')
    await page.click(loginButton);

    // Wait until the Admin tab is visible
    await page.waitForSelector('span:text("Admin")', { state: 'visible' });

    //Logout
    console.log('Clicking on logout button.')
    await page.locator('.oxd-userdropdown-icon').click()
    await page.getByText('Logout').click();

    //Assert navigate back to login page
    await page.waitForSelector(loginButton, { state: 'visible' });
    expect(await page.title()).toBe('OrangeHRM');


  } catch (error) {
    const testName = testInfo.title.split(' ').join('_');
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    await page.screenshot({ path: testInfo.snapshotDir + testName + timestamp + '.png', timeout: 3000 });
    console.error('Error caught:', error);

  } finally {

    // Close browser
    await page.close();
  };

});