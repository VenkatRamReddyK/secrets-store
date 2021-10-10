import React, { useState } from 'react';
import Confetti from 'react-confetti'
import { Container, Form, Row, Col } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';


export default function input() {
    const [Gender, setGender] = useState('');
    const [passCode, setpassCode] = useState(0);
    const ariaLabel = "Enter the Passcode"
    const { width, height } = '100%';
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
                                                                <option value="1">Male</option>
                                                                <option value="2">Female</option>
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
                                            <Button type="submit" class="btn btn-primary btn-lg submitButton">Send My Answer</Button>
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
