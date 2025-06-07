import { Locator, Page, TestInfo } from "@playwright/test";
import { basePage } from "./basePage";

export class LoginPage extends basePage{

    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButtonSelector: string;
    readonly loginButton: Locator;

    constructor(page: Page){
        super(page);
        this.page = page;

        this.userNameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButtonSelector = 'button[type="submit"]';
        this.loginButton = page.locator(this.loginButtonSelector);

    }

    async login(userName: string, password: string){

        console.log('Enter Username and Password.')
        await this.userNameInput.fill(userName);
        await this.passwordInput.fill(password);

        console.log('Clicking on login button.')
        await this.loginButton.click();
    }
}

