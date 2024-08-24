"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SmilePlus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function CreateWorkspace() {
  const [coverImage, setCoverImage] = useState("/cover.png");
  const [workspacename, setWorkspaceName] = useState();

  return (
    <div className="p-10 md:px-36 lg:px-52 xl:px-80 py-20">
      <div>
        {/* Cover Image */}
        <div className="relative group cursor-pointer">
          <h2 className="hidden absolute p-4 w-full h-full items-center group-hover:flex justify-center text-black">
            Change Cover
          </h2>
          <div className="group-hover:opacity-70">
            <Image
              src={coverImage}
              width={400}
              height={440}
              className="w-full h-[150px] object-cover rounded-t-xl"
            />
          </div>
        </div>

        {/*Input Section */}
        <div className="p-12">
          <h2 className="font-medium text-xl">Create a new Workspace </h2>
          <h2 className="text-sm mt-2">
            Synnex lets you create a shared space to collaborate with your team.
            <h2>You can always rename it later!</h2>
          </h2>
          <div className="mt-8 flex gap-2 items-center">
            <Button variant="outline">
              <SmilePlus />
            </Button>
            <Input
              placeholder="Workspace Name"
              onChange={(e) => setWorkspaceName(e.target.value)}
            />
          </div>
          <div className="mt-7 flex justify-end gap-6">
            <Button disabled={!workspacename?.length}>Create</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateWorkspace;
