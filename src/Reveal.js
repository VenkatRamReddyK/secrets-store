import React, { useState, useEffect } from 'react'

import { Container, Form, Row, Col, Toast, Button } from 'react-bootstrap';

export default function Reveal() {
    const [gender, setGender] = useState('temp');
    const [name, setname] = useState("name");
    const [show, setShow] = useState(false);
    const [infoText, setinfoText] = useState('');
    const [isValidForm, setisValidForm] = useState(false);


    function validateForm() {
        if (gender?.length <= 3)
            return false;

        if (name?.length <= 4)
            return false;
            console.log("cakked",gender)
        setisValidForm(true);
    }

    useEffect(() => {
        validateForm()
    }, [name,gender]);


    function saveData(params) {
        if(isValidForm){
            console.log("name is ",name," Value is",gender);
            setinfoText("Got your Opinion");
        setShow(true);
        }
        else{
            setinfoText("Please Make sure your select a gender and insert Passcode which is greater than 5 characters ");
        setShow(true);
        }
    }
    return (
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
                                                        <label className="sr-only">Name</label>
                                                        <input type="text" className="form-control" placeholder="Your Full Name" onChange={(e) => setname(e.target.value)} />
                                                    </div>
                                                </Col>

                                                <Col md={6}>
                                                    <div className="form-group">
                                                        <label className="sr-only inputsHeading">Gender</label>
                                                        <Form.Select aria-label="Default select example" onChange={(e) => setGender(e.target.value)}>
                                                            <option value="no">Select the Gender</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </Form.Select>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <Button
                                            onClick={()=>saveData()}
                                            disabled={!isValidForm}
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
    )
}
