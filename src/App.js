import {useState} from 'react';
import Card from './components/Card';
import Image from './components/Image';
import img from './assets/image.jpg';
import {nanoid} from 'nanoid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [data] = useState([
    {title: 'Card title', text: 'Some quick text to build on the card title and make up the bulk of the card\'s content.', img: true, id: nanoid()},
    {title: 'Special title treatment', text: 'With supporting text below as a natural lead-in to additional content.', img: false, id: nanoid()}
  ])
  return (
    <div className='Wrapper'>
      {data.map(card => (
        <Card key={card.id} title={card.title} text={card.text}>
          {card.img && <Image img={img}/>}
        </Card>
      ))}
    </div>
  );
}

export default App;
