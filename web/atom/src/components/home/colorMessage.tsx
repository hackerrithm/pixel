import * as React from 'react';

interface ColorMessageProperties {
    name: string;
}

export default ({name}: ColorMessageProperties) => (
    <b>{name}, </b>
);