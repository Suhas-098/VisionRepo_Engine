
import React from 'react';

interface LogoProps {
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8 w-8" }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-labelledby="vision-repo-inc-logo"
        >
            <title id="vision-repo-inc-logo">Vision Repo Engine Logo</title>
            <defs>
                <linearGradient
                    id="logo-gradient"
                    x1="2"
                    y1="2"
                    x2="22"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0%" stopColor="#4F46E5" /> {/* Indigo-600 */}
                    <stop offset="100%" stopColor="#9333EA" /> {/* Purple-600 */}
                </linearGradient>
            </defs>

            {/* Outer Hexagon-like shape / Eye contour */}
            <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="url(#logo-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-20"
            />

            {/* Central "Vision" Iris/Lens Element */}
            <path
                d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
                stroke="url(#logo-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Pupil / Focus point */}
            <circle cx="12" cy="12" r="3" fill="url(#logo-gradient)" />
        </svg>
    );
};

export default Logo;
