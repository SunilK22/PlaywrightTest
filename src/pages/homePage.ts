import { Locator, Page } from "@playwright/test";
import { basePage } from "./basePage";

export class HomePage extends basePage {

    readonly adminTabSelector: string;
    readonly adminTab: Locator;
    readonly logoutOptionButton: Locator;

    readonly logoutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;

        this.adminTabSelector = 'span:text("Admin")';
        this.adminTab = page.locator(this.adminTabSelector);
        this.logoutOptionButton = page.locator('.oxd-userdropdown-icon');
        this.logoutButton = page.getByText('Logout');

    }

    async logout() {
        console.log('Clicking on logout button.')
        await this.logoutOptionButton.click()
        await this.logoutButton.click();
    }
}