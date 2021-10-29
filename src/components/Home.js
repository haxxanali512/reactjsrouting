import { Link } from 'react-router-dom';
const Home = () => {
    return (
       
      <div className = "main_content">
            <div className="hero" id="particles-js">
        <nav>
            <img src="https://i.postimg.cc/DydN4snm/menu.png" alt="" className="menu-img" />
            <img src="https://i.postimg.cc/RZSD7FZd/logo.png" alt="" className="logo" />
          
        </nav>

        <div className="lamp-container">
            <img src="https://i.postimg.cc/yYz5Nnqw/lamp.png" alt="" className="lamp" />
            <img src="https://i.postimg.cc/SxgtDhXh/light.png" alt="" className="light" id="light" />
        </div>

        <div className="text-container">
            <h1>Latest <br /></h1> 
                
            <h1 style = {{color: "#00986f"}}>in Lightning</h1>
            <p>This is the first lamp from our company. We're makinga huge collection of modern lamps in all categories from home use to office use.</p>
            <Link to="/about"><a href="">Why choose us ? </a></Link>
            <div className="control">
                <p>04</p>
                <div className="line"><span></span></div>
                <p>05</p>
            </div>
        </div>
    </div>
      </div>
      
 
    )
}

export default Home;