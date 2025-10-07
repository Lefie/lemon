import React from "react";

export default function Site(){
    
    return (
        <>
        <section className="content-container">
            <article className="dash">
                <ul className="links">
                    <li><a href="https://github.com/Lefie">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/qiwen-lemon-ruan/">LinkedIn</a></li>
                </ul>
            </article>
            <article className="about">
                    <h1>Welcome</h1>
                    <div className="description">
                        <p>My name is Lemon. I'm a junior full‑stack developer passionate about combining creativity and engineering.</p>
                        <p id="second-line">See the apps I’ve built and what I’m excited about next.</p>
                    </div>
                </article>
            <section className="content-items">
                
                <article className="projects">
                    <h1> Projects </h1>
                    <div className="projects-container">
                            <ul className="project-names">
                                <li><a href="https://blog-frontend-1-nine.vercel.app/" target="_blank">Blog App </a></li>
                                <li><a href="https://reminder-bot-sigma.vercel.app/" target="_blank">Reminder App </a></li>
                                <li><a href="https://van-life-gold.vercel.app/" target="_blank">Van Life App</a></li>
                            </ul>
                    </div>
                    
                </article>

                 <article className="creative-projects">
                    <h1> Creative Projects </h1>
                    <p>I'm baking some ideas! For now, check out this <a href="https://lefie.github.io/creative-projects/index.html" target="_blank"> page of sketches </a></p>
                    
                </article>

            </section>
        </section>
        </>
    )
}