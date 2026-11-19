import { test, expect } from '@playwright/test';

test('homepage renders its masthead and document title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Horror Aesthetic/i);
  // The h1 is intentionally visually hidden for assistive technology.
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('.mast')).toBeVisible();
  await expect(page.locator('.mast .hero')).toBeVisible();
});

test('document declares a language and mobile viewport', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', /.+/);
  await expect(page.locator('meta[name="viewport"]')).toHaveCount(1);
});

test('section navigation and language controls are present', async ({ page }) => {
  await page.goto('/');
  const navigation = page.locator('nav[aria-label="Sections"]');
  await expect(navigation).toBeVisible();
  await expect(navigation.locator('#filters')).toHaveCount(1);
  const languageButtons = navigation.locator('button[data-l]');
  await expect(languageButtons).toHaveCount(2);
  await expect(languageButtons.first()).toBeVisible();
  await expect(languageButtons.last()).toBeVisible();
});
