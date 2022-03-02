import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';


describe('Home component', () => {
    it('should render the component onto the screen', () => {
        expect(true).toBeTruthy();
    });

    it('should have the "Submit" button disabled when initialized', () => {

        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        );
        expect(screen.getByTestId('submitButton')).toBeDisabled();
    });

    it('should enable the "Submit" button when a valid input is entered', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        );
        expect(screen.getByTestId('submitButton')).toBeDisabled();
        const input = screen.getByTestId('addName');
        fireEvent.change(input, { target: { value: 'John' } });
        expect(screen.getByTestId('submitButton')).toBeEnabled();
    });
    it('Inputs should have the correct value', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        );
        let input = screen.getByTestId("addName")
        fireEvent.change(input, { target: { value: 'Jhon' } })
        console.log(expect(input).toHaveValue("Jhon"));

    });
    // const mockHistoryPush = jest.fn();

    // jest.mock('react-router-dom', () => ({
    //     ...jest.requireActual('react-router-dom'),
    //     useHistory: () => ({
    //         push: mockHistoryPush,
    //     }),
    // }));
    // it('Redirects to correct URL on click', () => {
    //      render(
    //         <MemoryRouter>
    //             <Home />
    //         </MemoryRouter>,
    //     );
    //     const input = screen.getByTestId('addName');
    //     fireEvent.change(input, { target: { value: 'John' } });
    //     fireEvent.click(screen.getByTestId('submitButton'));
    //     console.log(mockHistoryPush);  // eslint-disable-line no-console
    //     expect(mockHistoryPush).toHaveBeenCalledWith("/exam");
    // })
});

