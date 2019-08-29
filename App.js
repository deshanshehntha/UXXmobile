import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {FlatList, ActivityIndicator, View,} from 'react-native';
import {Icon, Header, Text} from 'react-native-elements';
import {PricingCard} from 'react-native-elements';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';


export default class App extends Component {
    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };



    componentDidMount() {
        SplashScreen.hide();
    }




    render() {
        return (

            <View style={{
                flex: 6,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                <View style={{flex: 2}}>
                    <Header
                        leftComponent={{icon: 'menu', color: 'blue', onPress:this.showMenu, ref : this.setMenuRef, raised:true, size:17, underlayColor: '#fff'}}
                        centerComponent={{ text: <Text h1>Pro Master</Text> }}
                        rightComponent={{icon: 'home', color: '#fff'}}
                        statusBarProps={{barStyle: 'light-content'}}
                        barStyle='dark-content'
                        containerStyle={{
                            backgroundColor: '#3D6DCC',
                            justifyContent: 'space-around',
                        }}
                    />
                    <Menu ref={this.setMenuRef}>
                        <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
                        <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
                        <MenuItem onPress={this.hideMenu} disabled> Menu item 3</MenuItem>
                        <MenuDivider />
                        <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
                    </Menu>
                </View>
                <View style={{flex: 4}}>
                    <PricingCard
                        color="#4f9deb"
                        title="Free"
                        price="$0"
                        info={["1 User", "Basic Support", "All Core Features"]}
                        button={{title: "GET STARTED", icon: 'flight-takeoff'}}
                    />
                </View>
            </View>
        );
    }
}
