import { Button, Container, MenuItem, TextField, Typography } from '@mui/material';
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
    navigate('/exam', { state:userInfo } )
}
    return (
        <>
            <Container>
                <Typography variant='h4'>User Information</Typography>
                <div>
                    <TextField name="name" value={userInfo.name} onChange={handleInputChange}></TextField>
                </div>
                <div>
                    <TextField name="gender" value={userInfo.gender} onChange={handleInputChange} select>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </TextField>
                </div>
                <div>
                    <TextField name="lang" value={userInfo.lang} onChange={handleInputChange} select>
                        <MenuItem value="React">React</MenuItem>
                        <MenuItem value="Html">Html</MenuItem>
                    </TextField>
                </div>
                <Button variant="contained" disabled ={userInfo.name.length<1} onClick={handleSubmit}>Submit</Button>
            </Container>
        </>
    );
};

export default Home;