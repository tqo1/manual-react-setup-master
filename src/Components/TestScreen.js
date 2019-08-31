import React from 'react'
import styles from "./testscreen.css"
<<<<<<< Updated upstream
=======
import Timer from './timer'
import Canvas from './draw'
>>>>>>> Stashed changes
export default class TestScreen extends React.Component {
    
    render() {
        const {testData, submitHandler} = this.props
<<<<<<< Updated upstream
        return <div>
            <h1>{testData.testTitle}  Time Limit: {testData.overallTimeInSec} seconds</h1>
            <div>
=======
        return <div className="appContainer">
            <Timer/>
            <Canvas/>
            
            <div className="testContainer">
>>>>>>> Stashed changes
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