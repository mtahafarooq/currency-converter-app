import React from 'react';
import { storiesOf } from "@storybook/react-native";

import { Label } from '../components/common/Label';

storiesOf("Label", module)
    .add("default", () => (
        <Label
            label={"Label"}
        />
    ))