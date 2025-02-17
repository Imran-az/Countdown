"use client"
import React, { useRef, useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import "./CountdownTimer.css";
import { motion } from "framer-motion"
import { DEFAULT_DAYS } from "../constants.js";


const CountdownTimer = ({ targetDate, color, textSize, font }) => {
    const timeRef = {
        days: useRef(),
        hours: useRef(),
        minutes: useRef(),
        seconds: useRef(),
    }
    const [timeLeft, setTimeLeft] = useState({ ...DEFAULT_DAYS });

    useEffect(() => {
        if (!targetDate) return;

        const interval = setInterval(() => {
            const now = new Date();
            const target = new Date(targetDate);
            const difference = target - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ ...DEFAULT_DAYS });
            } else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="countdown-container">
            <div className="countdown-values">
                <Draggable nodeRef={timeRef.days}>
                    <div className='Days' ref={timeRef.days}>
                        <motion.div
                            className="countdown-value"
                            style={{ color: color.day, fontFamily: font.day }}
                            initial={{ opacity: 0, y: -20, rotate: 0 }}
                            animate={{ opacity: 1, y: 0, rotate: 360 }}
                            transition={{ duration: 1.4, delay: 0.1 }}
                        >
                            <p className="big-textDays" style={{ fontSize: `${textSize.day}px` }}>{timeLeft.days}</p>
                            <span className="daysTxt">DAYS</span>
                        </motion.div>
                    </div>
                </Draggable>
                <Draggable nodeRef={timeRef.hours}>
                    <div className='Hours' ref={timeRef.hours}>
                        <motion.div
                            className="countdown-value"
                            style={{ color: color.hours, fontFamily: font.hours }}
                            initial={{ opacity: 0, y: -20, rotate: 0 }}
                            animate={{ opacity: 1, y: 0, rotate: 360 }}
                            transition={{ duration: 1.4, delay: 0.4 }}
                        >
                            <p className="big-textHours" style={{ fontSize: `${textSize.hours}px` }}>{timeLeft.hours}</p>
                            <span className="hrsTxt">HOURS</span>
                        </motion.div>
                    </div>
                </Draggable>
                <Draggable nodeRef={timeRef.minutes}>
                    <div className='Minutes' ref={timeRef.minutes}>
                        <motion.div
                            className="countdown-value"
                            style={{ color: color.minute, fontFamily: font.minute }}
                            initial={{ opacity: 0, y: -20, rotate: 0 }}
                            animate={{ opacity: 1, y: 0, rotate: 360 }}
                            transition={{ duration: 1.4, delay: 0.7 }}
                        >
                            <p className="big-textMins" style={{ fontSize: `${textSize.minute}px` }}>{timeLeft.minutes}</p>
                            <span className="minTxt">MINS</span>
                        </motion.div>
                    </div>
                </Draggable>
                <Draggable nodeRef={timeRef.seconds}>
                    <div className='Seconds' ref={timeRef.seconds}>
                        <motion.div
                            className="countdown-value"
                            style={{ color: color.seconds, fontFamily: font.seconds }}
                            initial={{ opacity: 0, y: -20, rotate: 0 }}
                            animate={{ opacity: 1, y: 0, rotate: 360 }}
                            transition={{ duration: 1.4, delay: 1.0 }}
                        >
                            <p className="big-textSec" style={{ fontSize: `${textSize.seconds}px` }}>{timeLeft.seconds}</p>
                            <span className="secTxt">SEC</span>
                        </motion.div>
                    </div>
                </Draggable>
            </div>
        </div>
    );
};

export default CountdownTimer;

