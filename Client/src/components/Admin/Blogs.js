import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import BlogCard from './Card'
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import "./Blogs.css"
import { useHistory } from 'react-router-dom'

import Axios from "axios"


const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "5vw",
        paddingRight: "5vw"
    }
})

function Blogs() {
    let history = useHistory()
    const [blogsList, setBlogsList] = useState([])
    useEffect(() => {
        let unmounted = false
        if (!unmounted) {
            Axios.get('https://back.ensi-junior-entreprise.net/blogs').then(
                (data) => {
                    console.log(data)
                    setBlogsList(data.data)
                }
            )
        }
        return () => { unmounted = true }
    }, [])

    const classes = useStyles();
    return (
        <div>
            <div className="Header BlogsHeader" >
                <div className="HeaderOverlay">
                    <div className="titleWrapper">
                        <h1 contenteditable data-heading="Our Blogs" className="titles">Our Blogs</h1>
                    </div>
                </div>
            </div>
            <div  className="round-button secondry submit secondar-color logout" onClick={() => {
                localStorage.setItem("loggedIn", "false")
                history.push("/login")
                localStorage.removeItem("token")
            }} >Log Out</div>
            <div className="BlogBody">
                <Grid container spacing={5} className={classes.gridContainer} >
                    {blogsList.map((blog, key) =>
                        <Grid item xs={12} sm={6} md={4}>
                            <BlogCard title={blog.title} content={blog.content} image={blog.image} id={blog._id} key={key} />
                        </Grid>
                    )}
                    <Grid item xs={12} sm={6} md={4}>
                    
                    <Link to="/edit" style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: "10%" }}>
                        
                        <Tooltip title="Add" aria-label="add">
                            <Fab color="primary" className={classes.fab}>
                                <AddIcon />
                            </Fab>
                        </Tooltip>

                    </Link>
                </Grid>


                </Grid>

            </div>
        </div>
    )
}
export default Blogs