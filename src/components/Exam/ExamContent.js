import React from "react";
import {Layout} from "antd";
import BubbleRow from "../BubbleRow/BubbleRow";
import TimerMenu from "./TimerMenu";

const {Content} = Layout;

const ExamContent = ({number, toggle$}) => {
    const myArr = [];
    for (let i = 1; i <= number; i++){
        myArr.push(i);
    }
    return (
        <div>
            <Content style={{padding: '0 50px', marginTop: 64}}>
                <div className={"content"}>
                    {myArr.map(num => <BubbleRow number={num} key={num}/>)}
                </div>
            </Content>
            <TimerMenu toggle$={toggle$}/>
        </div>


    );
}

export default ExamContent;