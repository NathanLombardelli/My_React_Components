import {Nav} from "../components/Nav.jsx";
import {NeoToogle} from "../components/inputs/neoToogle/NeoToogle.tsx";

export function Inputs() {
    return (
        <>
            <Nav/>
            <div style={{display:'flex'}}>
                <section style={{display: 'flex', width: '100%', height: 550, justifyContent: 'space-around'}}>
                    <h1>NeoToogle</h1>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                        <h1>Hover color</h1>
                        <NeoToogle/>
                        <NeoToogle neoncolor={"#0f0"}/>
                        <NeoToogle neoncolor={"#ff0"}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                        <h1>bg color</h1>
                        <NeoToogle bgColor={"#fff"}/>
                        <NeoToogle
                            bgColor={"linear-gradient(90deg, rgba(0,36,7,1) 0%, rgba(19,121,9,1) 50%, rgba(0,212,255,1) 100%)"}
                            neoncolor={"#0f0"}/>
                        <NeoToogle
                            bgColor={"radial-gradient(circle, rgba(0,181,255,1) 0%, rgba(255,212,0,1) 50%, rgba(255,0,0,1) 100%)"}
                            neoncolor={"#ff0"}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                        <h1>toogle color</h1>
                        <NeoToogle toogleColor={"#620202"} neoncolor={"#f00"} bgColor={"#fff"}/>
                        <NeoToogle
                            toogleColor={"#fff"}
                            bgColor={"linear-gradient(90deg, rgba(0,36,7,1) 0%, rgba(19,121,9,1) 50%, rgba(0,212,255,1) 100%)"}

                            neoncolor={"#0f0"}/>
                        <NeoToogle
                            toogleColor={"none"}
                            bgColor={"radial-gradient(circle, rgba(0,181,255,1) 0%, rgba(255,212,0,1) 50%, rgba(255,0,0,1) 100%)"}
                            neoncolor={"#ff0"}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                        <h1>border color</h1>
                        <NeoToogle toogleColor={"#620202"} borderColor={"#f00"} neoncolor={"#f00"} bgColor={"#fff"}/>
                        <NeoToogle
                            toogleColor={"#fff"}
                            bgColor={"linear-gradient(90deg, rgba(0,36,7,1) 0%, rgba(19,121,9,1) 50%, rgba(0,212,255,1) 100%)"}
                            borderColor={"#0f0"}
                            neoncolor={"#0f0"}/>
                        <NeoToogle
                            toogleColor={"none"}
                            bgColor={"radial-gradient(circle, rgba(0,181,255,1) 0%, rgba(255,212,0,1) 50%, rgba(255,0,0,1) 100%)"}
                            borderColor={"#ff0"}
                            neoncolor={"#ff0"}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                        <h1>size</h1>
                        <NeoToogle size={"55px"} toogleColor={"#620202"} borderColor={"#f00"} neoncolor={"#f00"}
                                   bgColor={"#fff"}/>
                        <NeoToogle
                            size={"2em"}
                            toogleColor={"#fff"}
                            bgColor={"linear-gradient(90deg, rgba(0,36,7,1) 0%, rgba(19,121,9,1) 50%, rgba(0,212,255,1) 100%)"}
                            borderColor={"#0f0"}
                            neoncolor={"#0f0"}/>
                        <NeoToogle
                            toogleColor={"none"}
                            bgColor={"radial-gradient(circle, rgba(0,181,255,1) 0%, rgba(255,212,0,1) 50%, rgba(255,0,0,1) 100%)"}
                            borderColor={"#ff0"}
                            neoncolor={"#ff0"}/>
                    </div>
                </section>
            </div>
        </>
    )
}