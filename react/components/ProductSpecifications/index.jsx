import React, { useState, useEffect, useRef } from "react";
import { canUseDOM } from "vtex.render-runtime";
import { useProduct } from "vtex.product-context";

import "./global.css";

const ProductSpecifications = () => {
  const productInfo = useProduct();
  const productProperties = productInfo.product.properties;

  let tableRender = productProperties.map((property, index) => {
    return (
      <tr
        key={property.name}
        className={index % 2 == 0 ? "table-row-white" : "table-row-gray"}
      >
        <td
          className={
            index % 2 == 0
              ? "table-data-white-description"
              : "table-data-gray-description"
          }
        >
          {property.name}
        </td>
        <td
          className={
            index % 2 == 0 ? "table-data-white-value" : "table-data-gray-value"
          }
          dangerouslySetInnerHTML={{
            __html: property.values[0]
              ? property.values[0].replace(/\n/g, "<br>")
              : "",
          }}
        ></td>
      </tr>
    );
  });

  return productProperties ? (
    <div className="product-specs">
      <h2 className="specs-title">ESPECIFICAÇÕES TÉCNICAS</h2>

      <table className="table-specs">{tableRender}</table>
    </div>
  ) : (
    <div></div>
  );
};

ProductSpecifications.schema = {
  title: "Product Specification",
  description: "Product Specification",
  type: "object",
};

export default ProductSpecifications;
