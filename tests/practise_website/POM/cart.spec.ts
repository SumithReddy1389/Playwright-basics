import test, { expect } from "@playwright/test";
import { HomePage } from "../../../pages/homePage";
import { CartPage } from "../../../pages/cartPage";

test("Add products to cart", async ({ page }) => {
    let homePage = new HomePage(page);
    let cartPage = new CartPage(page);
  
    await page.goto("https://automationexercise.com/");

    await homePage.recommendedItemsText.scrollIntoViewIfNeeded();

      let nameInHomepage = await homePage.recommendedFirstItem.locator('.item.active > div > .product-image-wrapper > .single-products > .productinfo > p').first().textContent();

    console.log(nameInHomepage);

    await homePage.recommendedFirstItem.locator('.item.active > div > .product-image-wrapper > .single-products > .productinfo > .btn').first().click();


    await expect(homePage.addedToCartText).toBeVisible();
    await expect(homePage.productAddedToCartText).toBeVisible();
    await expect(homePage.viewCartButton).toBeVisible();
    await expect(homePage.continueShoppingButton).toBeVisible();

    await homePage.viewCartButton.click();

    await expect(cartPage.shoppingCartText).toBeVisible();
    await expect(cartPage.cartTable).toBeVisible();
    await expect(cartPage.proccedToCheckoutButton).toBeVisible();
    let nameInCart = await cartPage.nameOfProduct.textContent();
    console.log(nameInCart);    
    expect(nameInHomepage).toBe(nameInCart);
});