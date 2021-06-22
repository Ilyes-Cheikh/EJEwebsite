import React from 'react'
import BlogEditor from '../../components/BlogEditor/BlogEditor'
import './BlogEditorpage.css'
import logo from '../../assets/img/EJE 2.png'

function TextEditorpage () {
    return(
        <div className="texteditpage">
             <header className="texteditor_header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="always">Always_Striving_For_Greatness</h1>
          </header>
        <BlogEditor/>
        </div>
    );
} 
export default TextEditorpage;