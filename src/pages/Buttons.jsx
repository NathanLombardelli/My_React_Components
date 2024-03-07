import {Nav} from "../components/Nav.jsx";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import {IconButton} from "../components/buttons/iconButton/IconButton.tsx";

export function Buttons() {

    function small () {console.log('small');}
    function big () {console.log('Big');}

    return (
        <>
            <Nav/>
            <div style={{display:'flex'}}>

                <section style={{display:'flex', width:'50%',height:250,justifyContent:'space-around'}}>

                    <div style={{display:'flex', flexDirection:'column',justifyContent:'space-around'}}>
                        <IconButton action={small} small={true} height={50} width={50} bgColor={'linear-gradient(90deg, rgba(255,147,0,1) 0%, rgba(255,0,0,1) 37%, rgba(0,46,255,1) 100%)'} Icon={()=><FaFacebookF />} round={false}/>
                        <IconButton action={small} small={true} height={50} width={50} bgColor={'linear-gradient(90deg, rgba(255,147,0,1) 0%, rgba(255,0,0,1) 37%, rgba(0,46,255,1) 100%)'} Icon={()=><FaXTwitter />} round={true}/>
                        <IconButton action={small} small={true} height={50} width={50} bgColor={'linear-gradient(90deg, rgba(255,147,0,1) 0%, rgba(255,0,0,1) 37%, rgba(0,46,255,1) 100%)'} Icon={()=><FaInstagram />} round={true}/>
                    </div>

                    <div style={{display:'flex', flexDirection:'column',justifyContent:'space-around'}}>
                        <IconButton action={big} text={'Facebook'} small={false} height={50} width={100} fontColor={'white'} bgColor={'linear-gradient(90deg, rgba(255,147,0,1) 0%, rgba(255,0,0,1) 37%, rgba(0,46,255,1) 100%)'} Icon={()=><FaFacebookF/>} />
                        <IconButton action={big} text={'Twitter'} small={false} height={50} width={100} fontColor={'white'} bgColor={'linear-gradient(90deg, rgba(255,147,0,1) 0%, rgba(255,0,0,1) 37%, rgba(0,46,255,1) 100%)'} Icon={()=><FaXTwitter />} round={true} />
                        <IconButton action={big} text={'Instagram'} small={false} height={50} width={100} fontColor={'white'} bgColor={'linear-gradient(90deg, rgba(255,147,0,1) 0%, rgba(255,0,0,1) 37%, rgba(0,46,255,1) 100%)'} Icon={()=><FaInstagram />} round={true} />
                    </div>

                </section>

                <section style={{display: 'flex', width: '50%', height: 250, justifyContent: 'space-around'}}>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                        <IconButton hover={"growT"} action={small} small={true} height={50} width={50}
                                    bgColor={'linear-gradient(90deg, rgba(255,147,0,1) 0%, rgba(255,0,0,1) 37%, rgba(0,46,255,1) 100%)'}
                                    Icon={() => <FaFacebookF/>} round={false}/>
                        <IconButton hover={"grow"} action={small} small={true} height={50} width={50}
                                    bgColor={'linear-gradient(90deg, rgba(255,147,0,1) 0%, rgba(255,0,0,1) 37%, rgba(0,46,255,1) 100%)'}
                                    Icon={() => <FaXTwitter/>} round={true}/>
                        <IconButton hover={"pulse"} action={small} small={true} height={50} width={50}
                                    bgColor={'linear-gradient(90deg, rgba(255,147,0,1) 0%, rgba(255,0,0,1) 37%, rgba(0,46,255,1) 100%)'}
                                    Icon={() => <FaInstagram/>} round={true}/>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                        <IconButton hover={"growT"} pointer={true} borderColor={"red"} borderSize={1} action={big} text={'Facebook'}
                                    small={false} height={50} width={100} fontColor={'black'} bgColor={'transparent'}
                                    Icon={() => <FaFacebookF/>}/>
                        <IconButton hover={"grow"} pointer={true} borderColor={"green"} borderSize={10} action={big}
                                    text={'Twitter'} small={false} height={50} width={100} fontColor={'black'}
                                    bgColor={'lightGreen'} Icon={() => <FaXTwitter color={"green"}/>} round={true}/>
                        <IconButton hover={"pulse"} pointer={true} borderColor={"blue"} borderSize={5} action={big} text={'Instagram'}
                                    small={false} height={50} width={100} fontColor={'black'} bgColor={'lightBlue'}
                                    Icon={() => <FaInstagram color={"red"}/>} round={true}/>
                    </div>

                </section>

            </div>
        </>
    )
}