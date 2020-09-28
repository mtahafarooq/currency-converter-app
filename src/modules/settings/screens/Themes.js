import React, { Component } from 'react';
import { View, StatusBar, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { ThemeItem } from '../../../components/others/ThemeItem';
import { setTheme } from '../../../reducers/theme/actions';

class Themes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTheme: {}
        }
    }
    componentDidMount() {
        this.setState({ selectedTheme: this.props.selectedTheme })
    }

    handleSelection = (selectedTheme) => {
        this.props.setTheme(selectedTheme)
        this.setState({ selectedTheme: selectedTheme })
    }
    renderItem({ item }) {
        const calledFor = this.props.route.params?.calledFor
        return (
            <ThemeItem
                pressHandler={this.handleSelection}
                color={item.code}
                label={item.name}
                checked={this.state.selectedTheme.code == item.code}
            />
        );
    }
    render() {
        return (
            <View>
                <StatusBar translucent={false} barStyle="default" />
                <FlatList
                    data={this.props.themes}
                    renderItem={this.renderItem.bind(this)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }

}

const mapStateToProps = (state) => {
    const props = {
        selectedTheme: state.theme.selectedTheme,
        themes: state.theme.themes
    }
    return props;
}
export default connect(
    mapStateToProps,
    {
        setTheme
    }
)(Themes);