import BucketForm from "@/components/form/BucketForm";
import Navbar from "@/components/navbar/Navbar";
import Page from "@/components/page/Page";
import Title from "@/components/text/Title";


const AddBucketPage = (): JSX.Element => {
    return (
        <Page center={true}>     
            <Navbar/>
            <Title color={"#4D94E7"}>add your bucket.</Title>
            <BucketForm/>
        </Page>     
    );

};

export default AddBucketPage;

