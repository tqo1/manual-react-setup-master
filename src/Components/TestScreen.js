import React from 'react'

export default class TestScreen extends React.Component {
    
    render() {
        const {testData, submitHandler} = this.props
        return <div>
            <h1>{testData.testTitle}  Time Limit: {testData.overallTimeInSec} seconds</h1>
            <div>
                <div className="passageSection">

                </div>
                <div className="questionSection">

                </div>
            </div>
            <div>Jump to question:</div>
            <div onClick={submitHandler}>Submit</div>

        </div>
    }
}