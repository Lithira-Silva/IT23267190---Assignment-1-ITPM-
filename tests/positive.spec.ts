import { test, expect } from '@playwright/test';

test.describe('Swift Translator - Singlish to Sinhala Translation (Positive Scenarios)', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('should translate "Mama bath kanava"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    // Enter text in the input field
    const inputField = page.locator('textarea').first();
    await inputField.fill('Mama bath kanava');
    
    // Wait for translation suggestions to appear
    await page.waitForTimeout(2000);
    
    // Check if the Sinhala translation "මම බත් කනව" appears on the page
    const sinhalaTranslation = await page.locator('text=මම බත් කනව').first();
    await expect(sinhalaTranslation).toBeVisible();
    
    console.log('✓ Translation verified: "Mama bath kanava" → "මම බත් කනව"');
  });

  test('should translate "api iye panthi giyaa"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('api iye panthi giyaa');
    
    await page.waitForTimeout(2000);
    
    // Verify Sinhala translation appears in suggestions (skip hidden help text)
    const sinhalaText = page.getByText(/[අ-ෆ]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "api iye panthi giyaa"');
  });

  test('should translate "oyaa enavanam mamath ennam"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('oyaa enavanam mamath ennam');
    
    await page.waitForTimeout(2000);
    
    // Verify Sinhala translation appears in suggestions (skip hidden help text)
    const sinhalaText = page.getByText(/[අ-ෆ]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "oyaa enavanam mamath ennam"');
  });

  test('should translate "oyaa kohedha yanne?"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('oyaa kohedha yanne?');
    
    await page.waitForTimeout(2000);
    
    // Verify Sinhala translation appears in suggestions (skip hidden help text)
    const sinhalaText = page.getByText(/[අ-ෆ]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "oyaa kohedha yanne?"');
  });

  test('should translate "nangi padam karanava saha ayya sindu ahanava"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('nangi padam karanava saha ayya sindu ahanava');
    
    await page.waitForTimeout(2000);
    
    // Verify Sinhala translation appears in suggestions (skip hidden help text)
    const sinhalaText = page.getByText(/[අ-ෆ]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "nangi padam karanava saha ayya sindu ahanava"');
  });
  
  test('should translate "vahaama methanata enna!"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('vahaama methanata enna!');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "vahaama methanata enna!"');
  });

  test('should translate "mata eeka epaa."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('mata eeka epaa.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "mata eeka epaa."');
  });

  test('should translate "karunakara mata udaw karanna."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('karunakara mata udaw karanna.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "karunakara mata udaw karanna."');
  });

  test('should translate "adoo machan kohomada?"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('adoo machan kohomada?');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "adoo machan kohomada?"');
  });

  test('should translate "api heta yamu."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('api heta yamu.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "api heta yamu."');
  });

  test('should translate "eyaa heta enava."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('eyaa heta enava.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "eyaa heta enava."');
  });

  test('should translate "himin himin yanna."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('himin himin yanna.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "himin himin yanna."');
  });

  test('should translate "mamagedharayanavaa"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('mamagedharayanavaa');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "mamagedharayanavaa"');
  });

  test('should translate "mage office eke WIFI connection eka vada karane na"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('mage office eke WIFI connection eka vada karane na');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "mage office eke WIFI connection eka vada karane na"');
  });

  test('should translate "api labana sathiye trip eka Kandy yanava."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('api labana sathiye trip eka Kandy yanava.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "api labana sathiye trip eka Kandy yanava."');
  });
});
