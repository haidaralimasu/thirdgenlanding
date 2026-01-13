const fs = require('fs');
const { exec } = require('child_process');

// Try using puppeteer or sharp if available
const convertWithPuppeteer = async () => {
  try {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({ width: 1500, height: 500 });
    const svgContent = fs.readFileSync('./public/x-banner.svg', 'utf8');
    const html = `<html><body style="margin:0;padding:0;">${svgContent}</body></html>`;

    await page.setContent(html);
    await page.screenshot({
      path: './public/x-banner.png',
      type: 'png',
      omitBackground: false
    });

    await browser.close();
    console.log('✓ PNG created successfully at public/x-banner.png');
    return true;
  } catch (err) {
    return false;
  }
};

const convertWithSharp = async () => {
  try {
    const sharp = require('sharp');
    const svgBuffer = fs.readFileSync('./public/x-banner.svg');

    await sharp(svgBuffer)
      .png()
      .toFile('./public/x-banner.png');

    console.log('✓ PNG created successfully at public/x-banner.png');
    return true;
  } catch (err) {
    return false;
  }
};

(async () => {
  let success = await convertWithSharp();
  if (!success) {
    success = await convertWithPuppeteer();
  }

  if (!success) {
    console.log('❌ Please install sharp or puppeteer:');
    console.log('   npm install sharp');
    console.log('   or');
    console.log('   npm install puppeteer');
  }
})();
