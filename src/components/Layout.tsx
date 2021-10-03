import React from 'react'
import { JsxElement } from 'typescript'
import '../styles/App.css'

function Layout({children}: JsxElement) {
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout
