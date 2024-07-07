import React from "react";

import "../css/About.css";

export default function About () {
    return (
        <main>
            <h2 className="big-text">About</h2>

            <div className="about-container">
                <p>I came across "WOOL NEEDLES HANDS" YoutTube series called Ravelry Roulette, where Tayler used the advanced search functionality and a random number generator to find random patterns on Ravelery. With my skills as a web developer, I knew that I could automate this process and create a website that accomplishes the same goal. I hope you enjoy my version of #RavelryRoulette and find this website a fun, refreshing way to browse Ravelery's incredible daabase of patterns!</p>
                <div className="youtube-frame">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=zGj_OKxoW0RNgiYu&amp;list=PL7s-oRtOf634gQ2b3wwGqr4zEvlRoU06I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </main>
    )
}
