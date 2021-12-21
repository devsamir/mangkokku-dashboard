import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import imageCompression from "browser-image-compression";

const Onboarding = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [imageError, setImageError] = useState("");
  const [loadingCompress, setLoadingCompress] = useState(false);

  const imageRef = useRef();
  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    if (file?.type.startsWith("image")) {
      setLoadingCompress(true);
      const compressImage = await imageCompression(file, {
        maxSizeMB: 0.005,
      }).catch(() => setImageError("Gagal Compress Image"));
      setImage(compressImage);
      var reader = new FileReader();
      var url = reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        setImagePreview(reader.result);
      };
      setImageError("");
      setLoadingCompress(false);
    } else {
      e.target.value = null;
      setImage(null);
      setImagePreview("");
      setImageError("Itu Bukan Image, BLOOOOK!");
    }
  };
  useEffect(() => {
    if (image?.size > 5000) setImageError("Gede Banget Mas xixi");
  }, [image]);
  useEffect(() => {
    if (imagePreview) {
      const height = imageRef.current.naturalHeight;
      const width = imageRef.current.naturalWidth;
      const resolution = width / height;
      if (resolution !== 1)
        setImageError("Resolusi Salah, Upload Image Dengan Resolusi 1x1 !");
    }
  }, [imagePreview]);

  return (
    <>
      <h1 className="text-3xl font-light text-gray-700 mb-2">Onboarding</h1>
      {/* BREADCRUMBS */}
      <div className="text-gray-500 text-sm flex items-center gap-2 mb-6">
        <Link to="/admin/dashboard">Admin</Link>
        <span>&gt;</span>
        <span>CMS</span>
        <span>&gt;</span>
        <span>Onboarding</span>
      </div>
      <div className="flex flex-col">
        <img ref={imageRef} src={imagePreview} className="w-64" />
        <input
          type="file"
          onChange={handleUploadImage}
          className="block w-full focus:outline-none text-sm text-gray-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-primary-50 file:text-primary-500
        hover:file:bg-primary-100"
          name=""
          id=""
        />
        <span className="text-red-500 text-sm">{imageError}</span>
      </div>
    </>
  );
};

export default Onboarding;
