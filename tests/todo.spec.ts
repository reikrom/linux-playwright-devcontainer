import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/knockback/')
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('test 123');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('test 1');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('test 2');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('test 3');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('test 5');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await expect(page.locator('body')).toContainText('All Active Completed');
  await expect(page.getByText('test 123')).toBeVisible();
  await expect(page.getByText('test 1', { exact: true })).toBeVisible();
  await expect(page.getByText('test 2')).toBeVisible();
  await expect(page.getByText('test 3')).toBeVisible();
  await expect(page.getByText('test 5')).toBeVisible();
  await page.getByText('test 123').hover()
  await page.getByRole('button', { name: '×' }).click();
  await expect(page.getByText('test 1')).toBeVisible();
  await expect(page.getByText('test 2')).toBeVisible();
  await expect(page.getByText('test 3')).toBeVisible();
  await expect(page.getByText('test 5')).toBeVisible();
  await page.locator('div').filter({ hasText: 'test 1' }).getByRole('checkbox').check();
  await page.locator('div').filter({ hasText: 'test 2' }).getByRole('checkbox').check();
  await page.locator('div').filter({ hasText: 'test 3' }).getByRole('checkbox').check();
  await expect(page.locator('body')).toContainText('All Active Completed');
  await expect(page.locator('div').filter({ hasText: 'test 3' }).getByRole('checkbox')).toBeChecked();
  await expect(page.locator('div').filter({ hasText: 'test 2' }).getByRole('checkbox')).toBeChecked();
  await expect(page.locator('div').filter({ hasText: 'test 1' }).getByRole('checkbox')).toBeChecked();
  await page.getByText('Mark all as complete').click();
  await page.getByRole('button', { name: 'Clear completed' }).click();
});