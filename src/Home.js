import React from 'react';
import './home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/AugART/Teaser/PC/revised/V1/FIle-1_PC_01.jpg" alt="" />

                <div className="home__row">
                    <Product title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" rating={5} />
                    <Product title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" rating={5} />


                </div>
                <div className="home__row">
                    <Product title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" rating={5} />
                    <Product title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" rating={5} />
                    <Product title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" rating={5} />

                </div>
                <div className="home__row">
                    <Product title="The lean startup" price={29.99} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNTReBC9U6sraAcGE-DfADMlOb7eiypmTIQ&usqp=CAU" rating={5} />


                </div>

            </div>

        </div>
    )
}

export default Home