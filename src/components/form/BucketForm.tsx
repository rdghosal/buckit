import AddItemButton from "../button/AddItemButton";
import CTAButton from "../button/CTAButton";
import TextInput from "../input/TextInput";

const BucketForm = (): JSX.Element => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
                }}
            >
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    height: '10rem',
                    marginBottom: '2rem'
                    }}
                >
                <TextInput placeholder={"title"}/>
                <TextInput placeholder={"description"}/>
            </div>
            <CTAButton>save</CTAButton>
        </div>
    );
};

export default BucketForm;

