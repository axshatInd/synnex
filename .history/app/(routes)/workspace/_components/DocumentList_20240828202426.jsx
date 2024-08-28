import Image from "next/image";
import React from "react";

function DocumentList({ documentList }) {
  return (
    <div>
      {documentList.map((doc, index) => (
        <div key={index}>
          <div>
            <Image src={"/document.svg"} width={20} height={20} />
            <h2>{doc.documentName}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DocumentList;
