import AddItemButton from "../button/AddItemButton"
import TextInput from "../textinput";

const BucketForm = (): JSX.Element => {
    return (
        <div>
            <div>
                <TextInput placeholder={"title"}/>
                <TextInput placeholder={"description"}/>
            </div>
        </div>
    );
};

export default BucketForm;

