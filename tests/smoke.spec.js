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

test('homepage starts without uncaught JavaScript errors', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.goto('/', { waitUntil: 'load' });
  await expect(page.locator('.mast .hero')).toBeVisible();
  expect(pageErrors, pageErrors.join('\\n')).toEqual([]);
});

test('mobile homepage does not introduce horizontal page overflow', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile viewport check only');
  await page.goto('/');
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }));
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport + 4);
});
