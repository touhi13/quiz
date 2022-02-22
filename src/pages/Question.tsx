import { Container, Typography } from '@mui/material';
import React from 'react';
import FollowingMatch from '../components/FollowingMatch';
import MultipleChoice from '../components/MultipleChoice';
import MultiSelect from '../components/MultiSelect';
import { fillInTheBlank, multipleChoice, QuestionInfo, trueFalse } from '../json/QuestionData';

interface IProps {
    handleAns(option: string, checked?: boolean): void,
    isAns(option: string): boolean,
    question: QuestionInfo,
}

const Question: React.FC<IProps> = ({handleAns,isAns,question}) => {
    return (
        question?(
            <Container data-testid="question">
                <Typography variant="h4">Question</Typography>
                <Typography variant="h5">{question.title}</Typography>
                {
                    [multipleChoice, trueFalse, fillInTheBlank].includes(question.type) &&
                    <MultipleChoice handleAns={handleAns} isAns={isAns} question={question} />
                }
                {
                    question.type === "followingMatch" &&
                    <FollowingMatch handleAns={handleAns} isAns={isAns} question={question} />
                }
                {
                    question.type === "multiSelect" &&
                    <MultiSelect handleAns={handleAns} isAns={isAns} question={question} />
                }
            </Container>
        ):<p>No question</p>
    );
};

export default  Question;