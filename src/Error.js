import React from 'react';

export default class Error extends React.Component {
   render() {
    return (
    <section id="error">
        <div className="container">
            <h3 className="text-center"><strong>This page cannot be found. Try again.</strong></h3>
            <p className="text-center">Not finding what you are looking for? Contact us!</p>
        </div>
    </section>
    )
};
};