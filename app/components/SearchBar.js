import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

class SearchBar extends React.Component {

    changeText=text=>{
        this.setState({search:text});
        this.props.change(this.state.search);
    };

    state={
        search:''
    };

    render() {
        const {text, change} = this.props;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Film Ara...'
                    value={this.state.search}
                    onChangeText={text=>this.changeText(text)}
                />
                <Image
                    source={require('../../public/img/search.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        margin: 5,
        backgroundColor: 'white'
    },
    textInput: {
        width:200,
        paddingLeft: 5
    },
    image: {
        width:45,
        height: 45
    }
});

export default SearchBar;