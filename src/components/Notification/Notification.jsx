import PropTypes from 'prop-types';
import { NotificText } from './Notification.styled';

const Notification = ({ message }) => {
    return (
        <div>
            <NotificText>{message}</NotificText>
        </div>
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;