import reactSVG from './assets/react.svg'
import {useContext} from 'react';
import { ThemeContext } from './ContextTheme';
const Body = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div style = {{width : "100vw", height : "70vh", backgroundColor : theme === "Dark" ? "gray" : "white", display : "flex", justifyContent : "center", flexDirection : "column", alignItems : "center"}}>
            <img style = {{width : "80px", height : "80px"}} src = {reactSVG} />
            <div>
                <h1 style = {{fontWeight : "bold", color : theme === "Dark" ? "white" : "gray"}}>React</h1>
            </div>
            <div>
                <h1 style = {{fontWeight : "bold", color : theme === "Dark" ? "white" : "gray"}}>The library for web and native user interfaces</h1>
            </div>
            <div style = {{display : "flex"}}>
                <button style = {{marginRight : "10px", borderRadius : "10px", padding : "5px", width : "120px", height : "35px"}}> Learn React </button>
                <button style = {{borderRadius : "10px", padding : "5px"}}> API reference</button>
            </div>
        </div>
    )
}

export default Body;