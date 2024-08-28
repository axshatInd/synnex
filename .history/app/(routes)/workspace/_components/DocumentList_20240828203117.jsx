import Image from "next/image";
import React from "react";

function DocumentList({ documentList }) {
  if (!documentList || documentList.length === 0) {
    return <div>No documents found.</div>;
  }

  return (
    <div>
      {documentList.map((doc, index) => (
        <div key={index} className="flex items-center mb-4">
          <Image
            src={"/document.svg"}
            width={40}
            height={40}
            alt="Document Icon"
          />
          <h2 className="ml-2">{doc.documentName}</h2>
        </div>
      ))}
    </div>
  );
}

export default DocumentList;
