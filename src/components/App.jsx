// import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import { Wrapper } from "./App.styled";
import { useState } from "react";

function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = type => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    // const total = countTotalFeedback();
      return Math.trunc((good / countTotalFeedback()) * 100);
  };

  const state = { good, neutral, bad };
  const total = countTotalFeedback();
    
  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(state)} addFeedback={addFeedback} />
      </Section>

      
      <Section title="Statistics">
        {total === 0 ?
          (<Notification message="No feedback given" />) :
          (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positiveFeedback={countPositiveFeedbackPercentage()} />)
        }
      </Section>
    </Wrapper>
  );
};

export default App;
