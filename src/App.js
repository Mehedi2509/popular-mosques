
import './App.css';
import Card from './conponents/Card/Card';

function App() {
  const cards = [
    { key: 1, name: 'Makkah Sharif', img: 'https://media.istockphoto.com/photos/kaaba-in-mecca-picture-id482206266?k=20&m=482206266&s=612x612&w=0&h=JvXTR5ih-ieBNh2MXfyBFU8_BAvgUH_m-NUx1m8RpPc=', description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' },
    { key: 2, name: 'Modina Sharif', img: 'https://wallpaperaccess.com/full/1970175.jpg', description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' },
    { key: 3, name: 'Al-Aqsa Mosque', img: 'https://img.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/al_aqsa-reuters_file.jpg?itok=IRCfb1gz', description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' },
    { key: 4, name: 'Ertugrul Ghazi Mosque', img: 'https://silkadv.com/sites/default/files/Turkmenistan/Goroda/Ashgabad/Ashgabad/0_21_%28102%29-min.jpg', description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' },
    { key: 5, name: '201 Dome Mosque', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/201_Dome_Mosque%2C_Tangail.jpg/1024px-201_Dome_Mosque%2C_Tangail.jpg', description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' },
    { key: 6, name: 'Sixty Dome Mosque', img: 'https://turbd.com/wp-content/uploads/2020/06/Shat-Gambuj-Mosque.jpg', description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' },
    { key: 7, name: 'Sat Gambuj Mosque', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqfesp7vpd9IqlIFkcn56qEPQ0Kdm0iM9UnwV5lRjgrlMvVbEqGD4hiNToliU6CJIYl_Q&usqp=CAU', description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' },
    { key: 8, name: 'Ertugrul Ghazi Mosque', img: 'https://img.theculturetrip.com/wp-content/uploads/2020/10/rkm48m-e1603870286120.jpg', description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' },
    { key: 9, name: 'Ertugrul Ghazi Mosque', img: 'https://www.islamicfinder.org/news/image/download/post57_93_20161111_090137.jpg/93', description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' },
  ]
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', color: 'gray', fontWeight: '700' }}>World Famous Mosque</h1>
      <div className="row row-cols-1 row-cols-md-3 g-5 my-5">
        {
          cards.map(card => <Card key={card.key} card={card} />)
        }
      </div>
    </div>
  );
}

export default App;
