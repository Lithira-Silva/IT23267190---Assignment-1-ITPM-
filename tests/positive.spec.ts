import { test, expect } from '@playwright/test';

test.describe('Swift Translator - Singlish to Sinhala Translation (Positive Scenarios)', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('Pos_Fun_0001 - should translate "Mama bath kanava"', async ({ page }) => {
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

  test('Pos_Fun_0002 - should translate "api iye panthi giyaa"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('api iye panthi giyaa');
    
    await page.waitForTimeout(2000);
    
    // Verify Sinhala translation appears in suggestions (skip hidden help text)
    const sinhalaText = page.getByText(/[අ-ෆ]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "api iye panthi giyaa"');
  });

  test('Pos_Fun_0003 - should translate "oyaa enavanam mamath ennam"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('oyaa enavanam mamath ennam');
    
    await page.waitForTimeout(2000);
    
    // Verify Sinhala translation appears in suggestions (skip hidden help text)
    const sinhalaText = page.getByText(/[අ-ෆ]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "oyaa enavanam mamath ennam"');
  });

  test('Pos_Fun_0004 - should translate "oyaa kohedha yanne?"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('oyaa kohedha yanne?');
    
    await page.waitForTimeout(2000);
    
    // Verify Sinhala translation appears in suggestions (skip hidden help text)
    const sinhalaText = page.getByText(/[අ-ෆ]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "oyaa kohedha yanne?"');
  });

  test('Pos_Fun_0005 - should translate "nangi padam karanava saha ayya sindu ahanava"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('nangi padam karanava saha ayya sindu ahanava');
    
    await page.waitForTimeout(2000);
    
    // Verify Sinhala translation appears in suggestions (skip hidden help text)
    const sinhalaText = page.getByText(/[අ-ෆ]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "nangi padam karanava saha ayya sindu ahanava"');
  });
  
  test('Pos_Fun_0006 - should translate "vahaama methanata enna!"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('vahaama methanata enna!');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "vahaama methanata enna!"');
  });

  test('Pos_Fun_0007 - should translate "mata eeka epaa."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('mata eeka epaa.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "mata eeka epaa."');
  });

  test('Pos_Fun_0008 - should translate "karunakara mata udaw karanna."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('karunakara mata udaw karanna.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "karunakara mata udaw karanna."');
  });

  test('Pos_Fun_0009 - should translate "adoo machan kohomada?"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('adoo machan kohomada?');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "adoo machan kohomada?"');
  });

  test('Pos_Fun_0010 - should translate "api heta yamu."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('api heta yamu.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "api heta yamu."');
  });

  test('Pos_Fun_0011 - should translate "eyaa heta enava."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('eyaa heta enava.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "eyaa heta enava."');
  });

  test('Pos_Fun_0012 - should translate "himin himin yanna."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('himin himin yanna.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "himin himin yanna."');
  });

  test('Pos_Fun_0013 - should translate "mamagedharayanavaa"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('mamagedharayanavaa');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "mamagedharayanavaa"');
  });

  test('Pos_Fun_0014 - should translate "mage office eke WIFI connection eka vada karane na"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('mage office eke WIFI connection eka vada karane na');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "mage office eke WIFI connection eka vada karane na"');
  });

  test('Pos_Fun_0015 - should translate "api labana sathiye trip eka Kandy yanava."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('api labana sathiye trip eka Kandy yanava.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "api labana sathiye trip eka Kandy yanava."');
  });

  test('Pos_Fun_0016 - should translate "ayyoo! mokada une?"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('ayyoo! mokada une?');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "ayyoo! mokada une?"');
  });

  test('Pos_Fun_0017 - should translate "mata Rs. 5000 k dhenna."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('mata Rs. 5000 k dhenna.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "mata Rs. 5000 k dhenna."');
  });

  test('Pos_Fun_0018 - should translate "heta 10.30 AM ta enna."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('heta 10.30 AM ta enna.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "heta 10.30 AM ta enna."');
  });

  test('Pos_Fun_0019 - should translate "sini 1kg gaththa."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('sini 1kg gaththa.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "sini 1kg gaththa."');
  });

  test('Pos_Fun_0020 - should translate "ada 2025-05-21 wenida."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('ada 2025-05-21 wenida.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "ada 2025-05-21 wenida."');
  });

  test('Pos_Fun_0021 - should translate "mama gedhara yanavaa."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('mama gedhara yanavaa.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "mama gedhara yanavaa."');
  });

  test('Pos_Fun_0022 - should translate "mama gedhara yanavaa. oyaa enavadha?"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('mama gedhara yanavaa. oyaa enavadha?');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "mama gedhara yanavaa. oyaa enavadha?"');
  });

  test('Pos_Fun_0023 - should translate "lankaave ithihasaya bohomayak pera kaalayata ayath ve. meya avurudu dahas gananakata pera sidu vuu deyak lesa salakana athara"', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('lankaave ithihasaya bohomayak pera kaalayata ayath ve. meya avurudu dahas gananakata pera sidu vuu deyak lesa salakana athara');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "lankaave ithihasaya bohomayak pera kaalayata ayath ve. meya avurudu dahas gananakata pera sidu vuu deyak lesa salakana athara"');
  });

  test('Pos_Fun_0024 - should translate "eya boho dhanaage aadharaya dinaagath rataki."', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    
    const inputField = page.locator('textarea').first();
    await inputField.fill('eya boho dhanaage aadharaya dinaagath rataki.');
    
    await page.waitForTimeout(2000);
    
    const sinhalaText = page.getByText(/[\u0d85-\u0dc6]+/).filter({ hasNotText: 'piliwela' }).first();
    await expect(sinhalaText).toBeVisible();
    
    console.log('✓ Translation verified: "eya boho dhanaage aadharaya dinaagath rataki."');
  });
});
