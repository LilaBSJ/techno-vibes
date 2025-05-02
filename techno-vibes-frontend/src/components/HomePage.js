import React, { useState, useRef } from 'react';
import EventCard from './EventCard';
import NavigationBar from './NavigationBar';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/HomePage.css';

function HomePage(){
const upcomingEvents = [
    {
      id: 1,
      title: 'Cycles : Ben Klock',
      venue: 'Mia Mao',
      tag: 'MARRON',
      date: 'ven 9 mai',
      image: '/images/event1.jpg',
      friends: []
    },
    {
      id: 2,
      title: 'HAÏKU X Desiree',
      venue: 'GATE CLUB PARIS',
      date: 'mer 30 avr.',
      time: '04:25 H',
      image: '/images/event2.jpg',
      friends: ['/images/friend1.jpg', '/images/friend2.jpg'],
      friendCount: 2
    },
    {
      id: 3,
      title: 'Circuit Invite',
      venue: 'Studio 56',
      date: 'mar 29 avr',
      tag: 'STUDIO56',
      image: '/images/event3.jpg',
      friends: []
    },
    {
      id: 4,
      title: 'Cycles : Ben Klock',
      venue: 'Mia Mao',
      tag: 'MARRON',
      date: 'ven 9 mai',
      image: '/images/event1.jpg',
      friends: []
    },
    {
      id: 5,
      title: 'HAÏKU X Desiree',
      venue: 'GATE CLUB PARIS',
      date: 'mer 30 avr.',
      time: '04:25 H',
      image: '/images/event2.jpg',
      friends: ['/images/friend1.jpg', '/images/friend2.jpg'],
      friendCount: 2
    },
    {
      id: 6,
      title: 'Circuit Invite',
      venue: 'Studio 56',
      date: 'mar 29 avr',
      tag: 'STUDIO56',
      image: '/images/event3.jpg',
      friends: []
    },
  ];
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="home-page">
      <NavigationBar />
      <div className="top-header">
      <div className="date-selector" onClick={() => setSelectedDate(new Date())}>
        <i className="icon-calendar"></i>
      </div>
      {selectedDate && (
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline 
          />
        )}
      <div className="filter-selector">
        <span>Filtres</span>
      </div>
      <div className="favorite-icon">
        <i className="icon-heart"></i>
      </div>
    </div>
    <div className="containeur-wrapper">
  <div className="left-images">
    <img src="/images/dancefloor.jpg" alt="dancefloor" className="side-image" />
    <img src="/images/crowd.jpg" alt="dancefloor" className="side-image" />
  </div>

  <div className="right-images">
    <img src="/images/technogirl.jpg" alt="technogirl" className="side-image" />
  </div>
</div>

<div className="carousel-wrapper">
  <div className="carousel-buttons">
    <button onClick={scrollLeft} className="left-arrow">⬅</button>
    
    <div className="events-carousel" ref={carouselRef}>
      {upcomingEvents.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>

    <button onClick={scrollRight} className="right-arrow">➡</button>
  </div>
</div>
        </div>
  
  );
}

export default HomePage;