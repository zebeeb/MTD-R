
import React from 'react';
import { render } from '../../utils/test-utils';
import { ThemedText } from '../ThemedText';

describe('ThemedText', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ThemedText>Test Text</ThemedText>);
    expect(getByText('Test Text')).toBeTruthy();
  });
});
import React from 'react';
import { render } from '@/utils/test-utils';
import ThemedText from '../ThemedText';

describe('ThemedText', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ThemedText>Test Text</ThemedText>);
    expect(getByText('Test Text')).toBeTruthy();
  });
});
