import React from "react";
import Movies from "../components/Movies";
import Search from "../components/Search";
import {Preloader} from "../components/Preloader";
import {type} from "@testing-library/user-event/dist/type";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}a&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.search, loading: false}))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true});
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}a&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.search, loading: false}));
    }

    render() {
        const {movies, loading} = this.state;
        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies}/>
                { loading ? <Preloader/> : <Movies movies={movies}/> }
            </main>
        );
    }
}

export default Main;
