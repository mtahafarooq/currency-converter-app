import React from 'react';
import { storiesOf } from "@storybook/react-native";

import { CheckMark } from '../components/common/CheckMark';

storiesOf("CheckMark", module)
    .add("default", () => (
        <CheckMark
            color={"#4F6D7A"}
            checked={false} />
    ))
    .add("checked", () => (
        <CheckMark
            color={"#4F6D7A"}
            checked={true} />
    ))