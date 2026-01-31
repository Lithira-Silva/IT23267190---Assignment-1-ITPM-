import { test, expect } from '@playwright/test';

test.describe('Negative Test Cases', () => {
  
  test('Neg_Fun_0001 - Informal/incorrect Sinhala text with spaces', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const inputText = 'mam aa yanava';
    await page.fill('textarea', inputText);
    await page.click('button:has-text("Translate")');
    // Verify inappropriate handling or error
  });

  test('Neg_Fun_0002 - All caps Sinhala text', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const inputText = 'MAMA GEDHARA YANAVA';
    await page.fill('textarea', inputText);
    await page.click('button:has-text("Translate")');
    // Verify handling of all caps text
  });

  test('Neg_Fun_0003 - Mixed numbers and text', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const inputText = 'g3dara yann4';
    await page.fill('textarea', inputText);
    await page.click('button:has-text("Translate")');
    // Verify handling of alphanumeric mix
  });

  test('Neg_Fun_0004 - URL input', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const inputText = 'https://www.google.com/';
    await page.fill('textarea', inputText);
    await page.click('button:has-text("Translate")');
    // Verify handling of URL
  });

  test('Neg_Fun_0005 - Special characters only', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const inputText = '#$%^&@';
    await page.fill('textarea', inputText);
    await page.click('button:has-text("Translate")');
    // Verify handling of special characters
  });

  test('Neg_Fun_0006 - XSS injection attempt', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const inputText = "mama site eka hack karanava <script>alert('Your system is hacked')</script>";
    await page.fill('textarea', inputText);
    await page.click('button:has-text("Translate")');
    // Verify XSS protection
  });

  test('Neg_Fun_0007 - Very short text', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const inputText = 'bank eka';
    await page.fill('textarea', inputText);
    await page.click('button:has-text("Translate")');
    // Verify handling of short text
  });

  test('Neg_Fun_0008 - Comparison format with vs', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const inputText = 'gama vs gaama';
    await page.fill('textarea', inputText);
    await page.click('button:has-text("Translate")');
    // Verify handling of comparison format
  });

  test('Neg_Fun_0009 - Extremely long text without spaces', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const inputText = 'mamagedharayanavamamagedharayanavamamagedharayanavamamagedharayanavamamagedharayanavamamagedharayanavamamagedharayanavamamagedharayanavamamagedharayanavamamagedharayanavamamagedharayanavamamagedharayanavamamagedharayanavamamagedharayanavamamagedharayanavamamagedharayanavamamagedharayanavamamagedharayanava';
    await page.fill('textarea', inputText);
    await page.click('button:has-text("Translate")');
    // Verify handling of extremely long text
  });

  test('Neg_Fun_0010 - Email address input', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const inputText = 'llithira@gmail.com';
    await page.fill('textarea', inputText);
    await page.click('button:has-text("Translate")');
    // Verify handling of email address
  });

});
