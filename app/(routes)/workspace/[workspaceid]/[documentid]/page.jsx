"use client";
import React from "react";
import SideNav from "../../_components/SideNav";
import DocumentEditorSection from "../../_components/DocumentEditorSection";

function WorkspaceDocument({ params }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideNav params={params} />

      {/* Main Content Area */}
      <div className="flex-1 md:ml-2 ml-0 p-6 md:mt-4">
        <div className="bg-white dark:bg-black rounded-lg p-4 shadow-md h-full">
          <DocumentEditorSection />
        </div>
      </div>
    </div>
  );
}

export default WorkspaceDocument;
