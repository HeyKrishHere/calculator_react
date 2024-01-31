import styles from '../Display.module.css'
export default function Display(props){
    return(
        <>
        <input className={styles.display} type="text" value={props.displayvalue} readOnly/>
        </>
    )
}