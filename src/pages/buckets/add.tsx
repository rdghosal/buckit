import BucketForm from "@/components/form/BucketForm";
import Navbar from "@/components/navbar/Navbar";
import Page from "@/components/page/Page";


const AddBucketPage = (): JSX.Element => {

    return (
        <Page>     
            <Navbar/>
            <BucketForm/>
        </Page>     
    );

};

export default AddBucketPage;

