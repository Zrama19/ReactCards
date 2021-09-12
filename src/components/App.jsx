import React from 'react';
import contacts from '../contacts';
import Card from './Card.jsx';

function App() {
  return (
    <div>
      <h1 className='heading'>My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        alt='Beyonce'
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        alt='Jack Bauer'
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        alt='Chuck Norris'
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
