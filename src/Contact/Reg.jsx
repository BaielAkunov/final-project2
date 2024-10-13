import React, {useState} from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input, Button, message } from 'antd';

const Reg = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const handleInputChange1 = (e) => setInputValue1(capitalizeFirstLetter(e.target.value));
const handleInputChange2 = (e) => setInputValue2(capitalizeFirstLetter(e.target.value));
  const handleInputChange3 = (e) => setInputValue3(e.target.value);

  const handleClick = () => {
    if (!inputValue1 || !inputValue2 || !inputValue3) {
      messageApi.error('All fields are required.');
      return;
  }

    if (!inputValue3.includes('@')) {
      messageApi.error('Please enter a valid email address.');
      return;
  }

    messageApi.info('Your data has been successfully saved');

    setInputValue1('');
    setInputValue2('');
    setInputValue3('');
  };
    return ( 
        <>
           {contextHolder}
         <Input  value={inputValue1} onChange={handleInputChange1} size="large" placeholder="Your First Name" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input  value={inputValue2} onChange={handleInputChange2} placeholder="Your Last Name" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input  value={inputValue3} onChange={handleInputChange3} size="small" placeholder="Your Email" prefix={<UserOutlined />} />
    <p></p>
    <Button onClick={handleClick} type="primary" danger>
      Apply 
    </Button>
        </>
     );
}
 
export default Reg;