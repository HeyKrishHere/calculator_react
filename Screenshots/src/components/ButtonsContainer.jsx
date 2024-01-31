import styles from './ButtonContainer.module.css'
export default function ButtonsContainer(props){
    const buttons = ["C", "1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "+", "-", "*", "/", "0", ".", "="];
    
    return(
        <div className={styles.buttonsContainer}>
        {
            buttons.map((button)=><button className={styles.button} onClick={() => props.onButtonClick(button)}
            >{button}
            
            </button>)
        }
        </div>
    );
}