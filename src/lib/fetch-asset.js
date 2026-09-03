function buildHeaders(url) {
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    Accept: '*/*',
    'Accept-Language': 'en-US,en;q=0.9',
  };

  try {
    const { hostname } = new URL(url);
    if (hostname.endsWith('rbxcdn.com')) {
      headers.Referer = 'https://www.roblox.com/';
      headers.Origin = 'https://www.roblox.com';
    } else if (hostname.endsWith('roblox.com')) {
      headers.Referer = 'https://www.roblox.com/';
    }
  } catch {
    // ignore invalid URLs
  }

  return headers;
}

const MAX_RETRIES = 3;

/**
 * @param {string} url
 * @returns {Promise<{ ok: boolean, status: number, body: Buffer, contentType: string }>}
 */
export async function fetchAsset(url) {
  let lastError;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(url, { headers: buildHeaders(url) });
      const body = Buffer.from(await response.arrayBuffer());
      return {
        ok: response.ok,
        status: response.status,
        body,
        contentType: response.headers.get('content-type') || '',
      };
    } catch (error) {
      lastError = error;
      if (attempt < MAX_RETRIES) {
        await sleep(500 * attempt);
      }
    }
  }

  throw lastError;
}

/**
 * @param {string} url
 * @returns {Promise<string>}
 */
export async function fetchText(url) {
  const result = await fetchAsset(url);
  if (!result.ok) {
    throw new Error(`HTTP ${result.status} for ${url}`);
  }
  return result.body.toString('utf8');
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
