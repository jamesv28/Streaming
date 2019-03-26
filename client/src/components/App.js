import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';
const App = () => {

    // clientId 603704457474-f6pm454sa4nhs9upmqtaljubgoekdcvh.apps.googleusercontent.com
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <div>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/stream/new" component={StreamCreate} />
                    <Route path="/stream/edit" component={StreamEdit} />
                    <Route path="/stream/delete" component={StreamDelete} />
                    <Route path="/stream/show" component={StreamShow} />   
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
