import React, { useState } from 'react';
import Confetti from 'react-confetti'
import { Container, Form, Row, Col } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';


export default function input() {
    const [gender, setGender] = useState('');
    const [passCode, setpassCode] = useState(0);
    const ariaLabel = "Enter the Passcode"
    const { width, height } = '100%';

    const saveData = (inputData) => {
        // const headers = {
        //     'content-type': 'text/json;charset=utf-8',
        //     // 'Access-Control-Allow-Headers': '*',
        //     // 'Access-Control-Allow-Origin': '*',
        // };
        console.log("In Save Data");
        let data = { gender: 'm', passcode: 'tanvi' };
        // let data = { gender: gender, passcode: passCode };
        url = 'https://gender-reveals.s3.amazonaws.com/data/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVOEG5XWC35GBSXXY%2F20211010%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211010T155502Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=de41201250367819b4f7ec44d3e3aa6690b53d938b7933bde8d82d06b8427b84'
        axios.put(url, data).then((response) => {
            console.log('response: ', response);
        });
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
                <section id="cover" class="min-vh-100">
                    <div id="cover-caption">
                        <div class="container">
                            <div class="row text-white">
                                <div class="col-xl-8 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                                    <h1 class="display-4 py-2">Now it's your turn to Guess</h1>
                                    <div class="px-2">
                                        <Form action="" class="justify-content-center forms-inline">
                                            <Container>
                                                <Row>
                                                    <Col md={6}>
                                                        <div class="form-group">
                                                            <label class="sr-only inputsHeading">Something About Gender</label>
                                                            <Form.Select aria-label="Default select example">
                                                                <option>Select the Gender</option>
                                                                <option value="m">Male</option>
                                                                <option value="f">Female</option>
                                                            </Form.Select>
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div class="form-group">
                                                            <label class="sr-only">Passcode</label>
                                                            <input type="text" class="form-control" placeholder="********" />
                                                        </div>
                                                    </Col>

                                                </Row>
                                            </Container>
                                            <Button
                                                type="submit"
                                                onClick={() => saveData()}
                                                class="btn btn-primary btn-lg submitButton">
                                                Send My Answer
                                            </Button>
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
