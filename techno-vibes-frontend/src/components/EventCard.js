import React from 'react';
import '../styles/EventCard.css';

function EventCard({ event }) {
  const { title, venue, date, tag, image, friends, friendCount } = event;

  return (
    <div className="event-card">
      <div className="event-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="event-date">{date}</div>
        <button className="favorite-button">
          <i className="icon-heart"></i>
        </button>
      </div>
      <div className="event-info">
        <h3 className="event-title">{title}</h3>
        <p className="event-venue">{venue}</p>
        <div className="event-footer">
          {tag && <span className="event-tag">{tag}</span>}
          {friends && friends.length > 0 && (
            <div className="event-friends">
              <div className="friend-avatars">
                {friends.map((friend, index) => (
                  <img key={index} src={friend} alt="Friend" className="friend-avatar" />
                ))}
              </div>
              <span>{friendCount} ami·e·s</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
