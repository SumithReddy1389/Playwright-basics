import { Locator, Page } from "@playwright/test";


export class CartPage {
  page: Page
  shoppingCartText: Locator;
  proccedToCheckoutButton: Locator;
  cartTable: Locator;
  nameOfProduct: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartText = page.getByText("Shopping Cart");
    this.proccedToCheckoutButton = page.getByText("Proceed To Checkout");
    this.cartTable = page.locator("#cart_info_table");
    this.nameOfProduct = this.cartTable.locator(".cart_description").locator("h4")
  }
}