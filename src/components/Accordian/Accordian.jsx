import React, { useState } from 'react';
import './Accordian.css';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const contentList = [
    {
      title: 'What is tech offshoring and how does it differ from outsourcing?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.'
    },
    {
      title: 'How ensure data security offshoring?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.'
    },
    {
      title: 'Primary benefits of tech offshoring?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.'
    },
    {
      title: 'How are offshoring costs determined?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.'
    },
    {
      title: 'How ensure offshore work quality?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.'
    },
    {
      title: 'Handle time zone differences offshore?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.'
    }
  ];

  return (
    <div className='accordion'>
        <div className='accordion-wrapper'>
      {contentList.map((item, index) => (
        <div key={index} className={`contentBx ${activeIndex === index ? 'active' : ''}`} onClick={() => handleToggle(index)}>
          <div className='label'>{item.title}</div>
          {activeIndex === index && (
            <div className='content'>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Accordion;
