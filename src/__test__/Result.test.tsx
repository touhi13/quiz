// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';


// import Result from "../pages/Result";

// describe('Home component', () => {
//     let container = null;
//     beforeEach(() => {
//         // setup a DOM element as a render target
//         container = document.createElement("div");
//         document.body.appendChild(container);
//     });

//     afterEach(() => {
//         // cleanup on exiting
//         unmountComponentAtNode(container);
//         container.remove();
//         container = null;
//     });
//     it("renders with or without a name", () => {
//         it('should pass', () => {
//             render(
//               <MemoryRouter initialEntries={[{ pathname: '/', search: '?value=teresa_teng' }]}>
//                 <Result />
//               </MemoryRouter>
//             );
//           });
// });