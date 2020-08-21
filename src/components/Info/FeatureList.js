import React from "react";
import {Divider, Tooltip, Typography} from "antd";
import {ExclamationCircleTwoTone, CheckCircleTwoTone, MinusCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons/lib";

const {Paragraph, Text} = Typography;

const Added = () => <Tooltip title={"Added!"} color={"#52c41a"}><CheckCircleTwoTone twoToneColor={"#52c41a"}/></Tooltip>
const Development = () => <Tooltip title={"In development!"} color={"#eab832"}><MinusCircleTwoTone twoToneColor={"#eab832"}/></Tooltip>
const NotAFeature = () => <Tooltip title={"I can't add this :("} color={"#f52b2b"}><CloseCircleTwoTone twoToneColor={"#f52b2b"}/></Tooltip>


const FeatureList = () => {
    return (
        <Paragraph>
            <Text strong
                  style={{fontSize: 16}}
            >
                What Exam Simulator does feature:
            </Text>
            <br/>
            <Added/> Multiple Choice Questions <br/>
            <Added/> Timer <br/>
            <Added/> Ability to Stop or Start Timer <br/>
            <Added/> Clean User Interface <br/>
            <Added/> Ability to create your own Exams <br/>
            <Development/> Free Answer Questions <br/>
            <Development/> Save your answers as a <code>.csv</code>, <code>.txt</code>, or <code>.json</code> file <br/>
            <Development/> Timing statistics <br/>
            <Divider/>
            <Text strong
                  style={{fontSize: 16}}
            >
                What Exam Simulator doesn't feature:
            </Text>
            <br/>
            <NotAFeature/> Saving exams where you left off <br/>
            <NotAFeature/> Exam grading <br/>
            <NotAFeature/> Sharing exam results on social media <br/>
            <NotAFeature/> Accounts to save your previous exams <br/>
        </Paragraph>
    )
}

export default FeatureList;