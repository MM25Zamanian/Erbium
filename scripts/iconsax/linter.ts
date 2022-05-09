import {readdir, readFile, writeFile} from 'fs/promises';

import {parse} from 'node-html-parser';

const iconsPath = '../../assets/iconsax-svg';

function svgLinter(html: string): string {
  const root = parse(html);
  root.querySelector('svg')?.removeAttribute('height');
  root.querySelector('svg')?.removeAttribute('width');
  root.querySelector('svg')?.removeAttribute('xmlns');
  root.querySelectorAll('path').forEach((path) => {
    if (path.getAttribute('stroke')?.includes('#', 0)) {
      path.setAttribute('stroke', 'currentColor');
    }
    if (path.getAttribute('fill')?.includes('#', 0)) {
      path.setAttribute('fill', 'currentColor');
    }
  });
  return root.toString();
}

const start = async (): Promise<void> => {
  const iconsCategories = (await readdir(iconsPath)).filter((cat) => !cat.includes('.', 0));
  iconsCategories.forEach(async (category) => {
    if (category === 'Crypto') {
      const cryptoIconsCategories = (await readdir(iconsPath + '/' + category)).filter(
          (cat) => !cat.includes('.', 0),
      );
      cryptoIconsCategories.forEach(async (cryptoIconsCategorie) => {
        const icons = (
          await readdir(iconsPath + '/' + category + '/' + cryptoIconsCategorie)
        ).filter((icon) => icon.includes('.svg'));

        for (const icon of icons) {
          const iconPath = iconsPath + '/' + category + '/' + cryptoIconsCategorie + '/' + icon;
          const svgContent = await readFile(iconPath);
          await writeFile(iconPath, svgLinter(svgContent.toString()));
          console.log(`${cryptoIconsCategorie}: ${icon} - ${category}`);
        }
      });
    } else {
      const icons = (await readdir(iconsPath + '/' + category)).filter((icon) =>
        icon.includes('.svg'),
      );

      for (const icon of icons) {
        const iconPath = iconsPath + '/' + category + '/' + icon;
        const svgContent = await readFile(iconPath);
        await writeFile(iconPath, svgLinter(svgContent.toString()));
        console.log(`${category}: ${icon}`);
      }
    }
  });
};

start();
