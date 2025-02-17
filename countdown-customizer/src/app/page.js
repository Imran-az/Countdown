"use client"
import "./globals.css";
import { useState, useEffect } from "react";
import CountdownTimer from "./components/CountdownTimer.js";
import TextCustomizer  from "./components/TextCustomizer.js";
import VideoUploader from "./components/VideoUploader.js";
import { DEFAULT_COLORS, DEFAULT_SIZES, DEFAULT_FONTS } from "./constants.js";
import { motion } from "framer-motion";
import Loading from "./components/Loading";

export default function Home() {

    const [targetDate, setTargetDate] = useState("");
    const [image, setImage] = useState(null);
    const [isVisible, setVisible] = useState(false);

    const [color, setColor] = useState({ DEFAULT_COLORS });
    const [textSize, setTextSize] = useState({ DEFAULT_SIZES });
    const [font, setFont] = useState({ DEFAULT_FONTS });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedDate = localStorage.getItem("targetDate");
        const savedColor = localStorage.getItem("color");
        const savedTextSize = localStorage.getItem("textSize");
        const savedFont = localStorage.getItem("font");

        if (savedDate) setTargetDate(savedDate);
        if (savedColor) setColor(JSON.parse(savedColor));
        if (savedTextSize) setTextSize(JSON.parse(savedTextSize));
        if (savedFont) setFont(JSON.parse(savedFont));
    }, []);

    useEffect(() => {
        localStorage.setItem("targetDate", targetDate);
        localStorage.setItem("color", JSON.stringify(color));
        localStorage.setItem("textSize", JSON.stringify(textSize));
        localStorage.setItem("font", JSON.stringify(font));
    }, [targetDate, color, textSize, font]);

    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
                const fileType = file.type.split('/')[0];
                if (fileType === 'image' || fileType === 'video') {
                        setImage(file);
                } else {
                        alert('Please upload a valid image or video file.');
                }
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); 

        return () => clearTimeout(timer);
    }, []);
 
    if (loading) {
        return <Loading />;
    }

    return (
        <div className={`background-container ${image ? "custom-background" : ""}`}>
            {!isVisible && (
                <motion.button 
                    className="Edit-button" 
                    onClick={() => setVisible(true)} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.0 }}
                    exit={{ opacity: 0 }}
                >
                    EDIT
                </motion.button>
            )}
            <motion.div
                className="edit-container"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : "100%" }}
                transition={{ duration: 1.0 }}
                exit={{ opacity: 0, x: "100%" }}
            >
                {isVisible && (
                    <ul>
                        <li className="changer">
                            Change Date:
                            <input
                                type="datetime-local"
                                className="countdown-input"
                                value={targetDate}
                                onChange={(e) => {
                                    setTargetDate(e.target.value)}}
                            />
                            <hr className="divider" />
                        </li>
                        <li className="changer">
                            <TextCustomizer
                                color={color}
                                setColor={setColor}
                                textSize={textSize}
                                setTextSize={setTextSize}
                                font={font}
                                setFont={setFont}/>
                        </li>
                        <hr className="divider" />
                        <li className="changer">
                            Change Background:
                            <input
                                type="file" className="bg-input" accept="image/*, video/mp4" onChange={handleFile}
                            />
                        </li>
                    </ul>
                )}
                <button
                    className="close-button"
                    onClick={() => setVisible(false)}
                >
                    CLOSE
                </button>
            </motion.div>
            <CountdownTimer targetDate={targetDate} color={{ ...color}} textSize={{ ...textSize}} font={{ ...font }}/>
            <VideoUploader file={image}/>
        </div>
    );
}

