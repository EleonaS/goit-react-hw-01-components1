import s from './FriendList.module.css';
import PropTypes from 'prop-types';
import Friend from '../Friend/Friend';

function FriendList({ friends }) {
  return (
    <div>
      <ul className={s.container}>
        {friends.map(
          ({
            id,
            name,
            avatar,
            isOnline,
          }) => (
            <Friend
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          ),
        )}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
