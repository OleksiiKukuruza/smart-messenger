import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS
} from 'react-native';
import {Dashboard} from './App/Components/Dashboard';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default class client extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Dashboard',
                    component: Dashboard
                }}
            />
        );
    }
}

AppRegistry.registerComponent('client', () => client);
