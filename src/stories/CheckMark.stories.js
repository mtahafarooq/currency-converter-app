import React from 'react';
import { storiesOf } from "@storybook/react-native";

import { CheckMark } from '../components/common/CheckMark';

storiesOf("CheckMark", module)
    .add("default", () => (
        <CheckMark
            color={"#BEE9D3"}
            checked={false} />
    ))
    .add("checked", () => (
        <CheckMark
            color={"#BEE9D3"}
            checked={true} />
    ))
