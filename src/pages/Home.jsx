import {Nav} from "../components/Nav.jsx";
import {SocialButton} from "../components/socialButton/SocialButton.jsx";
import { FaFacebookF } from "react-icons/fa6";
export function Home() {


    return (
        <>
            <Nav/>
            <SocialButton text={'test'} small={true} height={50} width={50} bgColor={'linear-gradient(90deg, rgba(255,147,0,1) 0%, rgba(255,0,0,1) 37%, rgba(0,46,255,1) 100%)'} Icon={()=><FaFacebookF/>} />
            <SocialButton text={'Facebook'} small={false} height={250} width={500} fontColor={'white'} bgColor={'linear-gradient(90deg, rgba(255,147,0,1) 0%, rgba(255,0,0,1) 37%, rgba(0,46,255,1) 100%)'} Icon={()=><FaFacebookF/>} />
        </>
    )
}