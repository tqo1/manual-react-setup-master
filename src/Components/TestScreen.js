import React from 'react'
import { Container, Row, Col } from 'reactstrap';

export default class TestScreen extends React.Component {
    
    render() {
        const {testData, submitHandler} = this.props
        return <div>
            <h1>{testData.testTitle}  Time Limit: {testData.overallTimeInSec} seconds</h1>
            <div>
                <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                </Container>

                <div className="passageSection">
                    {testData.passages[0]["passageTitle"]}
                    
                </div>
                <div className="questionSection">
                    Lol
                </div>
            </div>
            
            <div>Jump to question:</div>
            <div onClick={submitHandler}>Submit</div>
          
        </div>
    }
}