import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import Exam from '../pages/Exam'
import { fireEvent, render, screen } from '@testing-library/react';
import Home from '../pages/Home';


describe('Home component', () => {
    it('Result rendering/navigating', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exam" element={<Exam />} />
                </Routes>
            </BrowserRouter>
        );
        // verify page content for expected route
        console.log(screen)
        expect(screen.getByTestId("exam")).toBeTruthy()
    })
})