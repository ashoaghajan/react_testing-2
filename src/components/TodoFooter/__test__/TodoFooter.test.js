import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
        </BrowserRouter>
    )
}

describe('Testing the TodoFooter', () => {
    it('Should render the correct amount of incomplete tasks', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5}/>);
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
    });
    
    it('Should render task singular when passed prop is 1', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
    });
})

