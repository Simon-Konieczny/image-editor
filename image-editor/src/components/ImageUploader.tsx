import React, { ChangeEvent, useState } from 'react';

type ImageUploaderProps = {
    setImageUrl: (url: string) => void;
};

const ImageUploader: React.FC<ImageUploaderProps> = ({ setImageUrl }) => {
    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImageUrl(url);
        }
    };

    return <input type="file" onChange={handleFileUpload} />;
};

export default ImageUploader;
