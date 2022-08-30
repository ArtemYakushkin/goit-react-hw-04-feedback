import PropTypes from 'prop-types';
import {StatisticsText, TextValue} from "./Statistics.styled"

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return (
        <div>
            <StatisticsText>Good: <TextValue>{good}</TextValue></StatisticsText>
            <StatisticsText>Neutral: <TextValue>{neutral}</TextValue></StatisticsText>
            <StatisticsText>Bad: <TextValue>{bad}</TextValue></StatisticsText>
            <StatisticsText>Total: <TextValue>{total}</TextValue></StatisticsText>
            <StatisticsText>Positive feedback: <TextValue>{positiveFeedback}%</TextValue></StatisticsText>
        </div>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;