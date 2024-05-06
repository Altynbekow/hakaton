import React from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/slices/loginSlice';
import style from './SingIn.module.css'

const SingIn = () => {
    const { dataUser } = useSelector((state) => 
        state.login)
        
    const dispatch = useDispatch();
    const onFinish = (values) => {
        console.log('Success:', values);
        dispatch(loginUser(values))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 10,
            }}
            style={{
                width: '750px',
                backgroundColor: '#0f1014',
                padding:'20px',
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
               
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input placeholder='Email' className={style['input-style']}/>
            </Form.Item>

            <Form.Item
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password placeholder='Password' className={style['input-style']}/>
            </Form.Item>


            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button  className={style.btn} type="primary" htmlType="submit">
                    Авторизация 
                </Button>
            </Form.Item>
        </Form>
    )
};
export default SingIn;