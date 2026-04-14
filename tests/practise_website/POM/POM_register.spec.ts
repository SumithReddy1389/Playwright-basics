import { test, expect } from "@playwright/test";
import { HomePage } from "../../../pages/homePage";
import { RegisterPage } from "../../../pages/registerPage";

let email: string = `sumith${Date.now()}@gmail.com`;
let password: string = "Pass@123";
let name = "sumith";
let url = "https://automationexercise.com/";

test.describe.serial("Register and Login", () => {
  test("Register user", async ({ page }) => {
    //object creation for home page
    let homePage = new HomePage(page);
    let registerPage = new RegisterPage(page);

    await page.goto(url);
    await homePage.signupLoginLink.click();

    await expect(homePage.signUpText).toBeVisible();
    await expect(homePage.loginText).toBeVisible();
    await expect(homePage.loginEmail).toBeVisible();
    await expect(homePage.loginPassword).toBeVisible();
    await expect(homePage.loginButton).toBeVisible();
    await expect(homePage.signupEmail).toBeVisible();
    await expect(homePage.name).toBeVisible();
    await expect(homePage.signupButton).toBeVisible();

    await homePage.registerUser(name, email);

    await expect(registerPage.enterAccountInformationText).toBeVisible();

    await registerPage.titleMr.check();
    await registerPage.password.fill(password);
    await registerPage.dobDay.selectOption("18");
    await registerPage.dobMonth.selectOption("11");
    await registerPage.dobYear.selectOption("2004");
    await registerPage.firstName.fill("sumith");
    await registerPage.lastName.fill("reddy");
    await registerPage.company.fill("aa");
    await registerPage.address.fill("1/12");
    await registerPage.state.fill("telangana");
    await registerPage.city.fill("hyderabad");
    await registerPage.zipcode.fill("502319");
    await registerPage.mobileNumber.fill("7531486538745");
    await registerPage.createAccountButton.click();

    await expect(registerPage.accountCreatedText).toBeVisible();
    await expect(registerPage.congratulationsText).toBeVisible();

    await registerPage.continueButton.click();
    await expect(homePage.loggedInAsText).toBeVisible();

    
  });

  test("Login user", async ({ page }) => {
    let homePage = new HomePage(page);

    await page.goto(url);
    await homePage.signupLoginLink.click();
    await homePage.loginEmail.fill(email);
    await homePage.loginPassword.fill(password);
    await homePage.loginButton.click();

    await expect(homePage.loggedInAsText).toBeVisible();

    await homePage.deleteAccountButton.click();
    await expect(homePage.accountDeletedText).toBeVisible();
  });
});

