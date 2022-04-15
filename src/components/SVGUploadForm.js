import React from "react";
import { Form, Input, Button } from "antd";
const isSVG = require("is-svg");
//update the SVG list in the parent
export default function SVGUploadForm({ updateSVG }) {
    const [form] = Form.useForm(); // Input form for SVG upload

    const onSubmit = (formData) => {
        let newSVG = {
            title: formData.title,
            svg: formData.svg,
        };

        // check if legit
        if (isSVG(newSVG.svg)) {
            updateSVG(newSVG);
            alert(`SVG ${newSVG.title} has been submitted to GUN.`);
        } else {
            // Alert:invalid format
            alert(`${newSVG.title} is not a valid SVG.`);
        }
        form.resetFields();
    };

    // If the SVG is not valid, alert the user
    const onFinishFailed = (errorInfo) => {
        console.log("Failed SVG input:", errorInfo);
    };

    return (
        <>
            {/* Overarching form structure */}
            <Form
                name="svg-upload-form"
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: false }}
                onFinish={onSubmit}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                {/* Title input segment for form */}
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: "Please enter a title for the SVG.",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* SVG data input segment */}
                <Form.Item
                    label="SVG"
                    name="svg"
                    rules={[
                        {
                            required: true,
                            message: "Please enter a valid SVG as a string.",
                        },
                    ]}
                >
                    <Input.TextArea rows={15} />
                </Form.Item>

                {/* Submit button */}
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </>
    );
}
//have users upload their own SVG data and add it to DB