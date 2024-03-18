import './GithubSlide.scss'

const GithubSlide = () => {
    return (
        <div id="github-slide">
            <h4>GITHUB STATS</h4>
            <div className='line'></div>
            <div className='git-content'>
                <img alt="Erick's Github Stats" src="https://github-readme-stats.vercel.app/api?username=erickyudha&show_icons=true&count_private=true&theme=neon&rank_icon=github"/>
                <img src="https://github-readme-stats.vercel.app/api/top-langs?username=erickyudha&show_icons=true&locale=en&layout=compact&theme=neon&hide=html,css,shaderlab" alt="erickyudha"/>
            </div>
        </div>
    )
}

export default GithubSlide;