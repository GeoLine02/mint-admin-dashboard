"use client";

import Button from "@/app/components/ui/Button";

const SettingsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">Setting Details</h1>
        <p className="text-medium-gray">
          Update your photo and personal details here.
        </p>
      </div>
      <div className="flex gap-6">
        <Button
          className="p-2 px-5 border-primary-purple"
          background="white"
          border="solid"
          textColor="lightGray"
          title="Cancel"
          rounded="medium"
          onClick={() => {}}
          type="button"
        />
        <Button
          className="p-2 px-7"
          background="primaryPurple"
          border="none"
          textColor="white"
          title="Save"
          rounded="medium"
          onClick={() => {}}
          type="submit"
        />
      </div>
    </div>
  );
};

export default SettingsHeader;
