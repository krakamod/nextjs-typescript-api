import query from './query';
import { expect, describe, it } from 'vitest';

describe('query', () => {
  describe('stringify', () => {
    it("undefined params => ''", () => {
      expect(query.stringify()).toBe('');
    });

    it("empty params => ''", () => {
      const params = {};
      expect(query.stringify(params)).toBe('');
    });

    it("undefined param => ''", () => {
      const params = {
        search: undefined,
      };
      expect(query.stringify(params)).toBe('');
    });

    it('search: foo => search=foo', () => {
      const params = {
        search: 'foo',
      };
      expect(query.stringify(params)).toBe('search=foo');
    });

    it('undefined param should be ignored', () => {
      const params = {
        search: undefined,
      };
      expect(query.stringify(params)).toBe('');
    });

    it('number param `1` => string param `"1"`', () => {
      const params = {
        search: 1,
      };
      expect(query.stringify(params)).toBe('search=1');
    });

    it('boolean param `true` => string param `"true"`', () => {
      const params = {
        search: true,
      };
      expect(query.stringify(params)).toBe('search=true');
    });

    it('boolean param `false` => string param `"false"`', () => {
      const params = {
        search: false,
      };
      expect(query.stringify(params)).toBe('search=false');
    });
  });
});
