import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import { CardPanel } from '../components/common/CardPanel';

storiesOf("CardPanel", module)
    .add("default", () => (
        <CardPanel pressHandler={() => { action("tapped-default") }}>
            <Text>Left</Text>
            <Text>Right</Text>
        </CardPanel>
    ))