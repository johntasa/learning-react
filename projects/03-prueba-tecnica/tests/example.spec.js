// @ts-check
import { test, expect } from '@playwright/test'

const LOCAL_HOST_URL = 'http://localhost:5173'

test('app shows random fact', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)

  const text = await page.getByRole('heading').textContent()
  console.log(text)

  await expect(text).toContain('App de gatitos')
})
