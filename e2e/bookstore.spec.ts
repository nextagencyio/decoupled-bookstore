import { test, expect } from '@playwright/test'

test.describe('Bookstore - Non-Demo Mode', () => {
  test('homepage loads with real content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Discover Your Next Great Read/)
    await expect(page.getByText('Discover Your Next Great Read', { exact: true })).toBeVisible()
    await expect(page.getByText('Independent Bookstore Since 1987', { exact: true })).toBeVisible()
  })

  test('books listing page shows books', async ({ page }) => {
    await page.goto('/books')
    await expect(page.locator('h1')).toContainText('Books')
    await expect(page.getByText('The Midnight Library', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('Project Hail Mary', { exact: true }).first()).toBeVisible()
  })

  test('book detail page loads', async ({ page }) => {
    await page.goto('/books/the-midnight-library')
    await expect(page.locator('h1')).toContainText('The Midnight Library')
  })

  test('events listing page shows events', async ({ page }) => {
    await page.goto('/events')
    await expect(page.locator('h1')).toContainText('Events')
    await expect(page.getByText('Summer Author Reading Series', { exact: true }).first()).toBeVisible()
  })

  test('event detail page loads', async ({ page }) => {
    await page.goto('/events/summer-author-reading-series')
    await expect(page.locator('h1')).toContainText('Summer Author Reading Series')
  })

  test('staff picks listing page shows picks', async ({ page }) => {
    await page.goto('/staff-picks')
    await expect(page.locator('h1')).toContainText('Staff Picks')
    await expect(page.getByText('Elena', { exact: false }).first()).toBeVisible()
  })

  test('staff pick detail page loads', async ({ page }) => {
    await page.goto('/staff-picks/elenas-pick-the-midnight-library')
    await expect(page.locator('h1')).toContainText('The Midnight Library')
  })

  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About Turning Pages')
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('h1')).toContainText('Visit Us')
  })
})
