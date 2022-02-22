import { Container, Typography, Chip, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fillInTheBlank, followingMatch, getQuestionByLang, multipleChoice, multiSelect, trueFalse } from '../json/QuestionData';
import { UserInfo } from './Home';
import Question from './Question';

interface AnsInfo {
    id: number,
    options: string[],
}
const Exam: React.FC = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    const userInfo = state as UserInfo;
    const [questionNo, setQuestionNo] = useState<number>(0);
    const [answers, setAnswers] = useState<AnsInfo[]>([]);
    const filteredQuestion = getQuestionByLang(userInfo.lang);
    const currentQ = filteredQuestion[questionNo];

    const questionChange = (qNo: number) => {
        setQuestionNo(qNo);
    }

    const handleAns = (option: string, checked?: boolean) => {
        const find = answers.find(a => a.id === currentQ.id);
        if (find) {
            if ([multipleChoice, trueFalse, fillInTheBlank].includes(currentQ.type)) {
                const newAnswers = answers.map(a => {
                    if (a.id === currentQ.id) {
                        a = { id: currentQ.id, options: [option] }
                    }
                    return a;
                })
                setAnswers(newAnswers);
                return;
            } else if (currentQ.type === multiSelect) {
                const newAnswers = answers.map(a => {
                    if (a.id === currentQ.id) {
                        if (checked) {
                            a = { id: currentQ.id, options: [...a.options, option] }
                        } else {
                            let newOptions = a.options.filter(o => o !== option);
                            a = { id: currentQ.id, options: newOptions }
                        }
                    }
                    return a;
                })
                setAnswers(newAnswers);
                return;
            } else if (currentQ.type === followingMatch) {
                const newAnswers = answers.map(a => {
                    if (a.id === currentQ.id) {
                        const _left = option.split("->")[0];
                        let newOptions = a.options.filter(o => !o.startsWith(_left));
                        a = { id: currentQ.id, options: [...newOptions, option] };
                    }
                    return a;
                })
                setAnswers(newAnswers);
                return;
            } else {
                const newAnswers = { id: currentQ.id, options: [option] };
                setAnswers([...answers, newAnswers]);
            }
        } else {
            const newAnswers = { id: currentQ.id, options: [option] };
            setAnswers([...answers, newAnswers]);
        }
    }
    const isAns = (option: string) => {
        const ans = answers.find(a => a.id === currentQ.id);
        if (!ans) {
            return false;
        }
        return !!ans.options.find(o => o === option);
    }
    const isQuestionAns = (questionId: number) => {
        const ans = answers.find(a => a.id === questionId);
        if (!ans) {
            return false;
        }
        return !!ans.options.length;
    }
    const handleResult = () => {
        let count: number = 0;
        answers.forEach(ans => {
            for (let q of filteredQuestion) {
                if (ans.id === q.id) {
                    if (JSON.stringify(ans.options) === JSON.stringify(q.ans)) {
                        count++;
                    }
                    break;
                }
            }
        })
        navigate('/result', { state: { ansCount: count, count: filteredQuestion.length } })
    }
    return (
        <Container  >
            <Typography variant="h5" component="h1">{userInfo.lang} Exam</Typography>
            {/* {
                filteredQuestion.map((q.i) => (
            <Chip
                color={isQuestionAns(q.id) ? "error" : "default"}
                onClick={() => questionChange(i)}
                sx={{ marginRight: "10px", cursor: "pointer" }}
                key={q.id}
                label={i + 1}
            />
            ))
            } */}
            {
                filteredQuestion.map((q, i) => (
                    <Chip
                        color={isQuestionAns(q.id) ? "error" : "default"}
                        onClick={() => questionChange(i)}
                        sx={{ marginRight: "10px", cursor: "pointer" }}
                        key={q.id}
                        label={i + 1}
                    />
                ))
            }
            <Question question={currentQ} handleAns={handleAns} isAns={isAns} />
            <Button variant="contained" color="primary" onClick={handleResult}>Submit</Button>
        </Container>
    );
};

export default Exam;