import AddItemButton from "@/components/button/AddItemButton";
import VerticalContainer from "@/components/page/VerticalContainer";
import Title from "@/components/text/Title";
import  Bucket from "@/components/bucket/Bucket";
import Navbar from "../../components/navbar/Navbar";
import Page from "../../components/page/Page";


export default function BucketsMenu() {
  return (
    <Page center={true}>
        <Navbar />
        <Title color={"#6E7D86"}>your buckets.</Title>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'left',
            width: '100%',
            paddingLeft: '1.5rem',
            marginBottom: '2rem'}}>
            <AddItemButton onClick={moveToBucketForm}/>
        </div>
        <VerticalContainer>
            <Bucket title="my-test" description='test' />
        </VerticalContainer>
    </Page>
  );
}

function moveToBucketForm(): void {
    window.location.href = "/buckets/add";
}
