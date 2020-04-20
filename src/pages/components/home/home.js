import React from "react"
import { Link } from "gatsby"
import "./home.css"

export default () => {
    return (
        <section className="my-profile-title">
            <h1>
                Hello, my name is Padmapriya Selvaraj. I am a Front End Developer working in
                Payoda Technologies, India.
            </h1>
            <Link className="btn btn-outline-warning" to="/about">
                View my work
            </Link>
        </section>
    )}