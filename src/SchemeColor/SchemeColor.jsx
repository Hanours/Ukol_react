import React from 'react';

const SchemeColor = ({ barva }) => (
    <div className="scheme-color" style={{ backgroundColor: barva}} > { barva }</div>
);

export default SchemeColor;
