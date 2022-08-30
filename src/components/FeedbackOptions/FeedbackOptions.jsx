import PropTypes from 'prop-types';
import { ListBtn, Btn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, addFeedback }) => {
    return (
        <div>
            <ListBtn >
                {options.map(option => (
                    <li key={option}>
                        <Btn type="button" onClick={() => addFeedback(option)}>{option.toUpperCase()}</Btn>
                    </li>
                ))}
            </ListBtn>
        </div>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    addFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;