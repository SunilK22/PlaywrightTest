import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
  
  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });




// import { test, expect } from '@playwright/test';


// test('has title', async ({ page }) => {

//   // Open the application URL
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   // await page.waitForTimeout(2000); // Sleep for 2 seconds

//   // Maximize the browser window (Playwright doesn't support maximize directly, set viewport size)
//   // await page.setViewportSize({ width: 1920, height: 1080 });

//   // Implicit wait is not supported, use explicit waits instead
//   // Enter login credentials
//   await page.fill('input[name="username"]', 'admin'); // Replace with actual locator
//   await page.fill('input[name="password"]', 'admin123');

//   // Click the login button
//   await page.click('//button[@type="submit"]');
//   await page.waitForTimeout(2000); // Sleep for 2 seconds

//   // Wait until the Performance option is clickable and click it
//   const performanceOptionSelector = '//span[text()="Performance"]';
//   await page.waitForSelector(performanceOptionSelector, { state: 'visible' });
//   await page.click(performanceOptionSelector);

//   // Interact with dropdown
//   const dropdownSelector = '(//div[contains(text(),"Select")])[1]';
//   await page.waitForSelector(dropdownSelector, { state: 'visible' });
//   await page.click(dropdownSelector);

//   // Locate dropdown options and select the target job title
//   const optionsSelector = '//div[@role="listbox"]/div[@role="option"]';
//   const options = await page.$$(optionsSelector);

//   const targetJobTitle = 'Software Engineer';
//   let found = false;

//   for (let i = 0; i < options.length; i++) {
//     const optionText = await options[i].innerText();
//     console.log(`Option ${i}: ${optionText}`);

//     if (optionText.trim() === targetJobTitle) {
//       console.log(`Job title '${targetJobTitle}' found at position: ${i}`);
//       await options[i].click();
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     console.log(`Job title '${targetJobTitle}' not found.`);
//   }

//   // Close browser
//   await page.close();
// });




