import React, {useState} from "react";
import {Form, Space, Button, Input, Modal} from "antd";
import {MinusCircleOutlined, PlusOutlined, RightOutlined} from "@ant-design/icons/lib";
import {useSessionStorageState} from "@umijs/hooks";
import SetupModal from "./SetupModal";

const SetupForm = ({setView}) => {
    const [numSections, setNumSections] = useState(0);
    const [sections, setSections] = useSessionStorageState("sectionData", null);
    const [timeError, setTimeError] = useState({});
    const [questionError, setQuestionError] = useState({});
    const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);

    const handleModalOk = () =>{
        // setConfirmationModalVisible(false);
        setInterval(() => setView('exam'), 100)
    }

    const onFinish = values => {
        console.log('Received values of form:', values);
        setSections(values);
    };

    const validateTime = time => {
        if (time < 1) return {
            validateStatus: 'error',
            errorMsg: "Choose a time greater than 1 minute!"
        }
        // else if (time > 240) return {
        //     validateStatus: "warning",
        //     errorMsg: "If one section of your test is greater than 4 hours, you should really consider if its worth it."
        // }
    }

    const validateQuestions = questions => {
        if (questions < 1) return {
            validateStatus: "error",
            errorMsg: "Choose greater than 1 question!"
        }
    }

    const onQuestionChange = num => {
        setQuestionError({...validateQuestions(num.target.value), num})
    }

    const onTimeChange = num => {
        setTimeError({...validateTime(num.target.value), num})
    }

    return (
        <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
            <Form.List name="sections">
                {(fields, {add, remove}) => {
                    return (
                        <div>
                                {fields.map(field => (
                                    <Space key={`section-${field.key}`}
                                           align="start"
                                           style={{width:"100%"}}
                                    >
                                        <h2>{`Section ${field.key + 1}`}:</h2>
                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'num_questions']}
                                            fieldKey={[field.fieldKey, 'num_questions']}
                                            rules={[{required: true, message: 'Missing number of questions.'}]}
                                            validateStatus={questionError.validateStatus}
                                            help={questionError.errorMsg}
                                        >
                                            <Input addonBefore={"Number of Questions"} type={"number"} onChange={onQuestionChange}/>
                                        </Form.Item>

                                        <Form.Item
                                            {...field}
                                            name={[field.name, 'time']}
                                            fieldKey={[field.fieldKey, 'time']}
                                            rules={[{required: true, message: 'Missing time for this section.'}]}
                                            validateStatus={timeError.validateStatus}
                                            help={timeError.errorMsg}
                                        >
                                            <Input addonBefore={"Time"} type={"number"} addonAfter={"minutes"} onChange={onTimeChange}/>
                                        </Form.Item>

                                        <MinusCircleOutlined
                                            onClick={() => {
                                                setNumSections(numSections - 1);
                                                remove(field.name);
                                            }}
                                            style={{marginTop: "6px", fontSize: "20px", color: "red"}}
                                        />
                                    </Space>
                                ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => {
                                        setNumSections(numSections + 1);
                                        add();
                                    }}
                                    block
                                >
                                    <PlusOutlined/> Add Section
                                </Button>
                            </Form.Item>
                        </div>
                    );
                }}
            </Form.List>
            <Modal title={"One last thing..."}
                   centered={true}
                   visible={confirmationModalVisible}
                   onOk={handleModalOk}
                   onCancel={() => setConfirmationModalVisible(false)}
                   okText={"Got it!"}
                   cancelText={"Take me back!"}
            >
                <SetupModal/>
            </Modal>
            <Form.Item>
                <Button type="primary"
                        htmlType="submit"
                        disabled={!(numSections >= 1)}
                        style={{marginLeft: "44%"}}
                        onClick={() => setConfirmationModalVisible(true)}
                >
                    Let's get started! <RightOutlined/>
                </Button>
            </Form.Item>
        </Form>
    );
}

export default SetupForm;