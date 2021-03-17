import React from 'react';
import movie from '../assets/movies.png';
import series from '../assets/series.png';

const Home = () => {
    return (
        <div>
            <div class="bg-dark text-white popTitles">
                <p>Popular Titles</p>
            </div>
            <div>
                <div className="row seriesMovies">
                    <div className="m-2">
                        <a href="./Series">
                            <img src={series} className="App-series" alt="series" />
                        </a>
                        <p className="mt-2">Popular Series</p>
                    </div>
                    <div className="m-2">
                        <a href="./Movies">
                            <img src={movie} className="App-movie" alt="movie" />
                        </a>
                        <p className="mt-2">Popular Movies</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;