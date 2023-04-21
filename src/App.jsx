import { useState } from "react";
import people from "./data";
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const {name, image, job, text} = people[index]
 
  const prevPerson = () => {
    setIndex(prevIndex => {
      const newNum = (prevIndex - 1 + people.length) % people.length;
      return newNum;
    })
  }
  const nextPerson = () => {
    setIndex(prevPerson => {
      const nextNum = (prevPerson + 1) % people.length;
      return nextNum;
    })
  }

  const randomPerson = () => {
    const randomNumber = Math.floor(Math.random() * people.length);
    if(randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % people.length;
    setIndex(newIndex);
  }
 
  return <main>
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
      <button className="prev-btn" onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight />
      </button>
      </div>
      <button className="btn btn-hipster" onClick={randomPerson}>Surprise me</button>
    </article>
  </main>
};
export default App;
