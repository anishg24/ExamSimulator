import React from "react";
import {Tooltip, Typography, Divider} from "antd";

const {Paragraph, Text} = Typography;
const SetupModal = () => {
    return (
        <div>
            <Paragraph>
                <strong>DO NOT EXIT THIS WEBSITE WHEN YOU TAKE YOUR TEST!</strong>
                <br/>
                <Text>
                    This includes:
                    <ul>
                        <li>Closing the tab</li>
                        <li>Closing your browser</li>
                        <li>Refreshing the page</li>
                        <li>Clicking the "back" button</li>
                        <li>Anything else that involves closing this page!</li>
                    </ul>
                </Text>
                <strong>DOING SO MAY RESULT IN YOUR TEST NOT GETTING SAVED CORRECTLY!</strong>
            </Paragraph>
            <Divider orientation={"center"}>Why shouldn't I?</Divider>
            <Paragraph ellipsis={{rows: 2, expandable: true, symbol: "more"}}>
                <Text>
                    Exam Simulator is completely built on the front end. This design choice has some drawbacks but some
                    benefits as well.
                </Text>
                <Divider orientation={"left"}>What is the "front end"?</Divider>
                <Text>
                    You're very familiar with the "front end". A front end is essentially what you see.
                    For example, the front end of YouTube is the site where you can see all the videos to your
                    hearts content. All the things that you see when you go to www.youtube.com is the front end. In
                    a nutshell, the front end is just a pretty face to a server, or the back end.
                </Text>
                <Divider orientation={"left"}>What's the difference between the front and back end?</Divider>
                <Text>
                    There are many differences. It's like saying what's the difference between a diamond ring and the
                    diamond industry? The front end is like the diamond ring, its the finished product that the user (you)
                    will see. What goes behind it in the diamond industry you likely won't see at all. Same situation here.
                    The front end is what you see and interact with but the backend is what you don't see. The backend
                    does all the heavy lifting, and saves important information like usernames and passwords.
                </Text>
                <Divider orientation={"left"}>Why did you make this front end only?</Divider>
                <Text>
                    This choice of making the Exam Simulator project purely front end is so that I won't have to pay
                    for deployment costs. This project is hosted on GitHub pages, which is free, but difficult to
                    implement a backend in, so I omitted it.
                </Text>
            </Paragraph>
        </div>


    )
}

export default SetupModal;