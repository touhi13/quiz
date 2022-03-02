import { MemoryRouter, BrowserRouter } from 'react-router-dom'
import Exam from '../pages/Exam'
import { fireEvent, render, screen } from '@testing-library/react';

// test utils file
const renderWithRouter = (ui:any, { route = '/' } = {}) => {
    window.history.pushState({ansCount:1, count: 5}, 'Test Exam Page', route)

    return render(ui, { wrapper: BrowserRouter })
}
test('Exam rendering/navigating', () => {
    // <MemoryRouter initialEntries={['/exam']}>
    //     <Exam />
    // </MemoryRouter>
    // // // verify page content for expected route
    // expect(screen.getByText(/Exam Page/i)).toBeInTheDocument()
    const route = '/exam'
    renderWithRouter(<Exam />, { route })
    expect(screen.getByTestId('exam')).toHaveTextContent("Exam")
})