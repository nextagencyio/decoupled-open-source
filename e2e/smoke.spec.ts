import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with CMS content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Build the Future Together')
  })

  test('displays features section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Plugin System').first()).toBeVisible()
  })

  test('displays contributors section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Sarah Chen')).toBeVisible()
  })

  test('displays releases section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Catalyst').first()).toBeVisible()
  })
})

test.describe('Features listing', () => {
  test('renders feature cards', async ({ page }) => {
    await page.goto('/features')
    await expect(page.locator('h1')).toContainText('Features')
    await expect(page.getByText('Plugin System', { exact: true })).toBeVisible()
    await expect(page.getByText('CLI Developer Tools', { exact: true })).toBeVisible()
  })
})

test.describe('Feature detail', () => {
  test('renders feature content via catch-all route', async ({ page }) => {
    await page.goto('/features/plugin-system')
    await expect(page.locator('h1')).toContainText('Plugin System')
    await expect(page.getByText('plugin system allows you')).toBeVisible()
  })
})

test.describe('Contributors listing', () => {
  test('renders contributor cards', async ({ page }) => {
    await page.goto('/contributors')
    await expect(page.locator('h1')).toContainText('Contributors')
    await expect(page.getByText('Sarah Chen')).toBeVisible()
    await expect(page.getByText('Marcus Johnson')).toBeVisible()
  })
})

test.describe('Contributor detail', () => {
  test('renders contributor content', async ({ page }) => {
    await page.goto('/contributors/sarah-chen')
    await expect(page.locator('h1')).toContainText('Sarah Chen')
    await expect(page.getByText('Lead Maintainer', { exact: true })).toBeVisible()
  })
})

test.describe('Releases listing', () => {
  test('renders release cards', async ({ page }) => {
    await page.goto('/releases')
    await expect(page.locator('h1')).toContainText('Releases')
    await expect(page.getByText('OpenForge v3.0.0 - Catalyst', { exact: true })).toBeVisible()
  })
})

test.describe('Release detail', () => {
  test('renders release content with version', async ({ page }) => {
    await page.goto('/releases/v3-0-0')
    await expect(page.locator('h1')).toContainText('Catalyst')
    await expect(page.getByText('3.0.0', { exact: true })).toBeVisible()
  })
})

test.describe('Static pages', () => {
  test('about page renders', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About OpenForge')
  })
})
