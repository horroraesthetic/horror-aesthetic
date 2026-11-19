import { test, expect } from '@playwright/test';

test('homepage loads with a document title and main heading', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Horror Aesthetic/i);
  await expect(page.locator('h1').first()).toBeVisible();
});

test('document declares a language and mobile viewport', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', /.+/);
  await expect(page.locator('meta[name="viewport"]')).toHaveCount(1);
});

test('primary navigation contains working local destinations', async ({ page }) => {
  await page.goto('/');
  const links = page.locator('nav a[href]');
  await expect(links.first()).toBeVisible();
  expect(await links.count()).toBeGreaterThan(0);
  const hrefs = await links.evaluateAll(nodes => nodes.map(node => node.getAttribute('href')));
  expect(hrefs.every(href => href && href.trim().length > 0)).toBeTruthy();
});
