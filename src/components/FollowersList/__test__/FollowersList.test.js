import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("testing FollowersList component", () => {

    it('should fetch and render the first element', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId(`follower-item-0`);
        screen.debug();
        expect(followerDivElement).toBeInTheDocument();
    });

    // it('should fetch and render all five elements', async () => {
    //     render(<MockFollowersList /> );
    //     const followerDivElements = await screen.findAllByTestId(/follower-item/i)
    //     expect(followerDivElements.length).toBe(5);
    // });
})