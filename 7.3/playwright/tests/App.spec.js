const { test, expect } = require("@playwright/test");
import { email, password } from "./user";

test("Success login", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.screenshot({ path: "screenshot1.png", fullPage: true });
  await page.click('[placeholder="Email"]');
  await page.fill(`[placeholder="Email"]`, email);
  await page.screenshot({ path: "screenshot2.png", fullPage: true });
  await page.click('[placeholder="Пароль"]');
  await page.fill('[placeholder="Пароль"]', password);
  await page.screenshot({ path: "screenshot3.png", fullPage: true });
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page).toHaveURL("https://netology.ru/profile");
  await page.screenshot({ path: "screenshot4.png", fullPage: true });
});

test("Wrong login", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.screenshot({ path: "screenshot5.png", fullPage: true });
  await page.click('[placeholder="Email"]');
  await page.fill(`[placeholder="Email"]`, "email");
  await page.screenshot({ path: "screenshot6.png", fullPage: true });
  await page.click('[data-testid="login-submit-btn"]');
  await page.click('[placeholder="Пароль"]');
  await page.fill('[placeholder="Пароль"]', "password");
  await page.screenshot({ path: "screenshot7.png", fullPage: true });
  await page.click('[data-testid="login-submit-btn"]');
  await page.screenshot({ path: "screenshot8.png", fullPage: true });
  expect(`[span = "Неверный email"]`);
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  await page.screenshot({ path: "screenshot9.png", fullPage: true });
});
