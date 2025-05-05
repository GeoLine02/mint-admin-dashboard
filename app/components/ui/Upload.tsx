"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface UploadProps {
  onChange?: (file: File | null) => void;
  label?: string;
}

const Upload = ({
  onChange,
  label = "Click to upload or drag and drop",
}: UploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      onChange?.(file);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="border-2 border-dashed border-active-purple rounded-xl px-6 py-8 text-center bg-white hover:border-primary-purple transition-all duration-200 cursor-pointer w-full max-w-md mx-auto">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleUpload}
        className="hidden"
      />

      {previewUrl ? (
        <div className="flex flex-col items-center gap-4">
          <Image
            width={250}
            height={250}
            src={previewUrl}
            alt="Preview"
            className="object-cover"
          />
          <button
            onClick={() => {
              setPreviewUrl(null);
              inputRef.current!.value = "";
              onChange?.(null);
            }}
            className="text-sm text-red-500"
          >
            Delete
          </button>
        </div>
      ) : (
        <div onClick={handleClick}>
          <div className="text-blue-500 text-3xl mb-2">📁</div>
          <p className="text-gray-600 text-sm">
            {label} <br />
            <span className="text-xs text-gray-400">(max. 800x400px)</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Upload;
