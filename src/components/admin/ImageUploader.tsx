"use client";

import { useRef, useState } from "react";
import { Upload, X, Image as ImageIcon, Check } from "lucide-react";

interface ImageUploaderProps {
  onPresetGet?: () => string;
  onImagesChange?: (images: string[]) => void;
}

export default function ImageUploader({
  onPresetGet,
  onImagesChange,
}: ImageUploaderProps) {
  const [thumbnail, setThumbnail] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [thumbnailUploading, setThumbnailUploading] = useState(false);
  const [imagesUploading, setImagesUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const thumbRef = useRef<HTMLInputElement>(null);
  const imagesRef = useRef<HTMLInputElement>(null);

  const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;

  const upload = async (file: File) => {
    const form = new FormData();
    form.append("file", file);

    const preset = onPresetGet?.() || "Celebd_Category_Upload_Preset";
    form.append("upload_preset", preset);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD}/image/upload`,
      {
        method: "POST",
        body: form,
      },
    );

    const data = await res.json();
    return data.secure_url;
  };

  const handleThumbnail = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setThumbnailUploading(true);
    setUploadProgress(0);

    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => Math.min(prev + 10, 90));
    }, 100);

    try {
      const url = await upload(file);
      setThumbnail(url);

      const newImages = [url, ...images];
      setImages(newImages);
      onImagesChange?.(newImages);

      setUploadProgress(100);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      clearInterval(progressInterval);
      setTimeout(() => {
        setThumbnailUploading(false);
        setUploadProgress(0);
      }, 400);
    }
  };

  const handleImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    setImagesUploading(true);

    try {
      const urls = await Promise.all(files.map((f) => upload(f)));
      const newImages = [...images, ...urls];

      setImages(newImages);
      onImagesChange?.(newImages);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setImagesUploading(false);
    }
  };

  const removeImage = (i: number) => {
    const newImages = images.filter((_, idx) => idx !== i);
    setImages(newImages);
    onImagesChange?.(newImages);

    if (i === 0 && newImages.length > 0) {
      setThumbnail(newImages[0]);
    } else if (i === 0) {
      setThumbnail("");
    }
  };

  return (
    <div className="space-y-4">
      {/* Thumbnail Upload Area */}
      <div className="relative">
        <label className="group relative flex flex-col justify-center items-center w-full h-48 rounded-xl border-2 border-dashed border-white/10 cursor-pointer overflow-hidden transition-all duration-200 hover:border-cyan-500/30 hover:bg-white/[0.02]">
          {thumbnail ? (
            <>
              <img
                src={thumbnail}
                alt="Thumbnail"
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="p-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 mb-2">
                  <Upload className="text-white" size={24} strokeWidth={2} />
                </div>
                <span className="text-white font-semibold text-sm">
                  Change Thumbnail
                </span>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 p-6">
              <div className="p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20 group-hover:scale-105 transition-transform">
                <Upload className="text-cyan-400" size={28} strokeWidth={2} />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-sm mb-1">
                  Upload Main Image
                </p>
                <p className="text-gray-500 text-xs">Click or drag to upload</p>
              </div>
            </div>
          )}

          <input
            ref={thumbRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleThumbnail}
          />
        </label>

        {/* Upload Progress */}
        {thumbnailUploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm rounded-xl">
            <div className="text-center">
              <div className="relative w-16 h-16 mx-auto mb-3">
                <svg className="transform -rotate-90 w-16 h-16">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="rgba(6, 182, 212, 0.2)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="rgb(6, 182, 212)"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - uploadProgress / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  {uploadProgress === 100 ? (
                    <Check
                      className="text-cyan-400"
                      size={24}
                      strokeWidth={3}
                    />
                  ) : (
                    <span className="text-white font-bold text-sm">
                      {uploadProgress}%
                    </span>
                  )}
                </div>
              </div>
              <p className="text-white font-medium text-sm">
                {uploadProgress === 100 ? "Complete!" : "Uploading..."}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Add More Images Button */}
      <label
        className={`group block overflow-hidden rounded-xl ${
          imagesUploading ? "opacity-70 pointer-events-none" : "cursor-pointer"
        }`}
      >
        <div className="relative bg-cyan-500 hover:bg-cyan-600 transition-colors">
          <div className="flex items-center justify-center gap-2 py-3 px-4">
            <ImageIcon className="text-white" size={18} strokeWidth={2} />
            <span className="text-white font-semibold text-sm">
              {imagesUploading ? "Uploading… almost there" : "Add More Images"}
            </span>
          </div>
        </div>

        <input
          ref={imagesRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleImages}
        />
      </label>

      {/* Image Gallery Grid */}
      {images.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-white/5" />
            <span className="text-gray-500 text-xs font-semibold uppercase">
              Gallery ({images.length})
            </span>
            <div className="h-px flex-1 bg-white/5" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {images.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-white/5 hover:border-cyan-500/30 transition-all"
              >
                <img
                  src={img}
                  alt={`Image ${i + 1}`}
                  className="object-cover w-full h-full"
                />

                {i === 0 && (
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-cyan-500 rounded-md text-white text-xs font-bold">
                    Main
                  </div>
                )}

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />

                <button
                  onClick={() => removeImage(i)}
                  className="absolute top-2 right-2 p-1.5 bg-red-500 hover:bg-red-600 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                >
                  <X size={14} strokeWidth={3} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
