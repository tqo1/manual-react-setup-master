import React from 'react'
import { Column, Row } from 'simple-flexbox';

export default class TestScreen extends React.Component {
    
    render() {
        const {testData, submitHandler} = this.props
        return <div>
            <h1>{testData.testTitle}  Time Limit: {testData.overallTimeInSec} seconds</h1>
            <div>
                <Column flexGrow={1}>
                    <Row vertical = 'center'>
                        <Column flexGrow={1} horizontal='center'>
                            <h3> Column 1 </h3>
                            <span> column 1 content </span>
                        </Column>
                        <Column flexGrow={1} horizontal='center'>
                            <h3> Column 2 </h3>
                            <span> column 2 content </span>
                        </Column>
                    </Row>
                </Column>
                {/* <div className="passageSection">
                    {testData.passages[0]["passageTitle"]}
                    
                </div> */}
                <div className="questionSection">
                 
                </div>
            </div>
            
            <div>Jump to question:</div>
            <div onClick={submitHandler}>Submit</div>
          
        </div>
    }
}