import { Button, Form, Input, InputNumber } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const App = (props) => {
    const cookie = new Cookies
    const navigate = useNavigate()

    const onFinish = (values) => {
        const formData = new FormData();
        Object.keys(values).forEach(key => formData.append(key, values[key]));

        axios.post("http://localhost/user.php", formData).then(res => {
            if (res.data && res.data.message === "Success!") {
                cookie.set('userRole', 'cus', { path: '/' });
                navigate("/")
            }
        }).catch(err => {
            console.log("IN HERE", err)
            if (err.response && err.response.data) {
                props.messageAPI.error(err.response.data.message)
            }
        })
    };

    return <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
            maxWidth: 600,
            width: 300
        }}
        validateMessages={validateMessages}
    >
        <Form.Item
            name='name'
            label="Họ và tên"
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name="username"
            label="Username"
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
            label="Mật khẩu"
        >
            <Input
                type="password"
                placeholder="Password"
            />
        </Form.Item>
        <Form.Item
            name="email"
            label="Email"
            rules={[
                {
                    type: 'email',
                },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item name="address" label="Địa chỉ">
            <Input.TextArea />
        </Form.Item>
        <Form.Item
            wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
            }}
        >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
};

export default App;