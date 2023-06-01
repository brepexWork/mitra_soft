import React from 'react';
import {Header} from './modules/Header'
import PostsPage from "./pages/PostsPage";
import {Route, Routes} from "react-router-dom";
import UserPage from "./pages/UserPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<PostsPage />} />
                <Route path={'/user/:id'} element={<UserPage />} />
                <Route path={'/project'} element={<ProjectPage />} />
            </Routes>
        </div>
    );
}

export default App;
