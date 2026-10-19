import test from 'node:test';
import assert from 'node:assert/strict';
import { preview } from 'vite';

test('production HTML serves its built JavaScript and CSS', async () => {
  const server = await preview({ preview: { host: '127.0.0.1', port: 0 } });
  try {
    const address = server.httpServer.address();
    assert.ok(address && typeof address !== 'string');
    const origin = `http://127.0.0.1:${address.port}`;
    const response = await fetch(origin);
    assert.equal(response.status, 200);
    const html = await response.text();
    const favicon = html.match(/<link[^>]+rel="icon"[^>]+href="([^"]+)"/)?.[1];
    assert.ok(favicon, 'the page declares a favicon');
    const iconResponse = await fetch(new URL(favicon, origin));
    assert.match(iconResponse.headers.get('content-type') ?? '', /image\/svg\+xml/,
      'the favicon must be an SVG asset, not the SPA HTML fallback');
    assert.match(await iconResponse.text(), /<svg[\s>]/);
    const script = html.match(/<script[^>]+src="([^"]+\.js)"/)?.[1];
    const style = html.match(/<link[^>]+href="([^"]+\.css)"/)?.[1];
    assert.ok(script, 'the built HTML references JavaScript');
    assert.ok(style, 'the built HTML references CSS');
    for (const asset of [script, style]) {
      const assetResponse = await fetch(new URL(asset, origin));
      assert.equal(assetResponse.status, 200, asset);
      assert.ok((await assetResponse.arrayBuffer()).byteLength > 0, asset);
    }
  } finally {
    await new Promise((resolve, reject) => server.httpServer.close(error => error ? reject(error) : resolve()));
  }
});
