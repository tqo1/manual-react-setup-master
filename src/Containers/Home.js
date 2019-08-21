import React from 'react'
import Config from './../config'
import TestScreen from '../Components/TestScreen'


export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            ...Config,
            currentPassage: 1,
            submitted: false
        }

    }

    nextPassage = () => {
        alert("next passage")
    }


    submitTest = () => {
        alert("is submitting")
        this.setState({submitted: true})
    }

    render() {

        return <div>
            <TestScreen
            // passages = {Config} passages={this.passages} 
            testData = {Config} submitHandler={this.submitTest}/>
            </div>
    }
}