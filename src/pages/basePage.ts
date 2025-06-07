import { expect, Page, TestInfo } from "@playwright/test";
import { helper } from "../utils/helper";


function greet(name) {
    console.log("Hello, my name is " + name);
}

export class basePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    async navigateTo(url: string) {

        console.log('Navigate to : ' + url);
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }

    async assertForTitleOfPage(title: string) {

        console.log('Assert for the title: ' + title);
        const pageTitle = await this.page.title();
        expect(pageTitle).toBe(title);
    }

    async waitForElementToVisible(selector: string) {

        let result = await this.page.waitForSelector(selector, { state: 'visible' });
        return result;
    }

    async captureScreenshot(testInfo: TestInfo, error: any) {

        const testName = testInfo.title.split(' ').join('_');
        const timestamp = helper.getCurrentTimestamp();

        await this.page.screenshot({ path: testInfo.snapshotDir + testName + timestamp + '.png', timeout: 3000 });
        console.error('Error caught:', error);
    }
}