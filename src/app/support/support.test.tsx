import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Support from './support';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders Support component', () => {
  const wrapper = render(<Support />);
  expect(wrapper).toBeTruthy();
});