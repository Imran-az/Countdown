"use client"
import React from 'react';
import { AVAILABLE_FONTS } from '../constants';

export default function TextCustomizer({ color = {}, setColor, textSize = {}, setTextSize, font={}, setFont }) {

    const handleColorChange = (e, type) => {
        const newColor = e.target.value;
        setColor((prevColors) => ({
          ...prevColors,
          [type]: newColor,
        }));
      };
      
      const handleTextSizeChange = (e, type) => {
          const newSize = Number(e.target.value);
          setTextSize((prevSizes) => ({
              ...prevSizes,
              [type]: newSize,
          }));
      };

    const handleFontChange = (e, type) => {
        const newFont = e.target.value;
        setFont((prevFonts) => ({
            ...prevFonts,
            [type]: newFont,
        }));
    };

    const handleFontUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const fileType = file.name.split(".").pop();
        if (!["ttf", "otf"].includes(fileType)) {
            alert("Please upload a valid .ttf or .otf font file.");
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const fontData = event.target.result;
            const fontName = file.name.replace(/\.[^/.]+$/, "");

            const newFont = new FontFace(fontName, `url(${fontData})`);
            newFont.load().then((loadedFont) => {
                document.fonts.add(loadedFont);
                setFont({ day: fontName, hours: fontName, minutes: fontName, seconds: fontName });
            }).catch((err) => console.error("Font load error:", err));
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <h1 className="change-colors">Change Colors:</h1>
            <div className="color-picker-container">
                <div className="changer">
                    Day:
                    <input type="color" value={color.day} onChange={(e) => handleColorChange(e, "day")} />
                </div>
                <div className="changer">
                    Hours:
                    <input type="color" value={color.hours} onChange={(e) => handleColorChange(e, "hours")} />
                </div>
                <div className="changer">
                    Minutes:
                    <input type="color" value={color.minute} onChange={(e) => handleColorChange(e, "minute")} />
                </div>
                <div className="changer">
                    Seconds:
                    <input type="color" value={color.seconds} onChange={(e) => handleColorChange(e, "seconds")} />
                </div>
            </div>
            <hr className="divider" />
            <h1 className="change-font-sizes">Change Font Sizes:</h1>
            <div className="text-size-container">
                <div className="changer">
                    Day:
                    <input type="number" className="font-input" value={textSize.day} onChange={(e) => handleTextSizeChange(e, "day")} />
                </div>
                <div className="changer">
                    Hours:
                    <input type="number" className="font-input" value={textSize.hours} onChange={(e) => handleTextSizeChange(e, "hours")} />
                </div>
                <div className="changer">
                    Minutes:
                    <input type="number" className="font-input" value={textSize.minute} onChange={(e) => handleTextSizeChange(e, "minute")} />
                </div>
                <div className="changer">
                    Seconds:
                    <input type="number" className="font-input" value={textSize.seconds} onChange={(e) => handleTextSizeChange(e, "seconds")} />
                </div>
            </div>
            <hr className="divider" />
            <h1 className="change-colors">Change Fonts:</h1>
            <div className="font-picker-container">
                <div className="changer">
                    Day:
                    <select className="font-input" value={font.day} onChange={(e) => handleFontChange(e, "day")}>
                        {AVAILABLE_FONTS.map((font) => (
                            <option key={font} value={font}>{font}</option>
                        ))}
                    </select>
                </div>
                <div className="changer">
                    Hour:
                    <select className="font-input" value={font.hours} onChange={(e) => handleFontChange(e, "hours")}>
                        {AVAILABLE_FONTS.map((font) => (
                            <option key={font} value={font}>{font}</option>
                        ))}
                    </select>
                </div>
                <div className="changer">
                    Minutes:
                    <select className="font-input" value={font.minutes} onChange={(e) => handleFontChange(e, "minute")}>
                        {AVAILABLE_FONTS.map((font) => (
                            <option key={font} value={font}>{font}</option>
                        ))}
                    </select>
                </div>
                <div className="changer">
                    Seconds:
                    <select className="font-input" value={font.seconds} onChange={(e) => handleFontChange(e, "seconds")}>
                        {AVAILABLE_FONTS.map((font) => (
                            <option key={font} value={font}>{font}</option>
                        ))}
                    </select>
                </div>
            </div>
            <hr className="divider" />

            <div className="changer">
                Upload Font:
                <input
                    type="file"
                    className="font-upload"
                    accept=".ttf, .otf"
                    onChange={handleFontUpload}
                />
            </div>
        </div>
    );
}