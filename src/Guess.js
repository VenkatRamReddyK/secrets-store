import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti'
import { Container, Form, Row, Col, Toast, Button } from 'react-bootstrap';
import axios from 'axios';

const Cryptr = require('cryptr');


export default function Guess() {


    const [gender, setGender] = useState('');
    const [passCode, setpassCode] = useState("");
    const ariaLabel = "Enter the Passcode"
    const { width, height } = '100%';
    const [show, setShow] = useState(false);
    const [infoText, setinfoText] = useState('');

    useEffect(() => {
        getData();
    }, []);
    function validateForm(gender, passCode) {
        if (gender.length <= 3)
            return false;

        if (passCode.length <= 4)
            return false;

        console.log(gender.length, "Asdasd", passCode.length);
        return true;
    }

    const getData = () => {
        console.log('In Get Data...');
        let url =
            'https://gender-reveals.s3.amazonaws.com/data/guess.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVOEG5XWC35GBSXXY%2F20211013%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211013T044343Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6a905f480bfab4ed69dc0801c760f03069f2393e7f2872931318646f1a0799d0';

        axios.get(url).then((response) => {
            console.log('response: ', response.data);
        });
    };

    function saveData() {
        // let data = { gender: 'm', passcode: 'tanvi' };
        if (validateForm(gender, passCode)) {
            const encryptedGender = gender;
            const encryptedPasscode = passCode;

            // const decryptedString = cryptr.decrypt(encryptedGender);
            let data = { gender: encryptedGender, passcode: encryptedPasscode };
            const url = 'https://gender-reveals.s3.amazonaws.com/data/guess.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVOEG5XWC35GBSXXY%2F20211013%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211013T044343Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fa4980eca12b542dd45fda5ab7d795b9cd89c9c91e5e500e9158f4c7d4bf3500'
            axios.put(url, data).then((response) => {
                setinfoText("Response Completed");
                setShow(true);
                console.log('response: ', data);
            });
        }
        else {
            setinfoText("Please Make sure your select a gender and insert Passcode which is greater than 5 characters");
            setShow(true);
        }
    };

    return (
        <div>
            <Confetti
                width={width}
                height={height}
                // drawShape={ctx => {
                //     ctx.beginPath()
                //     for (let i = 0; i < 22; i++) {
                //         const angle = 0.35 * i
                //         const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
                //         const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
                //         ctx.lineTo(x, y)
                //     }
                //     ctx.stroke()
                //     ctx.closePath()
                // }}
                gravity={0.09}
                tweenDuration={1000}
            />
            <div >
                <section id="cover" className="min-vh-100">
                    <div id="cover-caption">
                        <div className="container">
                            <div className="row text-white">
                                <div className="col-xl-10 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-5">
                                    <h1 className="display-4 py-2">Now it's your turn to Guess</h1>
                                    <div className="px-2">
                                        <Form className="justify-content-center forms-inline">
                                            <Container>
                                                <Row>
                                                    <Col md={6}>
                                                        <div className="form-group">
                                                            <label className="sr-only inputsHeading">Gender</label>
                                                            <Form.Select aria-label="Default select example" onChange={(e) => setGender(e.target.value)}>
                                                                <option>Select the Gender</option>
                                                                <option value="male">Male</option>
                                                                <option value="female">Female</option>
                                                            </Form.Select>
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="form-group">
                                                            <label className="sr-only">Passcode</label>
                                                            <input type="text" className="form-control" placeholder="********" value={passCode} onChange={(e) => setpassCode(e.target.value)} />
                                                        </div>
                                                    </Col>

                                                </Row>
                                            </Container>
                                            <Button
                                                onClick={() => saveData()}
                                                className="btn btn-primary btn-lg submitButton">
                                                Send My Answer
                                            </Button>
                                            <Toast onClose={() => setShow(false)} show={show} delay={6000} autohide>
                                                <Toast.Header>
                                                    <h3 className="me-auto">{infoText}</h3>
                                                </Toast.Header>
                                            </Toast>
                                        </Form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
