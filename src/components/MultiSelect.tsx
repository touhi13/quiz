import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';
import { QuestionInfo } from '../json/QuestionData';

interface IProps {
    handleAns(option: string, checked:boolean): void,
    isAns(arg: string): boolean,
    question: QuestionInfo,
}

const MultiSelect: React.FC<IProps> = ({ handleAns, isAns, question }) => {
    return (
        <FormGroup>
            {
                question.options.map(option => (
                    <FormControlLabel
                        key={option}
                        control={<Checkbox
                            checked={isAns(option)}
                            onChange={(e) => handleAns(option, e.target.checked)}
                        />}
                        label={option}
                    />

                ))
            }
        </FormGroup>
    );
};

export default MultiSelect;