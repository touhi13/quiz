import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';
import { QuestionDetails } from '../json/QuestionData';

interface IProps {
    handleQuestionAns(option: string): void,

    isAns(arg: string): boolean,

    question: QuestionDetails
}

const FollowingMatch: React.FC<IProps> = ({handleQuestionAns, isAns, question}) => {

    return (
        <Table style={{width: "400px", margin: "auto"}}>
            <TableBody>
                <TableRow>
                    <TableCell/>
                    {
                        question.matchAns?.map(ans => <TableCell key={ans}>{ans}</TableCell>)
                    }
                </TableRow>

                {
                    question.options.map(op =>
                        <TableRow key={op}>
                            <TableCell>{op}</TableCell>
                            {
                                question.matchAns?.map(ans =>
                                    <TableCell key={ans}>
                                        <input
                                            onChange={e => handleQuestionAns(op + "->" + e.target.value,)}
                                            type="radio"
                                            name={op}
                                            value={ans}
                                        />
                                    </TableCell>
                                )
                            }
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    );
};

export default FollowingMatch;