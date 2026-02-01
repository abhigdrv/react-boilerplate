import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display the welcome message', async ({ page }) => {
    await page.goto('/');
    
    // Check for the welcome heading
    const heading = page.getByRole('heading', { name: /welcome to react boilerplate/i });
    await expect(heading).toBeVisible();
  });

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/');
    
    // Click the About link
    await page.getByRole('link', { name: /about/i }).click();
    
    // Check if we're on the about page
    await expect(page).toHaveURL('/about');
    const aboutHeading = page.getByRole('heading', { name: /about this boilerplate/i });
    await expect(aboutHeading).toBeVisible();
  });

  test('should toggle theme', async ({ page }) => {
    await page.goto('/');
    
    // Get initial theme
    const html = page.locator('html');
    const initialClass = await html.getAttribute('class');
    
    // Click theme toggle button
    await page.getByRole('button', { name: /toggle theme/i }).click();
    
    // Check if theme changed
    const newClass = await html.getAttribute('class');
    expect(newClass).not.toBe(initialClass);
  });
});
