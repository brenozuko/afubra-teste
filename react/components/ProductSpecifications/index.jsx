import React, { useState, useEffect, useRef } from "react";
import { canUseDOM } from "vtex.render-runtime";
import { useProduct } from "vtex.product-context";

import "./global.css";

const ProductSpecifications = () => {
  const productInfo = useProduct();
  const productProperties = productInfo.product.properties;

  let stringRegex = productProperties[15].values[0];

  let messagetoSend = { __html: stringRegex.replace(/\n/g, "<br>") };

  console.log(productProperties);

  return (
    <div className="product-specs">
      <h2 className="specs-title">ESPECIFICAÇÕES TÉCNICAS</h2>
      <div className="table-specs">
        <tr className="table-row-white">
          <td className="table-data-white-description">Referência</td>
          <td
            className="table-data-white-value
          "
          >
            CAF610
          </td>
        </tr>

        <tr className="table-row-gray">
          <td className="table-data-gray-description">Modelo</td>
          <td
            className="table-data-gray-value"
            dangerouslySetInnerHTML={{
              __html: stringRegex.replace(/\n/g, "<br>"),
            }}
          ></td>
        </tr>
      </div>
    </div>
  );
};

ProductSpecifications.schema = {
  title: "Product Specification",
  description: "Product Specification",
  type: "object",
};

export default ProductSpecifications;
