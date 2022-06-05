import React from "react"
import HeroImage from "../images/img2.jpg"
export default function Main() {
    return (
        <section className="hero">
        <img
            src={HeroImage} className="hero--photo" />
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by 
        one-of-a-kind hosts—all without leaving home.</p>
    </section>
    )
}