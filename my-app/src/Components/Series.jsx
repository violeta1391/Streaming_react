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


    const divStyle = {
        color: 'blue'
    };

    return (
        <div>
            <div className="bg-dark text-white popTitles">
                <p>Popular Series</p>
            </div>
            <div style={divStyle}>Hello World!</div>;
            <ul className="lista">
                {
                    datos.map(item => (
                        <li>
                            <p>{item.title}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Series;