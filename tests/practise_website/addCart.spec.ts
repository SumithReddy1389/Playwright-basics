import { test, expect } from "@playwright/test";

test.describe("Add to cart", () => {
  test("Add product to cart", async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    await page.pause();

    await expect(page.getByRole("heading", { name: "Category" })).toBeVisible();
    await page.getByRole("link", { name: "Products" }).click();
    await expect(
      page.getByRole("heading", { name: "All Products" }),
    ).toBeVisible();

    let products = await page
      .locator(".features_items")
      .locator(".product-image-wrapper");

    for (let i = 0; i < 2; i++) {
      await products.nth(i).hover();
        await products.nth(i).locator('.product-overlay').getByText('Add to cart').click();

      await expect(page.getByText("Added!")).toBeVisible();

      await expect(
        page.getByText("Your product has been added to cart."),
      ).toBeVisible();

      await expect(
        page.getByRole("link", { name: "View Cart" }),
      ).toBeVisible();

      let continewShoppingButton = page.getByRole("button", {
        name: "Continue Shopping",
      });

      await expect(
        page.getByRole("button", { name: "Continue Shopping" }),
      ).toBeVisible();

      await continewShoppingButton.click();
    }

   await page.getByRole('link', { name: ' Cart' }).click();

    await expect(page.getByText("Shopping Cart")).toBeVisible();

    await expect(
      page.getByText('Proceed To Checkout')
    ).toBeVisible();

    let items = await page.locator(".cart_info").locator("tr");

    for (let j = 1; j < (await items.count()); j++) {
      let productName = await items
        .nth(j)
        .locator(".cart_description")
        .locator("h4")
        .textContent();
      console.log(productName);

      let quantity = await items
        .nth(j)
        .locator(".cart_quantity")
        .locator("button")
        .textContent();
      console.log(quantity);

      let price = await items.nth(j).locator(".cart_price").textContent()
      console.log(price?.trim());

      let total = await items.nth(j).locator(".cart_total").textContent();
      console.log(total?.trim());
    }
  });
});
