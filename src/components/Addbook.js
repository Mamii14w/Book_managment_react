import axios from "axios";
import React, {useState} from "react";
import {Button,Card,CardBody,CardFooter,Col,Countainer,Form,Input,InputGroup,Row } from "reactstrap";

function addbook(){
    const[book,setBook] = useState({Name:'', Author: ''});
    const ApiUrl = 'https://localhost:44366/api/books/AddNewBook';

    const AddNewBook = (e) =>{
        e.preventDefault();
        const data = {Name: book.Name, Author: book.Author};
        axios.post(ApiUrl, data)
        .then((result)=>{
            props.history.push('/BookList')
        });
    }
const onChange = (e) =>{
    e.persist();
    setBook({...book, [e.target.name]: e.target.value});
}
    return(
       <div className="app flex-row align-items-center">
        <Countainer>
            <Row className="justify-content-center">
                <Col md="12" lg="10" xl="8" >
                    <Card className="mx-4"> 
                    <CardBody className="p-4">
                        <Form onSubmit={AddNewBook}>
                            <h1>Add New Book</h1>
                            <InputGroup className="mb-3">
                                <Input type="text" name="Name" id="Name" value={book.Name} onChange={onChange} placeholder="Name"  />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Input type="text" name="Author" id="Author" value={book.Author} onChange={onChange} placeholder="Author"  />
                            </InputGroup>
                            <CardFooter className="p-4">
                                <Row>
                                    <Col xs="12" sm="6">
                                        <Button type="submit" className="btn btn-info mb-1" block><span>save</span></Button>
                                    </Col>
                                    <Col xs="12" sm="6">
                                        <Button className="btn btn-info mb-1" block><span>cancel</span></Button>
                                    </Col>
                                </Row>
                            </CardFooter>
                        </Form>
                    </CardBody>
                    </Card>
                </Col>
            </Row>
        </Countainer>
       </div>
    )
}

export default addbook;