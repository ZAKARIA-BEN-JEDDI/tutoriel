import React from 'react';
import Spline from '@splinetool/react-spline';
import './BackgroundScene.css';

export default function BackgroundScene() {
  return (
    <div className="background-container">
      <Spline scene="https://prod.spline.design/z7nGrd5ETdkxAwZ0/scene.splinecode" />
      <div className="overlay-text">
        ZAKARIA BEN JEDDI
      </div>
    </div>
  );
}
