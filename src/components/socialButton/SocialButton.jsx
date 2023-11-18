/**
 *
 * @param Icon {function} une fonction qui retourne une icone
 * @param text {string} le texte qui sera afficher sur le button
 * @param bgColor {string} css background
 * @param small {boolean} true : uniquement icone , false : icone + texte
 * @param width {number} largeur en px du button
 * @param height {number} hauteur en px du button
 * @param fontColor {string} css color
 */
export function SocialButton({Icon,text,bgColor,small,width,height,fontColor}) {
    return (
          <div className={small ? 'socialButtonSmall' : 'socialButton'} style={{background:bgColor,height:height+'px',width:width+'px',fontSize:height/1.5}}>
              <Icon/>
              {small ? <></> : <p style={{fontSize:Math.min((width - text.length) / 4, (height ) / 4),color:fontColor}}>{text}</p>}
          </div>
    )
}