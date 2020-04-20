import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/style.css';
import Layout from "./components/layout/layout"
import HomeComponent from "./components/home/home"

const IndexPage = () => (
  <Layout>
    <HomeComponent></HomeComponent>
  </Layout>
)

export default IndexPage
