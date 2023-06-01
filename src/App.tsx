import React from 'react';
import {Header} from './modules/Header'
import PostsPage from "./pages/PostsPage";
import {Route, Routes} from "react-router-dom";
import UserPage from "./pages/UserPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<PostsPage />} />
                <Route path={'/user/:id'} element={<UserPage />} />
            </Routes>
        </div>
    );
}

export default App;
