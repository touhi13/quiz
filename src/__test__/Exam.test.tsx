// import React from 'react';
// import { Router } from 'react-router-dom';
// import { fireEvent, render, screen } from '@testing-library/react';
// import Exam from "../pages/Result";
// import { createMemoryHistory } from 'history';
// describe('Exam', () => {
//     test('should pass', () => {
//         const history = createMemoryHistory({ initialEntries: ['/home'] });
//         const { getByText } = render(
//             <Router history={history}>
//                 <Exam />
//             </Router>
//         );
//         expect(history.location.pathname).toBe('/home');
//         fireEvent.click(getByTestId('exam'));
//         expect(history.location.pathname).toBe('/exam');
//     });
// });