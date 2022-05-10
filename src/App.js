import logo from './logo.svg';
import List from './List';
import { useState } from 'react';
import data from './data';
function App() {
  const [people, setPeople] = useState(data)
  return (
    <div className="App">
      <main>
    <section className='section-container'>
       <h3 className='heading '> {people.length} birthday today</h3>
  <List people={people}/>
  <button className='Btn' onClick={()=> setPeople([])}>Clear All</button>
    </section>
    </main>
    </div>
  );
}

export default App;
