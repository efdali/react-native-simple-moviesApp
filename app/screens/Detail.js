import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {IMAGE_API} from "../utils/Constants";

class Detail extends Component {
    state = {
        film: ''
    };

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('film').title
        };
    };

    componentDidMount() {
        const film = this.props.navigation.getParam('film');
        this.setState({film});
    };

    render() {
        const {film} = this.state;
        return (
            <ScrollView style={{flex: 1}}>
                <Image style={{height: 200}} source={{uri: IMAGE_API + film.backdrop_path}}/>
                <Text style={{fontSize: 22, fontWeight: 'bold', margin: 5}}>{film.original_title}</Text>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
                <View style={{flex: 1, flexDirection: 'row', margin: 5}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        <Image style={{width: 20, height: 20}} source={require('../../public/img/date.png')}/>
                        <Text style={{marginLeft: 5}}>{film.release_date}</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        <Image style={{width: 20, height: 20}} source={require('../../public/img/imdb.png')}/>
                        <Text style={{marginLeft: 5}}>{film.vote_average}</Text>
                    </View>
                </View>
                <Text style={{padding: 5}}>{film.overview}</Text>
            </ScrollView>
        );
    }
}

export default Detail;