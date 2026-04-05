import React from 'react';
import './Background.css';

const ThreeClouds = () => {
    return (
        <div className="glass-bg-shell" aria-hidden="true">
            <div className="glass-bg-layer layer-1"></div>
            <div className="glass-bg-layer layer-2"></div>
            <div className="glass-bg-layer layer-3"></div>

            <div className="clouds-shell">
                <div className="cloud cloud-1"></div>
                <div className="cloud cloud-2"></div>
                <div className="cloud cloud-3"></div>
            </div>

            <div className="glass-bg-grid"></div>
            <div className="glass-bg-noise"></div>
        </div>
    );
};

export default ThreeClouds;
