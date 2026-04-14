// variables, methods, and other code elements that are used across multiple test files. This promotes code reusability and maintainability.
import { Page, Locator } from "@playwright/test";

export class HomePage {
  page: Page;
  signupLoginLink: Locator;
  loginText: Locator;
  loginEmail: Locator;
  loginPassword: Locator;
  loginButton: Locator;
  signUpText: Locator;
  name: Locator;
  signupEmail: Locator;
  signupButton: Locator;
  loggedInAsText: Locator;
  deleteAccountButton: Locator;
  accountDeletedText: Locator
  recommendedItemsText: Locator;
  recommendedFirstItem: Locator;
  addedToCartText: Locator;
  viewCartButton: Locator;
  continueShoppingButton: Locator;
  productAddedToCartText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupLoginLink = page.getByRole("link", { name: " Signup / Login" });
    this.loginText = page.getByText("Login to your account");
    this.loginEmail = page.locator('[data-qa="login-email"]');
    this.loginPassword = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.signUpText = page.getByText("New User Signup!");
    this.name = page.locator('[data-qa="signup-name"]');
    this.signupEmail = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.getByRole("button", { name: "Signup" });
    this.loggedInAsText = page.getByText("Logged in as");
    this.deleteAccountButton = page.getByRole("link", { name: " Delete Account" });
    this.accountDeletedText = page.getByText("Account Deleted!");
    this.recommendedItemsText = page.locator(".recommended_items");
    this.recommendedFirstItem = page.locator("#recommended-item-carousel")
    this.addedToCartText = page.getByText("Added!");
    this.viewCartButton = page.getByRole("link", { name: "View Cart" });
    this.continueShoppingButton = page.getByRole("button", { name: "Continue Shopping" });
    this.productAddedToCartText = page.getByText("Your product has been added to cart.");

  }


  async registerUser(name: string, email: string){
    await this.name.fill(name);
    await this.signupEmail.fill(email);
    await this.signupButton.click();
  }
  
}
