import { Box, Button, Container, Grid, MenuItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface UserInfo {
    name: string,
    gender: string,
    lang: string
}

const Home: React.FC = () => {
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState<UserInfo>({ name: "", gender: "Male", lang: "React" })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    }
    const handleSubmit = () => {
        console.log(userInfo);
        navigate('/exam', { state: userInfo })
    }
    return (

        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h4'>User Information</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField fullWidth name="name" value={userInfo.name} onChange={handleInputChange}></TextField>
                    </Grid>

                    <Grid item xs={12} >
                        <TextField fullWidth name="gender" value={userInfo.gender} onChange={handleInputChange} select>
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField fullWidth name="lang" value={userInfo.lang} onChange={handleInputChange} select>
                            <MenuItem value="React">React</MenuItem>
                            <MenuItem value="Html">Html</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth variant="contained" disabled={userInfo.name.length < 1} onClick={handleSubmit}>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    );
};

export default Home;