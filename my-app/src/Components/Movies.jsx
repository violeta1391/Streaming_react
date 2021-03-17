import React from 'react';
import sample from '../Data/sample.json';


const Movies = () => {


    React.useEffect(() => {
        document.title = `Movies`;
      }, [])


    return (
        <div>
            <div className="bg-dark text-white popTitles">
                <p>Popular Movies</p>
            </div>
        </div>
    );
}

export default Movies;