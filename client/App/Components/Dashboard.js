import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
    dashboard: {
        flex: 1,
        marginTop: 65,
        backgroundColor: '#F5FCFF'
    }
});

export class Dashboard extends Component {
    render() {
        return (
            <View
            style={styles.dashboard}>
                <Text>I am Dashboard</Text>
            </View>
        );
    }
}
