import React from 'react'
import GalleryPage from "./pages/Gallery/GalleryPage"
import HomePage from "./pages/Home/HomePage"
import ServicesPage from './pages/Services/ServicesPage'
import TeamPage from './pages/Team/TeamPage'
import { Switch, Route } from "react-router-dom"
import Login from "./components/Login/Login"
import BlogsPage from "./pages/Blogs/BlogsPage"
import AdminPage from './pages/Admin/Admin'
import BlogPage from './pages/Blog/BlogPage';
import BlogEditorpage from './pages/BlogEditor/BlogEditorpage'
import ProtectedRoute from './ProtectedRoute'
function App() {
  return (

    <div className="App">
      <Switch>
        <ProtectedRoute path="/admin" component={AdminPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={HomePage} />
        <Route exact path='/services' component={ServicesPage} />
        <Route exact path='/Team' component={TeamPage} />
        <Route exact path='/gallery' component={GalleryPage} />
        <Route exact path='/blogs' component={BlogsPage} />
        <Route exact path='/edit' component={BlogEditorpage} />
        <Route exact path="/:blogId" component={BlogPage} />

      </Switch>

    </div>)
}

export default App
