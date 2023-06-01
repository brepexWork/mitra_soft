import React from 'react';
import {Header} from './modules/Header'
import PostsPage from "./pages/PostsPage";
import {Route, Routes} from "react-router-dom";
import UserPage from "./pages/UserPage";
import ProjectPage from "./pages/ProjectPage";
import AboutMePage from "./pages/AboutMePage";

function App() {
    return (
        <div className="App pb-6">
            <Header/>
            <Routes>
                <Route path={'/'} element={<PostsPage />} />
                <Route path={'/user/:id'} element={<UserPage />} />
                <Route path={'/project'} element={<ProjectPage />} />
                <Route path={'/about_me'} element={<AboutMePage />} />
            </Routes>
        </div>
    );
}

export default App;
