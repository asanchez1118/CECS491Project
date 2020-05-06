//  Setting Page

import Component from 'react';
import { 
    Link, 
    withRouter 
} from 'react-router-dom';
import {
    Alert,
    ButtonGroup,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Container,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

const [modal, setModal] = useState(false);

// Toggles any modal
toggle = () => {
    this.setState({
        modal: !this.state.modal
    })
}

const Settings = () => (
    <Container>
        <row>
            {/* Page Title, (centered on top) */}
             <Col>
                <View style = {
                    {
                        flex: 1,
                        flexDirections: 'column',
                        justifyContent: 'center'
                    }
                }>
                    <h1>USER SETTINGS</h1>
                </View>
            </Col>
        </row>
        <br />
        <br />
        <br />
        <row>   
            <Col>
                {/* email label */}
                <View style = {
                    {
                        flex: 1,
                        flexDirections: 'column',
                        justifyContent: 'right'
                    }
                }>
                    email:  
                </View> 
            </Col>                  
            <Col>
                {/* replace with user email here */}
                <View style = {
                    {
                        flex: 1,
                        flexDirections: 'column',
                        justifyContent: 'left'
                    }
                }>
                    test@example.com  
                </View> 
            </Col>   
            <Col>
                {/* update email button --> loads modal with form to update email */}
                <View style = {
                    {
                        flex: 1,
                        flexDirections: 'column',
                        justifyContent: 'left'
                    }
                }>
                    <Button color="primary" onClick={toggle}>Update Email</Button>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Update Email Addresss</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="updateEmail">Email:   </Label>
                                    <input ref="email_1" type="email" size="28" placeholder="email address" id="updateEmail_1" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="updateEmail">Email:   </Label>
                                    <input ref="email_1" type="email" size="28" placeholder="enter email twice to confirm" id="updateEmail_2" />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Container>
                                <row></row>
                                <row>
                                    <View style = {
                                        {
                                            flex: 1,
                                            flexDirections: 'column',
                                            justifyContent: 'right'
                                        }
                                    }>
                                        <Col>
                                            <Button onClick={} color="secondary">Cancel</Button>
                                        </Col>
                                    </View>
                                    <View style = {
                                        {
                                            flex: 1,
                                            flexDirections: 'column',
                                            justifyContent: 'right'
                                        }
                                    }>
                                        <Col>
                                            { /* connect to back end for form submittal */ }
                                            <Button onClick={} color="primary">Apply</Button>{' '}  
                                        </Col>
                                    </View>
                                </row>
                            </Container>
                        </ModalFooter>
                    </Modal>
                </View> 
            </Col>          
        </row>
        <row>
        <Col>
            <View style = {
                    {
                        flex: 1,
                        flexDirections: 'column',
                        justifyContent: 'right'
                    }
                }>
                    Name:  
            </View> 
        </Col>                  
        <Col>
            <View style = {
                {
                    flex: 1,
                    flexDirections: 'column',
                    justifyContent: 'left'
                }
            }>
                John Doe 
            </View> 
        </Col>   
        <Col>
           {/* update name button --> loads modal with form to update name */}
            <View style = {
                {
                    flex: 1,
                    flexDirections: 'column',
                    justifyContent: 'left'
                }
            }>
                <Button color="primary" onClick={toggle}>Update Name</Button>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Update Name</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="updateFname">First Name:   </Label>
                                    <input ref="fnameUpdate" type="text" size="28" placeholder="first name" id="fname_update" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="updateLname">Last Name:    </Label>
                                    <input ref="lnameUpdate" type="text" size="28" placeholder="last name" id="lname_update" />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Container>
                                <row />
                                <row>
                                    <View style = {
                                        {
                                            flex: 1,
                                            flexDirections: 'column',
                                            justifyContent: 'right'
                                        }
                                    }>
                                        <Col>
                                            <Button onClick={} color="secondary">Cancel</Button>
                                        </Col>
                                    </View>
                                </row>
                                <row>
                                    <View style = {
                                        {
                                            flex: 1,
                                            flexDirections: 'column',
                                            justifyContent: 'right'
                                        }
                                    }>
                                        <Col>
                                            { /* connect to back end for form submittal */ }
                                            <Button onClick={} color="primary">Apply</Button>{' '}
                                        </Col>
                                    </View>
                                </row>
                            </Container>
                        </ModalFooter>
                    </Modal>
                </View> 
            </Col>          
        </row>
        <row>
            <Col></Col>
            <Col></Col>
            <Col>
                <View style = {
                    {
                        flex: 1,
                        flexDirections: 'column',
                        justifyContent: 'left'
                    }
                }>
                    <Button color="primary">Change Password</Button>{' '}
                </View>
            </Col>
        </row>
        <row>
            <Col>
                <View style = {
                    {
                        flex: 1,
                        flexDirections: 'column',
                        justifyContent: 'center'
                    }
                }>
                    <Button color="warning">DELETE ACCOUNT</Button>
                    <modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>DELETE ACCOUNT</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormText>To ensure you wish to delete your account, please enter your email address twice and type the specified phrase.</FormText>
                                <FormGroup>
                                    <FormText>
                                        email:   
                                    </FormText>
                                    <input ref="email_1_delete" type="email" size="28" placeholder="email address" id="email_delete_1" />
                                </FormGroup>
                                <FormGroup>
                                    <FormText>
                                        email:   
                                    </FormText>
                                    <input ref="email_2_delete" type="email" size="28" placeholder="email address" id="email_delete_2" />
                                </FormGroup>
                                <FormGroup>
                                    <FormText>
                                        Please enter the phrase:  I no longer wish for my Hangout account to be open.   
                                    </FormText>
                                    <input ref="phrase_delete" type="text" size="28" placeholder="enter phrase here" id="delete_phrase" />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </modal>
                </View>
            </Col>
        </row>
        <row>
            <Col>
                <View style = {
                    {
                        flex: 1,
                        flexDirections: 'column',
                        justifyContent: 'center'
                    }
                }>
                    { /* connect to back end for form submittal */ }
                    <Button color="secondary">About</Button>  
                </View>
            </Col>
        </row>
    </Container>

);

export default Settings;