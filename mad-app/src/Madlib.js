// mad-app/src/Madlib.js
import React, { useState } from 'react';

const stories = [
  `One day, a [adjective] [noun1] decided to go on an adventure. It wore a bright [color] hat and packed a small bag filled with snacks. Along the way, the [noun1] met a friendly [noun2] who offered to join in on the journey. Together, they explored hidden forests, crossed sparkling rivers, and shared stories under the stars, making the day one they would never forget.`,
  `In a distant land, there was a [adjective] castle built on top of a [noun1]. The castle walls were painted a stunning [color] that could be seen from miles away. Every day, the king would sit on his throne made from a giant [noun2], gazing over his kingdom with pride. The townsfolk admired the castle's beauty, but they were always curious about the strange [noun1] it was built upon.`,
  `Once upon a time, a group of explorers set sail on a [noun1] across the vast ocean. The captain, a [adjective] leader, was known for wearing a [color] coat that flapped in the wind as they journeyed into the unknown. After weeks at sea, they finally discovered a mysterious island where a giant [noun2] lay in the middle of the jungle. Little did they know, the [noun2] held the secret to a hidden treasure.`
];

const Madlib = () => {
  const [formData, setFormData] = useState({
    noun1: '',
    noun2: '',
    adjective: '',
    color: ''
  });

  const [story, setStory] = useState('');
  const [selectedStory, setSelectedStory] = useState(stories[0]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleStoryChange = (e) => {
    setSelectedStory(stories[e.target.value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { noun1, noun2, adjective, color } = formData;
    const newStory = selectedStory
      .replace(/\[noun1\]/g, noun1)
      .replace(/\[noun2\]/g, noun2)
      .replace(/\[adjective\]/g, adjective)
      .replace(/\[color\]/g, color);
    setStory(newStory);
  };

  const handleRestart = () => {
    setFormData({
      noun1: '',
      noun2: '',
      adjective: '',
      color: ''
    });
    setStory('');
  };

  const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

  return (
    <div>
      {!story ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Select Story:</label>
            <select onChange={handleStoryChange}>
              <option value="0">Story 1</option>
              <option value="1">Story 2</option>
              <option value="2">Story 3</option>
            </select>
          </div>
          <div>
            <label>Noun 1:</label>
            <input type="text" name="noun1" value={formData.noun1} onChange={handleChange} required />
          </div>
          <div>
            <label>Noun 2:</label>
            <input type="text" name="noun2" value={formData.noun2} onChange={handleChange} required />
          </div>
          <div>
            <label>Adjective:</label>
            <input type="text" name="adjective" value={formData.adjective} onChange={handleChange} required />
          </div>
          <div>
            <label>Color:</label>
            <input type="text" name="color" value={formData.color} onChange={handleChange} required />
          </div>
          <button type="submit" disabled={!isFormValid}>Get Story</button>
        </form>
      ) : (
        <div>
          <p>{story}</p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default Madlib;