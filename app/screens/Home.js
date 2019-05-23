import React, {Component} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {MOVIE_API, SEARCH_MOVIE} from '../utils/Constants';
import FilmCard from '../components/FilmCard';
import SearchBar from '../components/SearchBar';

class Home extends Component {

    state = {
        movies: [],
        isLoading: false,
        search: ''
    };

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            title: 'Movies',
            headerRight: <SearchBar change={params.change}/>

        };
    };

    changeSearchText = (text) => {
        this.setState({search: text});
        this.setState({isLoading: false});
        console.warn(text.trim().length);
        if (text.trim().length === 1) {
            fetch(MOVIE_API)
                .then(resp => resp.json())
                .then(resp => {
                    this.setState({movies: resp.results});
                    this.setState({isLoading: true});
                });
        } else {
            fetch(SEARCH_MOVIE + text)
                .then(resp => resp.json())
                .then(resp => {
                    this.setState({movies: resp.results});
                    this.setState({isLoading: true});
                });
        }
    };

    componentDidMount = () => {
        fetch(MOVIE_API)
            .then(response => response.json()
            ).then(movieData => {
            const movies = movieData.results;
            this.setState({movies});
            this.setState({isLoading: true});
        });
        this.props.navigation.setParams({'change': this.changeSearchText});
    };

    renderFooter = () => {
        if (this.state.isLoading) return null;
        return <View>
            <ActivityIndicator size='large' animating/>
        </View>
    };

    filmDetail = (film) => {
        this.props.navigation.navigate('Detail', {film});
    };

    render() {
        const movies = this.state.movies;
        const isLoading = this.state.isLoading;
        return (
            <View>
                {isLoading ? (
                    <FlatList
                        data={movies}
                        numColumns={2}
                        keyExtractor={item => item.original_title + item.id}
                        renderItem={({item}) =>
                            <FilmCard film={item} key={item.id} click={this.filmDetail.bind(this, item)}/>
                        }
                        ListFooterComponent={this.renderFooter}
                    />
                ) : (
                    this.renderFooter()
                )}
            </View>
        );

    }
}

export default Home;