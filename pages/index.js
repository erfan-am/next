import { connect } from "react-redux";
import { useRouter } from "next/router";
import ImageList from "../app/imagePlace/ImageList";
import { products } from "../confg/selector";
import {createStructuredSelector} from 'reselect'
const Index = ({ places }) => {
  const router = useRouter();
  return (
      <div style={{ width: "90%", margin: "50px auto" }}>
        <ImageList items={places} history={router} />
      </div>
  );
};

const mapStateToProps = createStructuredSelector({
  places: products

})
export default connect(mapStateToProps)(Index);
