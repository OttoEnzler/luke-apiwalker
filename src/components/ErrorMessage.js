import React from 'react';

const ErrorMessage = ({ message }) => {
    return (
        <div>
            <p style={{ color: 'red' }}>{message}</p>
            <img src="https://th.bing.com/th/id/OIP.JR6V66QQJXbgXWeC60bhpQHaIS?rs=1&pid=ImgDetMain" alt="Obi-Wan Kenobi" width="300" />
        </div>
    );
};

export default ErrorMessage;