import React, {useState} from "react";
import {Slider, InputNumber, Row, Col} from "antd";

const TimerSlider = ({min, max, units}) => {
    const [inputValue, setInputValue] = useState(1);

    const singularFormatter = value => {
        if (value <= 1) return `${value} ${units}`
        else return `${value} ${units}s`
    }

    return (
        <Row>
            <Col span={12}>
                <Slider min={min}
                        max={max}
                        onChange={setInputValue}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                />
            </Col>
            <Col span={4}>
                <InputNumber min={min}
                             max={max}
                             style={{margin: '0 16px', width:"125px"}}
                             value={inputValue}
                             onChange={setInputValue}
                             formatter={singularFormatter}
                             size={"large"}
                />
            </Col>
        </Row>
    )
}

export default TimerSlider;