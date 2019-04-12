import React, { Component } from 'react';
import './style.css';

export default () => {
    return <div className="chat-wrapper">
        <ul className="chat">
            <li className="chat__message">
            <p className="chat__author">Антон</p>
            Привет</li>
            <li className="chat__message chat__message--my">Привет</li>
        </ul>
    </div>
}
