// scripts/asset_loader.mjs
// Node.js ESM loader to handle static image imports (.webp, .png, .jpg, .svg) during prerendering
export async function load(url, context, nextLoad) {
  if (
    url.endsWith('.webp') ||
    url.endsWith('.png') ||
    url.endsWith('.jpg') ||
    url.endsWith('.jpeg') ||
    url.endsWith('.svg')
  ) {
    return {
      format: 'module',
      shortCircuit: true,
      source: `export default ${JSON.stringify(url)};`,
    };
  }
  return nextLoad(url, context);
}
