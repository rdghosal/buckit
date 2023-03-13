import AddItemButton from "@/components/button/AddItemButton";
import Title from "@/components/text/Title";
import Navbar from "../../components/navbar/Navbar";
import Page from "../../components/page/Page";


export default function BucketsMenu() {
  return (
    <Page center={true}>
        <Navbar />
        <Title>your buckets.</Title>
        <AddItemButton onClick={moveToBucketForm}/>
    </Page>
  );
}

function moveToBucketForm(): void {
    window.location.href = "/bucket/add";
}
