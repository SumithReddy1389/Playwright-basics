import { test, expect } from "@playwright/test";

let email: string = "sumith123@gamil.com";
let password: string = "Pass@123";

// test.describe.serial("Register and Login", () => {
//   test("Register user", async ({ page }) => {
//     await page.goto("https://automationexercise.com/");

//     await page.getByRole("link", { name: " Signup / Login" }).click();
//     await page.getByRole("heading", { name: "New User Signup!" }).click();

//     await page.getByRole("textbox", { name: "Name" }).fill("sumith");

//     await page
//       .locator("form")
//       .filter({ hasText: "Signup" })
//       .getByPlaceholder("Email Address")
//       .fill(email);

//     await page.getByRole("button", { name: "Signup" }).click();

//     await expect(page.getByText("Enter Account Information")).toBeVisible();

//     await page.getByRole("radio", { name: "Mr." }).check();

//     await page.getByRole("textbox", { name: "Password *" }).fill(password);

//     await page.locator("#days").selectOption("18");
//     await page.locator("#months").selectOption("11");
//     await page.locator("#years").selectOption("2004");

//     await page
//       .getByRole("checkbox", { name: "Sign up for our newsletter!" })
//       .check();
//     await page
//       .getByRole("checkbox", { name: "Receive special offers from" })
//       .check();

//     await page.getByRole("textbox", { name: "First name *" }).fill("sumith");
//     await page.getByRole("textbox", { name: "Last name *" }).fill("reddy");
//     await page
//       .getByRole("textbox", { name: "Company", exact: true })
//       .fill("aa");

//     await page
//       .getByRole("textbox", { name: "Address * (Street address, P." })
//       .fill("1/12");
//     await page.getByRole("textbox", { name: "State *" }).fill("telangana");
//     await page
//       .getByRole("textbox", { name: "City * Zipcode *" })
//       .fill("hyderabad");
//     await page.locator("#zipcode").fill("502319");

//     await page
//       .getByRole("textbox", { name: "Mobile Number *" })
//       .fill("7531486538745");

//     await page
//       .getByRole("button", { name: "Create Account" })
//       .click({ delay: 3000 });

//     await expect(page.getByText("Account Created!")).toBeVisible();

//     await page
//       .getByText(
//         "Account Created! Congratulations! Your new account has been successfully",
//       )
//       .click();

//     await page.getByRole("link", { name: "Continue" }).click();

//     await expect(page.getByText("Logged in as sumith")).toBeVisible();

//     //   await page.getByRole('link', { name: ' Delete Account' }).click();

//     //   await expect(page.getByText('Account Deleted!')).toBeVisible();

//     //   await page.getByRole('link', { name: 'Continue' }).click();
//   });

//   test("Login with valid email and password", async ({ page }) => {
//     await page.goto("https://automationexercise.com/");

//     await page.getByRole("link", { name: " Signup / Login" }).click();

//     await page.locator('[data-qa="login-email"]').fill(email);

//     await page.getByPlaceholder("Password").fill(password);

//     await page.getByRole("button", { name: "Login" }).click();

//     await expect(page.getByText("Logged in as sumith")).toBeVisible();

//     // await page.getByRole("link", { name: " Delete Account" }).click();

//     // await expect(page.getByText("Account Deleted!")).toBeVisible();

//     // await page.getByRole("link", { name: "Continue" }).click();
//   });

//   // test("Login with invalid email and password", async ({ page }) => {

//   // test("Log out", async ({ page }) => {
// });

test.describe("Product details", () => {
  test("View product details", async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await page.pause();

    await expect(page.getByRole("heading", { name: "Category" })).toBeVisible();
    await page.getByRole("link", { name: "Products" }).click();

    await expect(
      page.getByRole("heading", { name: "All Products" }),
    ).toBeVisible();

    await expect(page.locator(".features_items")).toBeVisible();

    let products = await page.locator(".features_items").locator(".product-image-wrapper");

    console.log("Total products: " + (await products.count()));

    for (let i = 0; i < (await products.count()); i++) {
      await page.getByText("View Product").nth(i).click();

      await expect(page.locator(".product-details")).toBeVisible();

      //locator chainging
      let productHeading = await page.locator(".product-details").locator("h2");
      await expect(productHeading).toBeVisible();

      console.log(await productHeading.textContent());

      let category = await page
        .locator(".product-details")
        .locator("p")
        .first();
      console.log(await category.textContent());

      let price = await page
        .locator(".product-details")
        .locator("span")
        .getByText("Rs.")
        .first();
      console.log(await price.textContent());

      await page.locator("#quantity").fill("2");

      await expect(
        page.getByRole("button", { name: "Add to cart" }),
      ).toBeVisible();

      // availablity
      const text = await page.locator("p:has-text('Availability')").innerText();
      console.log(text);
      // expect(text).toContain("In Stock");

      await expect(page.locator("p:has-text('Condition')")).toBeVisible();

      let brand = await page.locator("p:has-text('Brand')")
      await expect(brand).toBeVisible()
      console.log(await brand.textContent());

      await page.goBack();
    }
  });
});
