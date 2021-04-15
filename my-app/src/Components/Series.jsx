import React from 'react';
import sample from '../Data/sample.json';

const datos = sample.entries;
let contador = 0;

const Series = () => {   

    React.useEffect(() => {
        document.title = `Series`;
    }, [])

    const tipo = datos.map(function (x) {
        if (x.programType === "series" && x.releaseYear > 2010 && contador < 20) {
            const seriesMap = {
                titulos: x.title,
                imagen: x.images
            };
            console.log(seriesMap)
            contador++
        }
    })

    const result = datos.filter(it => it.programType === "series");
    const resultDos = result.filter(it => it.releaseYear > 2010);

    const divStyle = {
        color: 'blue'
    };

    return (
        <div>
            <div className="bg-dark text-white popTitles">
                <p>Popular Series</p>
            </div>            
            <ul className="lista">
                {
                    resultDos.map(item => (
                        <li>
                            <h4>{item.title}</h4>                            
                            <p>Año: {item.releaseYear}</p> 
                            <p>{item.description}</p> 
                        </li>
                    ))
                }
            </ul>

        </div>
    );
}

export default Series;