import { test, expect } from "@playwright/test";

let email: string = "sumith123@gamil.com";
let password: string = "Pass@123";

test.describe.serial("Register and Login", () => {
  test("Register user", async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    await page.getByRole("link", { name: " Signup / Login" }).click();
    await page.getByRole("heading", { name: "New User Signup!" }).click();

    await page.getByRole("textbox", { name: "Name" }).fill("sumith");

    await page
      .locator("form")
      .filter({ hasText: "Signup" })
      .getByPlaceholder("Email Address")
      .fill(email);

    await page.getByRole("button", { name: "Signup" }).click();

    await expect(page.getByText("Enter Account Information")).toBeVisible();

    await page.getByRole("radio", { name: "Mr." }).check();

    await page.getByRole("textbox", { name: "Password *" }).fill(password);

    await page.locator("#days").selectOption("18");
    await page.locator("#months").selectOption("11");
    await page.locator("#years").selectOption("2004");

    await page
      .getByRole("checkbox", { name: "Sign up for our newsletter!" })
      .check();
    await page
      .getByRole("checkbox", { name: "Receive special offers from" })
      .check();

    await page.getByRole("textbox", { name: "First name *" }).fill("sumith");
    await page.getByRole("textbox", { name: "Last name *" }).fill("reddy");
    await page
      .getByRole("textbox", { name: "Company", exact: true })
      .fill("aa");

    await page
      .getByRole("textbox", { name: "Address * (Street address, P." })
      .fill("1/12");
    await page.getByRole("textbox", { name: "State *" }).fill("telangana");
    await page
      .getByRole("textbox", { name: "City * Zipcode *" })
      .fill("hyderabad");
    await page.locator("#zipcode").fill("502319");

    await page
      .getByRole("textbox", { name: "Mobile Number *" })
      .fill("7531486538745");

    await page
      .getByRole("button", { name: "Create Account" })
      .click({ delay: 3000 });

    await expect(page.getByText("Account Created!")).toBeVisible();

    await page
      .getByText(
        "Account Created! Congratulations! Your new account has been successfully",
      )
      .click();

    await page.getByRole("link", { name: "Continue" }).click();

    await expect(page.getByText("Logged in as sumith")).toBeVisible();

    //   await page.getByRole('link', { name: ' Delete Account' }).click();

    //   await expect(page.getByText('Account Deleted!')).toBeVisible();

    //   await page.getByRole('link', { name: 'Continue' }).click();
  });

  test("Login with valid email and password", async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    await page.getByRole("link", { name: " Signup / Login" }).click();

    await page.locator('[data-qa="login-email"]').fill(email);

    await page.getByPlaceholder("Password").fill(password);

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByText("Logged in as sumith")).toBeVisible();

    // await page.getByRole("link", { name: " Delete Account" }).click();

    // await expect(page.getByText("Account Deleted!")).toBeVisible();

    // await page.getByRole("link", { name: "Continue" }).click();
  });

  // test("Login with invalid email and password", async ({ page }) => {

  // test("Log out", async ({ page }) => {
});

