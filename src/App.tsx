import React from 'react';
import {Header} from './modules/Header'
import PostsPage from "./pages/PostsPage";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<PostsPage />} />
            </Routes>
        </div>
    );
}

export default App;
