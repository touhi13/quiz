import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';
import { QuestionDetails } from '../json/QuestionData';

interface IProps {
    handleQuestionAns(option: string, checked: boolean): void,
    isAns(arg: string): boolean,
    question: QuestionDetails,
}

const MultiSelect: React.FC<IProps> = ({ handleQuestionAns, isAns, question }) => {
    return (

        <FormGroup data-testid="multiSelect">
            {
                question.options.map((option,i )=> (
                    <FormControlLabel
                        key={option}
                        control={<Checkbox
                            // itemProps={{ "data-testid": "multiSelect" }}
                            data-testid={"multiSelect"+i}
                            checked={isAns(option)}
                            onChange={(e) => handleQuestionAns(option, e.target.checked)}
                        />}
                        label={option}
                    />

                ))
            }
        </FormGroup>
    );
};

export default MultiSelect;