import { test, expect } from "@playwright/test";

test.describe("Search", () => {
  test("Search products", async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await expect(page.getByRole("heading", { name: "Category" })).toBeVisible();
    await page.getByRole("link", { name: "Products" }).click();

    await expect(
      page.getByRole("heading", { name: "All Products" }),
    ).toBeVisible();

    await page.locator("#search_product").fill("Tshirt");

    await page.locator("#submit_search").click();

    let products = await page.locator(".features_items").locator(".product-image-wrapper");

    console.log("Total products: " + (await products.count()));

    for (let i = 0; i < (await products.count()); i++) {
       await products.nth(i).locator(".single-products").locator("p").first().textContent().then((text) => {
        console.log(text);
        expect(text).toMatch(/T[- ]?shirt/i);

       });
    }
  });
});
