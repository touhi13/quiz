import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MultiSelect from '../components/MultiSelect'
import { QuestionDetails } from '../json/QuestionData'

test('click', () => {
    const question: QuestionDetails = {
        id: 1,
        title: "string",
        options: [""],
        matchAns: [""],
        ans: [""],
        lang: "string",
        type: ""
    }

    const isAns = (): boolean => {
        return false
    }
    const handleQuestionAns = (): void => {
        console.log("handleQuestionAns");

    }
    render(
        <MultiSelect question={question} isAns={isAns} handleQuestionAns={handleQuestionAns} />
    )

    userEvent.click(screen.getByTestId('multiSelect1'))
    expect(screen.getByTestId('multiSelect1')).toBeChecked()
})