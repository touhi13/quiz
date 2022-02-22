import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import{QuestionInfo} from '../json/QuestionData';

interface IProps {
    handleAns(option: string): void,
    isAns(arg: string): boolean,
    question: QuestionInfo,
}

const MultipleChoice :React.FC <IProps>= ({ handleAns, isAns, question }) => {
    return (
        <RadioGroup
        name = "radio-buttons-group"
        onChange={e => handleAns(e.target.value)}
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