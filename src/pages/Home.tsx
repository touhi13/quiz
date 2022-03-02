import { Box, Button, Container, Grid, MenuItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface ExamineeDetails {
    name: string,
    gender: string,
    lang: string
}

const Home: React.FC = () => {
    const navigate = useNavigate()
    const [examinee, setExamineeDetails] = useState<ExamineeDetails>({ name: "", gender: "Male", lang: "JavaScript" })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setExamineeDetails({ ...examinee, [name]: value });
    }
    const handleSubmit = () => {
        console.log(examinee);
        navigate('/exam', { state: examinee })
    }
    return (

        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop: 8,
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h4'>User Information</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField inputProps={{ "data-testid": "addName" }}
                            fullWidth name="name" value={examinee.name} onChange={handleInputChange} ></TextField>
                    </Grid>

                    <Grid item xs={12} >
                        <TextField fullWidth name="gender" value={examinee.gender} onChange={handleInputChange} select>
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField fullWidth name="lang" value={examinee.lang} onChange={handleInputChange} select>
                            <MenuItem value="JavaScript">JavaScript</MenuItem>
                            <MenuItem value="PHP">PHP</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth variant="contained" data-testid="submitButton" disabled={examinee.name.length < 1} onClick={handleSubmit}>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    );
};

export default Home;