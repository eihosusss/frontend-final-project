import React from 'react';
import UnderConstructionImg from './Assets/under-construction.png';

function UnderConstruction() {
    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <img
                src={UnderConstructionImg}
                alt="Under Construction"
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
    );
}

export default UnderConstruction;