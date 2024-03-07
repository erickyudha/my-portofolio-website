import "./Hero.scss";
import bg from "./tokyo-city-aesthetic.gif"

const Hero = () => {
    return (
        <section id="hero">
            <img src={bg} />
            <span></span>
            <div id="headline">
                <h1>Hello,</h1>
                <h1>Welcome.</h1>
            </div>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, blanditiis autem perferendis commodi delectus eligendi quaerat quia qui. Ex officiis rerum saepe sapiente aspernatur minus nulla officia quae accusantium harum.</h4>
        </section>
    )
}

export default Hero;