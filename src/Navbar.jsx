import {useContext} from 'react';
import { ThemeContext } from './ContextTheme';

const Navbar = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        if(theme === "Dark") {
            setTheme("Light");
        }
        else {
            setTheme("Dark");
        }
    }

    return (
        <div>
            <div style = {{width : "100vw", height : "60px", backgroundColor : theme === "Dark" ? "gray" : "white", display : "flex", justifyContent : "space-between"}}>
                <div style = {{paddingLeft : "60px", paddingTop : "20px", color : theme === "Dark" ? "white" : "gray"}}>
                    React
                </div>
                <div style = {{display : "flex", justifyContent : "center", paddingRight : "30px", paddingTop : "20px"}}>
                    <div style = {{paddingRight : "30px", color : theme === "Dark" ? "white" : "gray"}}>
                        Learn
                    </div>
                    <div style = {{paddingRight : "30px", color : theme === "Dark" ? "white" : "gray"}}>
                        Reference
                    </div>
                    <div style = {{paddingRight : "30px", color : theme === "Dark" ? "white" : "gray"}}>
                        Community
                    </div>
                    <div style = {{paddingRight : "30px", color : theme === "Dark" ? "white" : "gray"}}>
                        Blog
                    </div>
                    <div style = {{paddingRight : "30px", color : theme === "Dark" ? "white" : "gray", cursor : "pointer", textDecoration : "underline"}} onClick = {() => toggleTheme()}>
                        {theme === "Dark" ? <div> Light Mode</div> : <div> Dark Mode </div>}  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;