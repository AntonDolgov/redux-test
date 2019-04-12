import React, { Component } from 'react';
import './style.css';

export default () => {
    return <div className="form-wrapper">
        <form className="form">
            <input required type="text" name="username" placeholder="Ваше имя" autocomplete="off" />

            <textarea required name="message" rows="4" placeholder="Сообщение"></textarea>

            <input type="submit" />
        </form>
    </div>
}
