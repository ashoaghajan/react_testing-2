import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddInput from '../AddInput';


describe('testing the AddInput', () => {
    it('should render input element', () => {
        render(<AddInput todos={[]} setTodos={() => {}}/>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should change value after typing', () => {
        render(<AddInput todos={[]} setTodos={() => {}}/>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
        userEvent.type(inputElement, 'test');
        expect(inputElement).toHaveValue('test');
    });

    it('should empty the input value after submitting', () => {
        render(<AddInput todos={[]} setTodos={() => {}}/>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
        const buttonElement = screen.getByRole('button', { name: /add/i });
        userEvent.type(inputElement, 'test');
        userEvent.click(buttonElement);
        expect(inputElement).toHaveValue('');
    });
});
