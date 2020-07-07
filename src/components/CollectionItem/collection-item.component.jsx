import React from "react";
import { connect } from "react-redux";

import CustomButton from "../CustomButton/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { title, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="collection-footer">
        <span className="name">{title}</span>
        <span className="price">{price}</span>
      </div>

      <CustomButton onClick={() => addItem(item)} inverted>
        Adicionar
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
