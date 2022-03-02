import { Container, Typography } from '@mui/material';
import React from 'react';
import FollowingMatch from './FollowingMatch';
import MultipleChoice from './MultipleChoice';
import MultiSelect from './MultiSelect';
import { fillInTheBlank, multipleChoice, QuestionDetails, trueFalse } from '../json/QuestionData';

interface IProps {
    handleQuestionAns(option: string, checked?: boolean): void,
    isAns(option: string): boolean,
    question: QuestionDetails,
}

const Question: React.FC<IProps> = ({handleQuestionAns,isAns,question}) => {
    return (
        question?(
            <Container data-testid="question">
                <Typography variant="h4">Question</Typography>
                <Typography variant="h5">{question.title}</Typography>
                {
                    [multipleChoice, trueFalse, fillInTheBlank].includes(question.type) &&
                    <MultipleChoice handleQuestionAns={handleQuestionAns} isAns={isAns} question={question} />
                }
                {
                    question.type === "followingMatch" &&
                    <FollowingMatch handleQuestionAns={handleQuestionAns} isAns={isAns} question={question} />
                }
                {
                    question.type === "multiSelect" &&
                    <MultiSelect handleQuestionAns={handleQuestionAns} isAns={isAns} question={question} />
                }
            </Container>
        ):<p>No question</p>
    );
};

export default  Question;