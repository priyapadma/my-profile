import React from "react"
import MyProfileData from "../../../assets/data/my-profile.json"
import "./about.css"

export default () => {
    return (
        <section className="my-profile-about">
            <h3>Professional Summary:</h3>
            <ul>
                {
                    MyProfileData.summary.map((item, index) => {
                        return (
                            <li>{item}</li>
                        )

                    })
                }
            </ul>
            <h3>Technical Skills:</h3>
            <table className="my-skills-table">
                <tbody>
                    {
                        MyProfileData.skills.map((data, index) => {
                            return (
                                <tr>
                                    <td>{data.category}</td>
                                    <td>{data.lang}</td>
                                </tr>   
                            )

                        })
                    }
                </tbody>
            </table>
        </section>
    )}