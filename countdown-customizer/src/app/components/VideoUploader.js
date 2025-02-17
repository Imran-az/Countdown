import React, { useState, useEffect } from 'react';

export default function VideoUploader({ file }) {
    const [media, setMedia] = useState('');

    useEffect(() => {
        if (file) {
            const mediaUrl = URL.createObjectURL(file);
            setMedia(mediaUrl);

            return () => URL.revokeObjectURL(mediaUrl);
        }
    }, [file]);

    return (
        <div 
            className="background-container"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
            }}
        >
            {media && file?.type?.startsWith('video') ? (
                <video
                    src={media}
                    autoPlay
                    loop
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            ) : (
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: media ? `url(${media})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        transition: "background-image 0.5s ease-in-out",
                    }}
                />
            )}
        </div>
    );
}
