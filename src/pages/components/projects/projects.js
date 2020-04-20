import React from "react"
import MyProjectsData from "../../../assets/data/my-projects.json"
import "./projects.css"

export default () => {
    return (
        <div className="content">
            <section className="my-projects">
                <div className="inner-container">
                    <h3>Latest Projects: </h3>
                        <ul className="my-projects-list list-unstyled">
                        {
                            MyProjectsData.content.map((data, index) => {
                                return (
                                    <li className="border-bottom">
                                        <a href={data.link} target="_blank"><p>{data.projectName} ({data.duration})</p></a>
                                        <h4>Front End Developement</h4>
                                        <p><em>Technologies Used:</em></p>
                                        <div>{data.stacksUsed}</div>
                                        <p><em>Roles and Responsibilities:</em></p>
                                        <ul className="my-projects-roles">
                                            {
                                                MyProjectsData.content[index].responsibilities.map((item, j) => {
                                                    return (
                                                        <li>{item}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                )
                            })
                        }
                        </ul>
                </div>
            </section>
        </div>
    )}