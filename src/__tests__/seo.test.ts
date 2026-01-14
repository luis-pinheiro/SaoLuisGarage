import { describe, it, expect } from 'vitest';
import sitemap from '../app/sitemap';
import robots from '../app/robots';

describe('SEO Configuration', () => {
  it('sitemap should contain all static routes', () => {
    const result = sitemap();
    const urls = result.map(item => item.url);

    expect(urls).toContain('https://sao-luis-garage.vercel.app');
    expect(urls).toContain('https://sao-luis-garage.vercel.app/privacidade');
    expect(urls).toContain('https://sao-luis-garage.vercel.app/termos');
  });

  it('robots.txt should have correct sitemap URL', () => {
    const result = robots();
    expect(result.sitemap).toBe('https://sao-luis-garage.vercel.app/sitemap.xml');
  });

  it('robots.txt should allow all and disallow private routes', () => {
    const result = robots();
    expect(result.rules).toMatchObject({
      userAgent: '*',
      allow: '/',
    });
  });
});
