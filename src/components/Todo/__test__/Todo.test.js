import { render, screen } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTast = (tasks) => {
    tasks.forEach(task => {
        const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
        const buttonElement = screen.getByRole('button', { name: /add/i });
        userEvent.type(inputElement, task);
        userEvent.click(buttonElement);
    });
}

describe('Testing Todo Component', () => {
    it('Should render same text passed into title prop', () => {
        render(<MockTodo/>);
        addTast(['first task']);
        const divElement = screen.getByText('first task');
        expect(divElement).toBeInTheDocument();
    });

    it('Should render multiple items', () => {
        render(<MockTodo/>);
        addTast(['first task', 'second task', 'third task']);
        const divElements = screen.getAllByTestId('task-container');
        expect(divElements.length).toBe(3);
    });

    it('task should not have completed class when init rendered', () => {
        render(<MockTodo/>);
        addTast(['first task']);
        const divElement = screen.getByText('first task');
        expect(divElement).not.toHaveClass('todo-item-active');
    });

    it('task should have completed class when clicked', () => {
        render(<MockTodo/>);
        addTast(['first task']);
        const divElement = screen.getByText('first task');
        userEvent.click(divElement);
        expect(divElement).toHaveClass('todo-item-active');
    });
})

