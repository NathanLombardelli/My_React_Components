import "./NeoToogle.scss"

interface propsTypes {
    /**  css background */
    bgColor? : string,
    /**  css background */
    neoncolor? : string,
    /**  css background */
    toogleColor? : string,
    /**  css background */
    borderColor? : string,
    /**  size */
    size? : string,
}

export function NeoToogle({ bgColor,neoncolor,borderColor,toogleColor,size} : propsTypes) {
    const style = {
        '--color': neoncolor,
        '--toogleColor': toogleColor,
        '--borderColor':borderColor,
        "--size":size,
        background: bgColor,
    } as React.CSSProperties

    return (
        <input type="checkbox" role="switch" className="neon" style={style} />
    )
}