import { test, expect } from '@playwright/test';

test('Procurar e adicionar produto ao carrinho', async ({ page }) => {
  await page.goto('https://www.automationexercise.com');

  await page.locator('.fc-dialog-container').waitFor({ state: 'visible' });

  await page.locator('.fc-button-label:has-text("Consent")').click();



  // Clicar no produto
  await page.click('a:has-text("Products")');


  

  // Buscar um produto (iPhone)
  await page.fill('input[id="small-searchterms"]', 'iPhone');
  await page.keyboard.press('Enter');

  // Clicar no produto
  await page.click('a:has-text("iPhone")');

  // Adicionar ao carrinho
  await page.click('button:text("Add to Cart")');

  // Aguardar e validar a mensagem de sucesso
  await expect(page.locator('.alert-success')).toContainText('The product has been added to your ');

  // Ir para o carrinho e validar
  await page.click('#cart button');
  await expect(page.locator('.dropdown-menu')).toContainText('iPhone');
});
