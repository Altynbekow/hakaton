import React from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch } from "react-redux"
import { postUser } from '../../store/slices/authSlice';
import style from './SingUp.module.css'


const SingUp = () => {
    const dispatch = useDispatch();


    const onFinish = (values) => {
        console.log("Success:", values);
        dispatch(postUser(values))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="auth"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
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
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input placeholder='имя'  className={style['input-style']}/>
            </Form.Item>
            <Form.Item
                
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input placeholder='Email'  className={style['input-style']}/>
            </Form.Item>

            <Form.Item
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password placeholder='Пароль' className={style['input-style']}/>
            </Form.Item>

            <Form.Item
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password placeholder='Пароль еще раз' className={style['input-style']}/>
            </Form.Item>



            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button className={style.btn} type="primary" htmlType="submit">
                    Зарегистрироваться
                </Button>
            </Form.Item>
        </Form>
    )
};
export default SingUp;