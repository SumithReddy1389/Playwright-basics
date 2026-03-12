import { test, expect } from "@playwright/test";



test('Validating DemoQA Alerts Page', async ({ page }) => {
    await page.goto('https://demoqa.com/');

    await page.locator('[href="/alertsWindows"]').click();
    
    await page.locator('[href="/alerts"]' ).click();

    page.on('dialog', async popup => {
        console.log(popup.message());
        console.log(popup.type());
        await popup.accept();
    });
    await page.locator('#alertButton').click();

});

test('Validating DemoQA timer Alerts Page', async ({ page }) => {
    await page.goto('https://demoqa.com/');

    await page.locator('[href="/alertsWindows"]').click();

    await page.locator('[href="/alerts"]' ).click();

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        console.log(dialog.type());
        await dialog.accept();
    });
    await page.locator('#timerAlertButton').click();
    await page.waitForTimeout(5000);

    
});

test('Validating DemoQA confirm  Alerts Page', async ({ page }) => {
    await page.goto('https://demoqa.com/');

    await page.locator('[href="/alertsWindows"]').click();

    await page.locator('[href="/alerts"]' ).click();

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        console.log(dialog.type());
        await dialog.dismiss();
    });
    await page.locator('#confirmButton').click();


    let text = await page.locator('#confirmResult').textContent()
    console.log(text);
    expect(text).toContain('You selected Ok');
    
});

test('Validating DemoQA prompt  Alerts Page', async ({ page }) => {
    await page.goto('https://demoqa.com/');

    await page.locator('[href="/alertsWindows"]').click();

    await page.locator('[href="/alerts"]' ).click();

    let name = "Sumith";
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        console.log(dialog.type());
        await dialog.accept(name);
    });
    await page.locator('#promtButton').click();


    let text = await page.locator('#promptResult').textContent()
    console.log(text);
    expect(text).toContain('You entered ' + name);
    
});