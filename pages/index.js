import Layout from "../app/shared/Layout";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import ImageList from "../app/imagePlace/ImageList";
const Index = ({ places }) => {
  console.log(places);
  const router = useRouter();
  return (
    <Layout>
      <div style={{ width: "90%", margin: "50px auto" }}>
        <ImageList items={places} history={router} />
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  places: state.root.places
});
export default connect(mapStateToProps)(Index);
