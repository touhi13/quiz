import { Container, Typography, Chip, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fillInTheBlank, followingMatch, getQbyLang, multipleChoice, multiSelect, trueFalse } from '../json/QuestionData';
import { ExamineeDetails } from './Home';
import Question from '../components/Question';

interface Ans {
    id: number,
    options: string[],
}

const Exam: React.FC = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    const examinee = state as ExamineeDetails;
    const [questionNo, setQuestionNo] = useState<number>(0);
    const [answers, setAnswers] = useState<Ans[]>([]);

    const filteredQuestion = getQbyLang(examinee?.lang);
    const currentQ = filteredQuestion[questionNo];

    const questionChange = (qNo: number) => {
        setQuestionNo(qNo);
    }

    const handleQuestionAns = (option: string, checked?: boolean) => {

        const question = answers.find(a => a.id === currentQ.id);
        if (question) {
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
    const isAnswered = (questionId: number) => {
        const ans = answers.find(a => a.id === questionId);
        if (!ans) {
            return false;
        }
        return !!ans.options.length;
    }
    const handleExamResult = () => {
        console.log(filteredQuestion);
        let count: number = 0;
        answers.forEach(ans => {
            console.log(filteredQuestion);
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
        <Container data-testid="exam">
            <Typography variant="h5" component="h1">{examinee?.lang} Exam</Typography>
            {
                filteredQuestion.map((q, i) => (
                    <Chip
                        color={isAnswered(q.id) ? "error" : "default"}
                        onClick={() => questionChange(i)}
                        sx={{ marginRight: "10px", cursor: "pointer" }}
                        key={q.id}
                        label={i + 1}
                    />
                ))
            }
            <Question question={currentQ} handleQuestionAns={handleQuestionAns} isAns={isAns} />

            {
                questionNo > 0 && <Button onClick={() => questionChange(questionNo - 1)} variant="contained" color="primary" sx={{ marginRight: "10px" }}>Previous</Button>
            }
            {
                questionNo < filteredQuestion.length - 1 && <Button onClick={() => questionChange(questionNo + 1)} variant="contained" color="primary" sx={{ marginRight: "10px" }}>Next</Button>
            }
            {
                questionNo === filteredQuestion.length - 1 && <Button variant="contained" color="primary" onClick={handleExamResult}>Submit</Button>
            }

        </Container>
    );
};

export default Exam;