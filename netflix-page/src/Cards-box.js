import React from 'react';
import Card from './Card';
import Dark from './Dark.jpg';
import exc from './exc.jpg';
import Stranger from './Stranger-things.jpg';
import punisher from './punisher.jpg';
import ghoul from './ghoul.jpg';
import data from './data';
function Cardsbox()
{
    return(
        <section className="cards-section">
            <div className="container">
              <Card imgSrc={Dark} title={data[0].title} link={data[0].link}/>
              <Card imgSrc={exc} title={data[1].title} link={data[1].link}/>
              <Card imgSrc={Stranger} title={data[2].title} link={data[2].link} />
              <Card imgSrc={punisher} title={data[3].title} link={data[3].link}/>
              <Card imgSrc={ghoul} title={data[4].title} link={data[4].link}/>
            </div>
        </section>
    );
}

export default Cardsbox;