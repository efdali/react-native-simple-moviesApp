import {createStackNavigator,createAppContainer} from "react-navigation";
import Home from './Home';
import Detail from './Detail';
const AppNavigator=createStackNavigator({
        Home:Home,
        Detail:Detail
    },{
    initialRouteName:'Home'
    }
    );

export default createAppContainer(AppNavigator);