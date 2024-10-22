import { Html } from '@react-three/drei';
import React from 'react';
import './Loader.css';

export default function Loader() {
    return (
        <Html center>
            <div className="loader-container">
                <div className="loader-3d">
                    <div className="loader-spinner">
                        <div className="spinner-layer layer1"></div>
                        <div className="spinner-layer layer2"></div>
                        <div className="spinner-layer layer3"></div>
                    </div>
                </div>
                <p className="loader-text">Loading...</p>
            </div>
        </Html>
    );
}
