import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";

let email: string = "sumith123@gamil.com";
let password: string = "Pass@123";

test.describe.serial("Register and Login", () => {

  test("Register user", async ({ page }) => {
    //object creation for home page
    let homePage = new HomePage(page);

    await page.goto("https://automationexercise.com/");
    await homePage.signupLoginLink.click();



  });
});