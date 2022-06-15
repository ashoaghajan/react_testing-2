
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('testing the header', () => {
    it('Renders Header component with h1 according to given prop', () => {
        render(<Header title='My Header'/>);
        const headerElement = screen.getByText(/my header/i);
        expect(headerElement).toBeInTheDocument();
    });
});
