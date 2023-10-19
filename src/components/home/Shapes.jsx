import React from 'react';

const Shapes = () => {
    const words = [
      { text: 'Machine Learning',rotation: 'rotate(-10deg)', fontSize: '24px', className: 's1',scale: 'scale(1)' },
      { text: 'Artificial Intelligence', rotation: 'rotate(15deg)', fontSize: '30px', className: 's2', scale: 'scale(1)' },
      { text: 'Python', rotation: 'rotate(-20deg)', fontSize: '28px', className: 's3', scale: 'scale(1)' },
      { text: 'Data Science', rotation: 'rotate(-5deg)', fontSize: '28px', className: 's4', scale: 'scale(1)' },
      { text: 'Big Data', rotation: 'rotate(-5deg)', fontSize: '28px', className: 's5', scale: 'scale(1)' },
      { text: 'Linear Regression', rotation: 'rotate(5deg)', fontSize: '28px', className: 's6', scale: 'scale(1)' },
      { text: 'Classification', rotation: 'rotate(5deg)', fontSize: '28px', className: 's7', scale: 'scale(1)' },
      { text: 'Natural Language Processing', rotation: 'rotate(25deg)', fontSize: '28px', className: 's8', scale: 'scale(1)' },
      { text: 'Software Engineer', rotation: 'rotate(5deg)', fontSize: '28px', className: 's9', scale: 'scale(1)' },
      { text: 'Neural Networks', rotation: 'rotate(5deg)', fontSize: '28px', className: 's10', scale: 'scale(1)' },
      { text: 'Supervised Learning', rotation: 'rotate(5deg)', fontSize: '28px', className: 's11', scale: 'scale(1)' },
    ];

    return (
      <div className="words">
  {words.map((word, idx) => (
      <span 
          key={idx} 
          className={`shape ${word.className}`} 
          style={{ 
              transform: `${word.rotation} ${word.scale}`, 
              fontSize: word.fontSize,
          }}
      >
          {word.text}
      </span>
  ))}
      </div>
    );
}

export default Shapes;