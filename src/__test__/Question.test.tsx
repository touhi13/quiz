import React from 'react';
import { render, screen } from '@testing-library/react';
import { QuestionInfo } from '../json/QuestionData';
import Question from '../pages/Question';

test('render Question component', () => {
    const question : QuestionInfo = {
        id: 1,
        title: "string",
        options: [""],
        matchAns: [""],
        ans: [""],
        lang: "string",
        type: ""
    }

    const isAns =  () : boolean=>{
        return false
    }
    const handleAns = () : void =>{
        console.log("handleAns");

    }
    render(<Question question={question} isAns={isAns} handleAns={handleAns}/>);
    const linkElement = screen.getByTestId("question");
    expect(linkElement).toBeInTheDocument();
})