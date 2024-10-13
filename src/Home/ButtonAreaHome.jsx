import React from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate} from 'react-router-dom'

const ButtonAreaHome = () => {
    const navigate = useNavigate();
    const toMainBlock = ()=>{
            navigate('/mainblock') 
    }
    const toAbout = ()=>{
        navigate('/about') 
}
    return ( 
        <>
        <Button onClick={toMainBlock} type="primary" size="large" icon={<AntDesignOutlined />}>
          Get Started
        </Button>
        <p></p>
        <Button onClick={toAbout} size="large">About Us</Button></>
     );
}
 
export default ButtonAreaHome;