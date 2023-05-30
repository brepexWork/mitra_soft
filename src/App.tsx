import React from 'react';
import {Header} from './modules/Header'
import PostsPage from "./pages/PostsPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <PostsPage />
        </div>
    );
}

export default App;
