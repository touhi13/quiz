import React from 'react';
import { render, screen } from '@testing-library/react';
import { QuestionDetails } from '../json/QuestionData';
import Question from '../components/Question';

test('render Question component', () => {
    const question : QuestionDetails = {
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
    const handleQuestionAns = () : void =>{
        console.log("handleQuestionAns");

    }
    render(<Question question={question} isAns={isAns} handleQuestionAns={handleQuestionAns}/>);
    const linkElement = screen.getByTestId("question");
    expect(linkElement).toBeInTheDocument();
})