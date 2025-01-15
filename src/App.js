import React, { useState, useEffect } from 'react';
import './App.css';

const CurvedText = ({ text, curvature = 20, axis = 'Y', spacingFactor = 0.5, lineHeight = 1.5, additional_class = "", fontSize }) => {
  const words = text.split(' ');
  const [lines, setLines] = useState([]);
  const [radius, setRadius] = useState(150);

  useEffect(() => {
    const updateRadius = () => {
      const viewportWidth = window.innerWidth;
      setRadius(viewportWidth / 5); // Adjust the radius dynamically based on the viewport width
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  useEffect(() => {
    const viewportWidth = window.innerWidth;
    const maxCharsPerLine = Math.floor(viewportWidth / (fontSize * 0.6)); // Allow more characters on larger screens
    const newLines = [];
    let currentLine = '';

    words.forEach((word) => {
      if ((currentLine + word).length > maxCharsPerLine) {
        newLines.push(currentLine.trim());
        currentLine = '';
      }
      currentLine += `${word} `;
    });

    if (currentLine.trim()) newLines.push(currentLine.trim());
    setLines(newLines);
  }, [text, fontSize]);

  return (
    <div className={`curved-text-container ${additional_class}`}>
      {lines.map((line, lineIndex) => (
        <div
          key={lineIndex}
          className="curved-line"
          style={{
            marginBottom: `${lineHeight}em`, // Control spacing between lines
          }}
        >
          {line.split('').map((letter, index) => {
            const angle = curvature * (index - line.length / 2);
            const xPos = Math.sin(angle * Math.PI / 180) * radius;
            const zPos = Math.cos(angle * Math.PI / 180) * radius;

            const nextAngle = curvature * (index + 1 - line.length / 2);
            const arcLength = radius * Math.abs((nextAngle - angle) * Math.PI / 180);

            return (
              <span
                key={index}
                className="curved-text-letter"
                style={{
                  transform: axis === 'Y'
                    ? `rotateY(${angle}deg) translateX(${xPos}px) translateZ(${zPos}px)`
                    : `rotateX(${angle}deg) translateY(${xPos}px) translateZ(${zPos}px)`,
                  fontSize: `${fontSize}px`, // Use dynamic font size
                  marginRight: `${(arcLength * spacingFactor) / 2}px`,
                  transformOrigin: 'center',
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [textContent, setTextContent] = useState(
    "This website is under progress! Stay tune to see Amos' Portfolio Website!"
  );

  const [fontSize, setFontSize] = useState(100); // Set initial font size

  useEffect(() => {
    const updateFontSize = () => {
      // Dynamically adjust font size based on window width
      if (window.innerWidth <= 768) {
        setFontSize(40); // Set smaller font size for mobile screens
      } else {
        setFontSize(100); // Set larger font size for larger screens
      }
    };

    updateFontSize();
    window.addEventListener('resize', updateFontSize);
    return () => window.removeEventListener('resize', updateFontSize);
  }, []); // Only run on mount and unmount

  return (
    <div className="App">
      <div className='subtitle-wrapper'>
      <CurvedText 
        text={textContent} 
        curvature={0.8} 
        axis="Y" 
        spacingFactor={0} 
        lineHeight={1.8} 
        additional_class="normal"
        fontSize={70} // Pass the font size dynamically
      />
      </div>
    </div>
  );
};

export default App;
