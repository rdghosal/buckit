import styles from "./AddItemButton.module.css";

interface IAddItemButtonProps {
    onClick: () => any;
}

// TODO: add styles
const AddItemButton = ({onClick}: IAddItemButtonProps): JSX.Element => {
    return (
        <div className={styles.addItemButton} onClick={onClick}></div>
    );
}

// async function addItem(appendeeProps: object, appendeeUrl: string): Promise<object | object[]> {
//     try {
//         const response = await fetch(appendeeUrl,  {
//             method: "POST",
//             body: JSON.stringify(appendeeProps),
//         });
//         return await response.json();
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }

export default AddItemButton;

