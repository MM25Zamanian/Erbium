import {readdir, writeFile} from 'fs/promises';

const iconsPath = '../../assets/iconsax-svg';

let list: string[] = [];

const start = async (): Promise<string[]> => {
  list = [];
  const iconsCategories = (await readdir(iconsPath)).filter((cat) => !cat.includes('.', 0));
  for await (const category of iconsCategories) {
    if (category === 'Crypto') {
      const cryptoIconsCategories = (await readdir(iconsPath + '/' + category)).filter(
          (cat) => !cat.includes('.', 0),
      );
      cryptoIconsCategories.forEach(async (cryptoIconsCategorie) => {
        const icons = (
          await readdir(iconsPath + '/' + category + '/' + cryptoIconsCategorie)
        ).filter((icon) => icon.includes('.svg'));

        for (const icon of icons) {
          list.push(category + '/' + icon);
          // console.log(`${cryptoIconsCategorie}: ${icon} - ${category}`);
        }
      });
    } else {
      const icons = (await readdir(iconsPath + '/' + category)).filter((icon) =>
        icon.includes('.svg'),
      );

      for (const icon of icons) {
        list.push(icon);
        // console.log(`${category}: ${icon}`);
      }
    }
  }
  list = list
      .filter((item, index) => list.includes(item, index))
      .map((item) => item.replace('.svg', ''));
  writeFile('./list.txt', list.join('\n'));
  return list;
};

start();
