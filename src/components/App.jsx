import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import { Wrapper } from "./App.styled";

class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  addFeedback = e => {
    if (e.target.nodeName !== 'BUTTON') return;
    const name = e.target.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
      return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
  };
    
  render() {
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} addFeedback={this.addFeedback} />
        </Section>

        
        <Section title="Statistics">
          {this.countTotalFeedback() ?
            (<Statistics {...this.state} total={this.countTotalFeedback()} positiveFeedback={this.countPositiveFeedbackPercentage()} />) :
            (<Notification message="No feedback given" />)
          }
        </Section>
      </Wrapper>
    )
  }
};

export default App;
