import React from 'react'
import './Main.css';
import Card from '../Card/Card';
import  Loader from '../../loading.gif';



const Main = ({ isLoading, hoteles }) => {
    return (
        <>
            
            <div className="container">
                {!isLoading ? (
                    hoteles.length > 0 ? (
                        <div className="columns is-multiline is-mobile">
                            {hoteles.map((hotel) =>
                                <Card hotel={hotel} key={hotel.name} />
                            )}
                        </div>
                        
                    ):(<p className="noresults"> Ops! No hay resultados </p>)
                ) : (<img className="loading" src = {Loader}/>)
                
                 }
            </div>
        </>
    );
};

export default Main