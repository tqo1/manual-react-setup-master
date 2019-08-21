import React from 'react'
import { Container, Row, Col } from 'reactstrap';



export default class TestScreen extends React.Component {
    // timer-trial
    // 
    constructor (props) {
        super(props)
        this.state = {count: 1}
      }
      componentWillUnmount () {
        clearInterval(this.timer)
      }
      tick () {
        this.setState({count: (this.state.count + 1)})
      }
      startTimer () {
        clearInterval(this.timer)
        this.timer = setInterval(this.tick.bind(this), 1000)
      }
      stopTimer () {
        clearInterval(this.timer)
      }
    // 
    // 
    render() {
        const {testData, submitHandler} = this.props
        return <div>
            <h1>{testData.testTitle}  Time Limit: {testData.overallTimeInSec} seconds</h1>
           
            {/* Timer section: */}
            <div>
<<<<<<< Updated upstream
                <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                </Container>

=======
            <div className='timer'>
                <h1>{this.state.count}</h1>
                <div>
                    <button onClick={this.startTimer.bind(this)}>Start</button>
                    <button onClick={this.stopTimer.bind(this)}>Stop</button>
                </div>
            </div>
            {/* End of Timer section: */}

                <Column flexGrow={1}>
                    <Row style={{ backgroundColor: 'blue' }}
                        
                        vertical = 'center'
                        wrap
                        horizontal="spaced"
                        style={{ marginTop: 100 }}>
                        <Column flexGrow={1} horizontal='center'>
                            <h3> Column 1 </h3>
                            <span style={{ marginTop: 100 }}
                            > column 1 content </span>
                        </Column>
                        <Column flexGrow={1} horizontal='center'>
                            <h3> Column 2 </h3>
                            <span> {testData.passages[0]["passageTitle"]}
                                  {testData.passages[0]["questions"][0]["question"]} </span>
                        </Column>
                        <Column flexGrow={1} horizontal='center'>
                            <h3> Column 2 </h3>
                            <span> {testData.passages[0]["passageTitle"]}
                                  {testData.passages[0]["questions"][0]["question"]} </span>
                        </Column>
                    </Row>
                </Column>
>>>>>>> Stashed changes
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







