import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
               clientId: '603704457474-f6pm454sa4nhs9upmqtaljubgoekdcvh.apps.googleusercontent.com',
               scope: 'email'
            });
        });
    }
    render() {
        return (
            <div>google auth</div>
        )
    }
}

export default GoogleAuth;