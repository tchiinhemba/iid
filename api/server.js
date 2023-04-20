const puppeteer = require('puppeteer');
const fs = require('fs');

async function downloadImage(url, path) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'networkidle0' });
  
  // Encontre o seletor da imagem que você deseja baixar
  const selector = 'img[srcset]';

  // Espera até que o seletor esteja disponível na página
  await page.waitForSelector(selector);

  // Obtenha o link da imagem
  const imageURL = await page.evaluate((selector) => {
    return document.querySelector(selector).src;
  }, selector);

  // Baixa a imagem
  const buffer = await page.goto(imageURL, { responseType: 'buffer' });
  fs.writeFileSync(path, buffer.buffer());

  await browser.close();
}

// Use a função de downloadImage com a url do Instagram e o caminho onde deseja salvar a imagem
downloadImage('https://www.instagram.com/p/CpF3J20MVY0/?utm_source=ig_web_copy_link', './image.jpg');
