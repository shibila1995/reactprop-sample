/*import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Contact from "./components/Contact"
export default function App() {
    return (
        <div className="container">
            <Navbar />
          <Hero/>
           <Card/>
        
            
        </div>
    )
 }*/
 

 import React from "react"
import Contact from "./components/Contact"

function App() {
    return (
        <div className="contacts">
            <Contact 
                img={require("./images/img2.jpg")} 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img={require("./images/img4.jpg")} 
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img={require("./images/img2.jpg")} 
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                 img={require("./images/img5.jpg")} 
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App



