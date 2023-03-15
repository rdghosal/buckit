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
        <VerticalContainer>
            <Bucket title="my-test" description='test' />
        </VerticalContainer>
        <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                paddingRight: '2rem',
                alignItems: 'start',
                position: 'fixed',
                top: 'calc(100vh - 110px)',
                width: '100%',
                }}
            >
            <AddItemButton onClick={moveToBucketForm}/>
        </div>
    </Page>
  );
}

function moveToBucketForm(): void {
    window.location.href = "/buckets/add";
}
