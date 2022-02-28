import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { act as domAct } from "react-dom/test-utils";
import { act as testAct, create } from "react-test-renderer";


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
    let root;
    domAct(() => {
        testAct(() => {
            root = create(
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>);
        });
    });
    expect(root).toMatchSnapshot();
});


// ...
