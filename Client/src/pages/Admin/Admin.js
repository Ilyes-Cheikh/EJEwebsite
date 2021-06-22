import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Blogs from "../../components/Admin/Blogs"
import { withRouter } from "react-router-dom"

function AdminPage() {

    return (
        <div>

            <Navbar />
            <Blogs />
            
        </div>
    )
}

export default withRouter(AdminPage)