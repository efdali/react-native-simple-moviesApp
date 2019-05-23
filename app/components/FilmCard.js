import React, {Component} from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import {IMAGE_API} from "../utils/Constants";

class FilmCard extends Component {
    render() {
        const {film, click} = this.props;
        return (
            <TouchableWithoutFeedback style={{flex: 1}} onPress={this.props.click}>
                <View style={{flex: 1, padding: 2, margin: 5}}>
                    <Image source={{uri: IMAGE_API + film.poster_path}}
                           style={{height: 200, justifyContent: 'center', alignItems: 'center'}}
                           resizeMode='stretch'
                    />
                    <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>{film.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default FilmCard;