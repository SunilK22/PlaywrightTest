import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import data from '../data/demoTestData.json'

test('Demo_Test02', async ({ page }, testInfo) => {

  const loginPage = new LoginPage(page);

  try {

    //Open the URL
    await loginPage.navigateTo(data[0].url);

    //Assert for login page
    await loginPage.waitForElementToVisible(loginPage.loginButtonSelector);
    await loginPage.assertForTitleOfPage(data[0].title);

    //Enter login credentials
    await loginPage.login(data[0].userName, data[0].password);

    //Wait until the Admin tab is visible
    const homePage = new HomePage(page);
    await loginPage.waitForElementToVisible(homePage.adminTabSelector);

    //Logout
    await homePage.logout();

    //Assert navigate back to login page
    await loginPage.waitForElementToVisible(loginPage.loginButtonSelector);
    await loginPage.assertForTitleOfPage(data[0].title);

  } catch (error) {

    //Catch error and capture screenshot
    await loginPage.captureScreenshot(testInfo, error);

  } finally {

    // Close browser
    await page.close();
  };

});