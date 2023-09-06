
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
  return <div className='accordion'>
    {data.map((ele, i) => <AccordionItem key={i} title={ele.title} text={ele.text} num={i} />)}
  </div>;
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(num, 'number');

  const handleToggle = () => {
    setIsOpen((isOn) => !isOn)
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? "-" : "+"}</p>

      {isOpen && <div className='content-box'>{text}</div>}
    </div>
  )
}
