import { createRef } from "react";
import CTAButton from "../button/CTAButton";
import TextInput from "../input/TextInput";

const BucketForm = (): JSX.Element => {
        
    const refTitle = createRef<HTMLInputElement>();
    const refDescription = createRef<HTMLInputElement>();

    const handleSubmit = async () => {
        const payload = {
            title: refTitle.current?.value, 
            description: refDescription.current?.value,
            };

        console.log(`submitting payload: ${JSON.stringify(payload)}`);
        const response = await fetch(
            '/api/buckets/',
            {
                method: 'POST',
                body: JSON.stringify(payload)
            }
        );
        if (!response.ok) {
            console.error(response.text);
        }
    };

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
                    marginBottom: '2rem'
                    }}
                >
                <TextInput placeholder={"title"} ref={refTitle}/>
                <TextInput placeholder={"description"} ref={refDescription}/>
            </div>
            <CTAButton onClick={handleSubmit}>save</CTAButton>
        </div>
    );
};

export default BucketForm;

