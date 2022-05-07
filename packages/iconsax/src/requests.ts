const mmzmkIconsContents = new Map<string, string>();
const requests = new Map<string, Promise<string>>();

export const getSvgContent = (url: string): Promise<string> => {
  let req = requests.get(url);
  if (!req) {
    if (!mmzmkIconsContents.get(url)) {
      req = fetch(url).then(async (response) => {
        if (response.ok) {
          const svgContent = await response.text();
          mmzmkIconsContents.set(url, svgContent);
          return svgContent;
        }
        return response.statusText;
      });

      if (req !== undefined) {
        requests.set(url, req);
      }
    } else {
      req = new Promise((resolve) => {
        resolve(mmzmkIconsContents.get(url) ?? '');
      });
    }
  }

  return req;
};
