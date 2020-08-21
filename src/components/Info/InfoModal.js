import React from "react";
import {Tooltip, Typography, Divider} from "antd";
import FeatureList from "./FeatureList";

const {Paragraph, Text} = Typography;

const InfoModal = () => {
    return (
        <Paragraph>
            <Text>Hey there! Welcome to Exam Simulator!</Text>
            <Divider orientation={"left"}>What is Exam Simulator?</Divider>
            <Text>
                You might be wondering what this is. Exam Simulator at its core was designed for taking the SAT test.
                I needed to take practice exams so that I can improve my score, but the issue is that if I were to
                just use a PDF practice test I found online, I would be needing to write on a piece of paper all my
                answers to
                <Tooltip title={"Excluding a few math questions..."}>
                    <strong> MULTIPLE CHOICE QUESTIONS</strong>
                </Tooltip>. This would mean that I would use my entire keyboard to write 4 letters. I didn't like
                this idea, so I decided to create an alternative, which is what you're on right now!
            </Text>
            <Divider orientation={"left"}>What does Exam Simulator do?</Divider>
            <Text>
                This entire site is dedicated to simulating an
                <Tooltip title={"Shocking isn't it?"}> Exam</Tooltip>. But instead of making this project tunnel visioned, I've decided to make this more usable.
                This means that I have made it so that you can customize your own Exam on this test to your liking.
                In a minute you will be creating an exam that you will take shortly after. You get to make your own
                "Sections" with a variable amount of questions and timings (like the 4 sections on the SAT).
                <strong> Because I don't want to pay for hosting costs, this project is purely front-ended, meaning that
                    there are no accounts or logins. There is no way to come back to a test when you close the tab.
                    I have taken precautions against these such events, but don't expect to revisit the same test if you
                    accidentally close the site.
                </strong>
            </Text>
            <Divider orientation={"left"}>Conclusion</Divider>
            <Text>
                I hope that you can use this tool effectively and that you will be able to improve your scores using
                this tool. The full feature list of what this tool offers and doesn't offer is shown below, and
                I will try to implement more features.
            </Text>
            <FeatureList/>
            <Divider/>
            <Text>
                Last thing, this entire project is open sourced and available on GitHub. Check it out there!
            </Text>
        </Paragraph>


    )
}

export default InfoModal;