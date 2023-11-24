import {Nav} from "../components/Nav.jsx";
import {SocialButton} from "../components/socialButton/SocialButton.tsx";
import { FaFacebookF } from "react-icons/fa6";

export function Buttons() {

    function small () {console.log('small');}
    function big () {console.log('Big');}

    return (
        <>
            <Nav/>
            <SocialButton action={small} small={true} height={50} width={50} bgColor={'linear-gradient(90deg, rgba(255,147,0,1) 0%, rgba(255,0,0,1) 37%, rgba(0,46,255,1) 100%)'} Icon={()=><FaFacebookF/>}  round={true}/>
            <SocialButton action={big} text={'Facebook'} small={false} height={50} width={100} fontColor={'white'} bgColor={'linear-gradient(90deg, rgba(255,147,0,1) 0%, rgba(255,0,0,1) 37%, rgba(0,46,255,1) 100%)'} Icon={()=><FaFacebookF/>} />
        </>
    )
}