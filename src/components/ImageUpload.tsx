"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Upload } from "lucide-react";
import { roboto } from "@/app/font";

interface ImageUploadProps {
  onChange: (url: string) => void;
  onSetPreview: (url: string) => void;
  value: string;
  error?: string;
}

const ImageUpload = ({
  onChange,
  onSetPreview,
  value,
  error,
}: ImageUploadProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      try {
        if (acceptedFiles.length > 0) {
          setIsLoading(true);
          const file = acceptedFiles[0];

          // Create form data
          const formData = new FormData();
          formData.append("file", file);
          formData.append(
            "upload_preset",
            process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
          );

          // Upload to Cloudinary
          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );

          const data = await response.json();

          if (data.secure_url) {
            onChange(data.secure_url);
            onSetPreview(data.secure_url);
          }
        }
      } catch (error) {
        console.error("Upload error:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [onChange, onSetPreview]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    maxFiles: 1,
    multiple: false,
  });

  return (
    <div className="space-y-4 w-full">
      <div className="flex flex-col p-6 lg:pb-12 gap-3 lg:gap-8 items-start w-full border border-[#07373F] bg-[#052228] rounded-3xl">
        <label>Upload Avatar</label>
        <div className="flex lg:h-[200px] justify-center items-center gap-[10px] w-full lg:bg-black/20">
          <div
            {...getRootProps()}
            className={`
              flex lg:w-[240px] h-[240px] w-full  flex-col justify-center items-center gap-4 overflow-hidden rounded-[32px] border-4 border-[#24A0B5]/50 bg-[#0E464F]
              ${isDragActive ? " border-[#24A0B5]/50" : "bg-[#0E464F]"}
              ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:border-white"
              }
              bg-[#08252B]
            `}
          >
            <input {...getInputProps()} />
            {!value && (
              <div className="flex flex-col items-center justify-center text-center">
                {isDragActive ? (
                  <p className="text-blue-500">Drop your image here</p>
                ) : (
                  <>
                    <div className="flex flex-col gap-4 items-center">
                      <Image
                        src="/upload.svg"
                        alt="ticket"
                        width={32}
                        height={32}
                      />
                      <p
                        className={`text-[16px] text-[#FAFAFA] text-center ${roboto.className} font-normal leading-[150%]`}
                      >
                        Drag & drop or click to <br /> upload
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
            {isLoading && (
              <div className="flex items-center gap-2 text-[#FAFAFA]">
                <Upload className="h-4 w-4 animate-spin" />
                <p className="text-sm">Uploading...</p>
              </div>
            )}
            {value && (
              <div className="relative w-60 h-60 ">
                <Image
                  width={160}
                  height={160}
                  alt="preview"
                  src={value}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition flex flex-col items-center justify-center text-white">
                  <div className="flex flex-col gap-4 items-center">
                    <Image
                      src="/upload.svg"
                      alt="ticket"
                      width={32}
                      height={32}
                    />
                    <p
                      className={`text-[16px] text-[#FAFAFA] text-center ${roboto.className} font-normal leading-[150%]`}
                    >
                      Drag & drop or click to <br /> upload
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default ImageUpload;
