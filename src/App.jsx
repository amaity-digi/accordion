
import { useState } from 'react';
import './App.css'

const data = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

function App() {

  return (
    <div>
      <Accordion data={data} />
    </div>
  )
}

export default App


function Accordion({ data }) {
  const [currentOpen, setCurrentOpen] = useState(null);

  return <div className='accordion'>
    {data.map((ele, i) => (
      <AccordionItem
        currentOpen={currentOpen}
        onOpen={setCurrentOpen}
        key={i}
        title={ele.title}
        num={i}>
        {ele.text}
      </AccordionItem>
    ))}

    <AccordionItem
      currentOpen={currentOpen}
      onOpen={setCurrentOpen}
      key="test 1"
      title="Test 1"
      num={12}>
      <p>Allow React developers to: </p>
      <ul>
        <li>Break up UI into a components</li>
        <li>Make components reusable!</li>
      </ul>
    </AccordionItem>
  </div>;
}

function AccordionItem({ num, title, currentOpen, onOpen, children }) {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = num === currentOpen;

  const handleToggle = () => {
    // setIsOpen((isOn) => !isOn)
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle} style={{color: "white"}}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? "-" : "+"}</p>

      {isOpen && <div className='content-box'>{children}</div>}
    </div>
  )
}
