import React from 'react';
import { render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Products from './Products';

describe('Products rendered', () => {
  test('renders without errors', () => {
    const products = {
      data: [
        { id: 1, attributes: { name: 'Product 1' } },
        { id: 2, attributes: { name: 'Product 2' } },
        { id: 3, attributes: { name: 'Product 3' } },
        
      ],
    };

    const { container } = render(
      <MemoryRouter>
        <Products products={products} />
      </MemoryRouter>
    );

     
    expect(container).toBeInTheDocument();
    
    
  });
});


