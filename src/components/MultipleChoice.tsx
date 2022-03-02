import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import{QuestionDetails} from '../json/QuestionData';

interface IProps {
    handleQuestionAns(option: string): void,
    isAns(arg: string): boolean,
    question: QuestionDetails,
}

const MultipleChoice :React.FC <IProps>= ({ handleQuestionAns, isAns, question }) => {
    return (
        <RadioGroup
        name = "radio-buttons-group"
        onChange={e => handleQuestionAns(e.target.value)}
        >
            {
                question.options.map(option => (
                    <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio
                            checked={isAns(option)} 
                            />}
                            label={option}
                    />
                ))
            }
        </RadioGroup>
    );
};

export default MultipleChoice;