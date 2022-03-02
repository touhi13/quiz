// import { MemoryRouter, BrowserRouter } from 'react-router-dom'
// import Result from '../pages/Result'
// import { fireEvent, render, screen } from '@testing-library/react';

// // test utils file
// const renderWithRouter = (ui, { route = '/' } = {}) => {
//     window.history.pushState({state:{ansCount:1, count: 5}}, 'Test page', route)

//     return render(ui, { wrapper: BrowserRouter })
// }
// test('Result rendering/navigating', () => {
//     // <MemoryRouter initialEntries={['/result']}>
//     //     <Result />
//     // </MemoryRouter>
//     // // // verify page content for expected route
//     // expect(screen.getByText(/Result Page/i)).toBeInTheDocument()
//     const route = '/result'
//     renderWithRouter(<Result />, { route })

//     expect(screen.getByTestId('result')).toHaveTextContent(route)
// })