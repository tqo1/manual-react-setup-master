import React from 'react'
import styles from './testscreen.css'
import Timer from './timer'

export default class TestScreen extends React.Component {
    
    render() {
        const {testData, submitHandler} = this.props
        return <div>
            <Timer/>;
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