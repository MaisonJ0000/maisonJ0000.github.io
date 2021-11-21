/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from 'pages';

describe('Home', () => {
  it('renders necessaries', () => {
    render(<Home />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("MaisonJ's playground");
  });
});
