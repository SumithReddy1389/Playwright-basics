import { test, expect } from "@playwright/test";

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