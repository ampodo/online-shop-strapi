import "./Category.scss";
import derm1 from "../../../assets/category/derm1.jpg";
import hydra2 from "../../../assets/category/hydra2.jpg";
import men3 from "../../../assets/category/men3.jpg";
import sevemiracle from "../../../assets/category/sevemiracle.jpg";

const Category = () => {
  return (
    <div className="category-shop">
      <div className="categories">
        <div className="category">
          <img src={derm1} alt="" />
        </div>
        <div className="category">
          <img src={hydra2} alt="" />
        </div>
        <div className="category">
          <img src={men3} alt="" />
        </div>
        <div className="category">
          <img src={sevemiracle} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
