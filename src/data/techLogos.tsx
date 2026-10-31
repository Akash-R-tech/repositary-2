import React from 'react';

export interface TechLogoProps {
  className?: string;
  size?: number;
}

// Collection of official, crisp SVG vector icons for technologies
export const TechIcons: Record<string, React.FC<TechLogoProps>> = {
  // Programming Languages
  Python: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M11.91 2C6.98 2 7.29 4.14 7.29 4.14V6.36H12.06V7.07H5.27S2 6.7 2 11.66C2 16.63 4.86 16.39 4.86 16.39H6.57V14.02C6.57 11.23 8.97 11.23 8.97 11.23H13.78C16.43 11.23 16.43 8.66 16.43 8.66V4.32C16.43 4.32 16.79 2 11.91 2ZM9.56 3.42C10.12 3.42 10.58 3.88 10.58 4.44C10.58 5 10.12 5.46 9.56 5.46C9 5.46 8.54 5 8.54 4.44C8.54 3.88 9 3.42 9.56 3.42Z" fill="#3776AB"/>
      <path d="M12.09 22C17.02 22 16.71 19.86 16.71 19.86V17.64H11.94V16.93H18.73S22 17.3 22 12.34C22 7.37 19.14 7.61 19.14 7.61H17.43V9.98C17.43 12.77 15.03 12.77 15.03 12.77H10.22C7.57 12.77 7.57 15.34 7.57 15.34V19.68C7.57 19.68 7.21 22 12.09 22ZM14.44 20.58C13.88 20.58 13.42 20.12 13.42 19.56C13.42 19 13.88 18.54 14.44 18.54C15 18.54 15.46 19 15.46 19.56C15.46 20.12 15 20.58 14.44 20.58Z" fill="#FFD43B"/>
    </svg>
  ),
  Java: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M8.86 16.59C8.86 16.59 9.38 17.32 11.23 17.51C13.4 17.73 14.92 16.9 14.92 16.9C14.92 16.9 14.39 17.61 12.87 18.06C11.02 18.61 8.86 18.06 8.86 16.59ZM9.94 13.91C9.94 13.91 10.74 14.54 12.8 14.28C15.22 13.97 15.77 12.8 15.77 12.8C15.77 12.8 15.44 13.56 13.6 14.12C11.5 14.76 9.94 13.91 9.94 13.91ZM16.27 10.97C16.89 12.18 15.36 13.34 15.36 13.34C15.36 13.34 16.74 12.43 16.53 11.39C16.32 10.35 15.38 9.99 15.38 9.99C15.38 9.99 15.65 9.76 16.27 10.97ZM12.02 0.5C12.02 0.5 8.7 4.19 10.42 7.07C11.83 9.42 14.53 9.68 14.53 9.68C14.53 9.68 12.98 8.86 12.45 7.62C11.75 5.98 13.79 4.3 12.02 0.5ZM7.78 19.33C7.78 19.33 9.47 20.37 13.06 19.98C16.32 19.63 17.81 18.59 17.81 18.59C17.81 18.59 16.5 19.78 13.13 20.49C9.17 21.32 7.78 19.33 7.78 19.33ZM6.5 21.67C6.5 21.67 8.91 22.95 14.47 22.38C19.39 21.87 21 19.86 21 19.86C21 19.86 19.26 21.75 14.36 22.84C8.75 24.1 6.5 21.67 6.5 21.67Z" fill="#EA2D2E"/>
      <path d="M12.96 11.23C13.88 12.02 12.63 13.25 12.63 13.25C12.63 13.25 13.89 12.35 13.48 11.45C13.07 10.55 12.04 10.44 12.04 10.44C12.04 10.44 12.04 10.44 12.96 11.23Z" fill="#007396"/>
    </svg>
  ),
  JavaScript: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
      <path d="M6.5 18.5L8.5 17.3C9 18.2 9.7 18.8 10.8 18.8C11.9 18.8 12.5 18.2 12.5 17.1V10H14.8V17.2C14.8 19.6 13.3 20.7 11 20.7C9.3 20.7 7.7 19.8 6.5 18.5ZM16.3 18.2L18.3 17C18.9 18 19.8 18.7 20.9 18.7C21.9 18.7 22.5 18.2 22.5 17.5C22.5 16.6 21.8 16.3 20.5 15.8L19.8 15.5C17.7 14.6 16.6 13.6 16.6 11.7C16.6 9.7 18.2 8.2 20.6 8.2C22.3 8.2 23.6 9 24.5 10.6L22.6 11.8C22.1 11 21.4 10.5 20.5 10.5C19.7 10.5 19.1 11 19.1 11.6C19.1 12.3 19.6 12.6 20.8 13.1L21.5 13.4C23.9 14.4 25.1 15.4 25.1 17.4C25.1 19.7 23.3 21 20.8 21C18.7 21 17.2 19.9 16.3 18.2Z" fill="#000000" transform="translate(-2, 0) scale(0.9)"/>
    </svg>
  ),
  C: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="11" fill="#00599C" fillOpacity="0.15" stroke="#00599C" strokeWidth="1.5"/>
      <path d="M15.5 8.5C14.5 7.5 13.2 7 11.8 7C8.6 7 6 9.6 6 12.8C6 16 8.6 18.6 11.8 18.6C13.4 18.6 14.7 18 15.7 16.9L13.8 15.3C13.2 15.9 12.5 16.2 11.7 16.2C9.8 16.2 8.3 14.7 8.3 12.8C8.3 10.9 9.8 9.4 11.7 9.4C12.4 9.4 13.1 9.7 13.6 10.2L15.5 8.5Z" fill="#00599C"/>
    </svg>
  ),
  'C++': ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="11" fill="#00599C" fillOpacity="0.2" stroke="#004482" strokeWidth="1.5"/>
      <path d="M11 9C10.2 8.3 9.2 8 8.1 8C5.8 8 4 9.8 4 12C4 14.2 5.8 16 8.1 16C9.2 16 10.2 15.7 11 15L9.6 13.7C9.2 14.1 8.7 14.3 8.1 14.3C6.8 14.3 5.8 13.3 5.8 12C5.8 10.7 6.8 9.7 8.1 9.7C8.7 9.7 9.2 9.9 9.6 10.3L11 9ZM14 11.2H15.2V10H16.2V11.2H17.4V12.2H16.2V13.4H15.2V12.2H14V11.2ZM18.2 11.2H19.4V10H20.4V11.2H21.6V12.2H20.4V13.4H19.4V12.2H18.2V11.2Z" fill="#659AD2"/>
    </svg>
  ),

  // Frontend & UI
  React: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)"/>
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)"/>
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)"/>
      <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
    </svg>
  ),
  'React Native': ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(30 12 12)"/>
      <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(90 12 12)"/>
      <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(150 12 12)"/>
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB"/>
    </svg>
  ),
  HTML: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 2L5 20L12 22L19 20L21 2H3Z" fill="#E34F26"/>
      <path d="M12 3.8V20.2L17.5 18.7L19.1 3.8H12Z" fill="#EF652A"/>
      <path d="M12 7.7H7.4L7.7 10.9H12V14.1L8.8 13.2L8.6 11.2H6.5L6.9 15.3L12 16.7V7.7ZM12 7.7V10.9H16.3L16 14.1L12 15.2V16.7L16.8 15.3L17.4 7.7H12Z" fill="#FFFFFF"/>
    </svg>
  ),
  CSS: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 2L5 20L12 22L19 20L21 2H3Z" fill="#1572B6"/>
      <path d="M12 3.8V20.2L17.5 18.7L19.1 3.8H12Z" fill="#33A9DC"/>
      <path d="M12 7.7H7.4L7.7 10.9H12V14.1L8.8 13.2L8.6 11.2H6.5L6.9 15.3L12 16.7V7.7ZM12 7.7V10.9H16.3L16 14.1L12 15.2V16.7L16.8 15.3L17.4 7.7H12Z" fill="#FFFFFF"/>
    </svg>
  ),
  'Tailwind CSS': ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4"/>
    </svg>
  ),
  Vite: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M21.2 3.8L12.5 19.3L12 20.2L11.5 19.3L2.8 3.8C2.5 3.3 2.8 2.7 3.4 2.7H20.6C21.2 2.7 21.5 3.3 21.2 3.8Z" fill="#BD34FE"/>
      <path d="M15.8 2.7L9.5 14L8.3 12.2L6.8 2.7H15.8Z" fill="#41D1FF"/>
      <path d="M12.9 8.2L11.6 11.2H14.1L10.3 16.5L11.1 12.3H8.9L12.9 8.2Z" fill="#FFD427"/>
    </svg>
  ),

  // Backend & Databases
  'Node.js': ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" fill="#339933"/>
      <path d="M12 4.4L18.4 8.1V15.7L12 19.4L5.6 15.7V8.1L12 4.4Z" fill="#215732"/>
      <path d="M12 6.5L16.5 9.1V14.5L12 17.1L7.5 14.5V9.1L12 6.5Z" fill="#339933"/>
    </svg>
  ),
  'Express.js': ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#000000" stroke="#666666" strokeWidth="1.5"/>
      <text x="12" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">ex</text>
    </svg>
  ),
  'Spring Boot': ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L3 7.2V16.8L12 22L21 16.8V7.2L12 2Z" fill="#6DB33F"/>
      <path d="M12 5.5L6 9V15L12 18.5L18 15V9L12 5.5Z" fill="#589632"/>
      <path d="M11 9H13V15H11V9Z" fill="#FFFFFF"/>
    </svg>
  ),
  MongoDB: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12.003 1C12.003 1 7 7.5 7 13.5C7 17.09 9.913 20 12.003 23C14.093 20 17 17.09 17 13.5C17 7.5 12.003 1 12.003 1Z" fill="#47A248"/>
      <path d="M12 1.5V22.5C12 22.5 10.5 18 10.5 13.5C10.5 9 12 1.5 12 1.5Z" fill="#3FA037"/>
      <path d="M12 1.5V22.5C12 22.5 13.5 18 13.5 13.5C13.5 9 12 1.5 12 1.5Z" fill="#499D4A"/>
    </svg>
  ),
  MySQL: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M18.8 6.2C17.2 4.6 14.5 4.5 12.3 5.9C11.5 4.7 10.1 4 8.5 4C5.5 4 3 6.5 3 9.5C3 13.5 6.5 16 11.2 19.5L12 20.1L12.8 19.5C17.5 16 21 13.5 21 9.5C21 8.2 20.2 7.1 18.8 6.2Z" fill="#4479A1"/>
      <circle cx="14" cy="11" r="1.5" fill="#E48E00"/>
    </svg>
  ),
  'REST APIs': ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="5" width="20" height="14" rx="3" stroke="#8B5CF6" strokeWidth="1.8" fill="#8B5CF6" fillOpacity="0.15"/>
      <path d="M6 12H18M15 9L18 12L15 15" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // AI & Vision
  Gemini: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" fill="url(#gemini-grad)"/>
      <defs>
        <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1BA1E3"/>
          <stop offset="0.5" stopColor="#5E58F4"/>
          <stop offset="1" stopColor="#C443C7"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  OpenAI: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M22 10.5C21.7 8.5 20.3 6.9 18.5 6.2C18.1 4.5 16.8 3.2 15 2.6C13.2 2 11.2 2.3 9.7 3.4C8.3 2.9 6.8 3.1 5.5 3.9C4.2 4.7 3.3 6.1 3.1 7.6C1.7 8.7 1 10.3 1.1 12C1.2 13.7 2.1 15.2 3.5 16.1C3.3 17.8 4 19.5 5.2 20.6C6.4 21.7 8.2 22.2 9.8 21.9C10.7 23.2 12.3 23.9 13.9 23.8C15.5 23.7 17 22.8 17.8 21.4C19.4 21.1 20.8 20 21.3 18.4C21.9 16.8 21.6 15 20.6 13.7C21.6 12.8 22.1 11.7 22 10.5Z" fill="#10A37F" fillOpacity="0.2" stroke="#10A37F" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="3.5" stroke="#10A37F" strokeWidth="1.5"/>
    </svg>
  ),
  OpenCV: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="6" r="4" fill="#FF1A1A"/>
      <circle cx="6" cy="16" r="4" fill="#00FF00"/>
      <circle cx="18" cy="16" r="4" fill="#0000FF"/>
      <circle cx="12" cy="6" r="2" fill="#050508"/>
      <circle cx="6" cy="16" r="2" fill="#050508"/>
      <circle cx="18" cy="16" r="2" fill="#050508"/>
    </svg>
  ),
  YOLO: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#00FFFF" strokeWidth="1.8" strokeDasharray="3 3"/>
      <circle cx="12" cy="12" r="3.5" fill="#00FFFF"/>
      <path d="M12 4V8M12 16V20M4 12H8M16 12H20" stroke="#00FFFF" strokeWidth="1.5"/>
    </svg>
  ),

  // Hardware & Robotics
  'Raspberry Pi': ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 7C10.5 7 9.5 8 9.5 9C9.5 9.7 9.8 10.3 10.3 10.7C9.3 11.2 8.5 12.2 8.5 13.5C8.5 14.8 9.2 15.9 10.2 16.4C9.5 17 9 17.9 9 19C9 20.7 10.3 22 12 22C13.7 22 15 20.7 15 19C15 17.9 14.5 17 13.8 16.4C14.8 15.9 15.5 14.8 15.5 13.5C15.5 12.2 14.7 11.2 13.7 10.7C14.2 10.3 14.5 9.7 14.5 9C14.5 8 13.5 7 12 7Z" fill="#C51A4A"/>
      <path d="M10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2C10.9 2 10 2.9 10 4Z" fill="#75A928"/>
    </svg>
  ),
  Arduino: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 7C3.7 7 1 9.2 1 12C1 14.8 3.7 17 7 17C9.2 17 11.1 15.9 12 14.3C12.9 15.9 14.8 17 17 17C20.3 17 23 14.8 23 12C23 9.2 20.3 7 17 7C14.8 7 12.9 8.1 12 9.7C11.1 8.1 9.2 7 7 7Z" stroke="#00979D" strokeWidth="2" fill="#00979D" fillOpacity="0.2"/>
      <path d="M5.5 12H8.5M7 10.5V13.5M15.5 12H18.5" stroke="#00979D" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  ESP8266: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" fill="#1A1A2E" stroke="#E7352C" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="3" fill="#E7352C"/>
      <path d="M7 4V2M11 4V2M15 4V2M7 22V20M11 22V20M15 22V20" stroke="#E7352C" strokeWidth="1.5"/>
    </svg>
  ),
  'ROS 2': ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="#22314E" strokeWidth="2" fill="#22314E"/>
      <circle cx="12" cy="7" r="1.5" fill="#FFFFFF"/>
      <circle cx="7" cy="12" r="1.5" fill="#FFFFFF"/>
      <circle cx="17" cy="12" r="1.5" fill="#FFFFFF"/>
      <circle cx="12" cy="17" r="1.5" fill="#FFFFFF"/>
      <circle cx="12" cy="12" r="2.2" fill="#3498DB"/>
    </svg>
  ),

  // Engineering & Simulation
  MATLAB: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M2 17L7 7L12 16L17 10L22 17H2Z" fill="url(#matlab-grad)"/>
      <defs>
        <linearGradient id="matlab-grad" x1="2" y1="7" x2="22" y2="17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E65100"/>
          <stop offset="1" stopColor="#D84315"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  Simulink: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="4" width="7" height="7" rx="1.5" fill="#0076A8"/>
      <rect x="14" y="13" width="7" height="7" rx="1.5" fill="#0076A8"/>
      <path d="M10 7.5H12V16.5H14" stroke="#0076A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Multisim: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="#0070BA" strokeWidth="1.5" fill="#0070BA" fillOpacity="0.1"/>
      <path d="M5 12H8L10 8L13 16L15 10L17 12H19" stroke="#0070BA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Fusion: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" stroke="#F56D23" strokeWidth="2" fill="#F56D23" fillOpacity="0.15"/>
      <path d="M12 2V22M2 8L22 16M2 16L22 8" stroke="#F56D23" strokeWidth="1.2"/>
    </svg>
  ),

  // Development Tools
  'VS Code': ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M17.5 2L5.8 11.2L2 8.4V15.6L5.8 12.8L17.5 22L22 19.8V4.2L17.5 2ZM17.5 7.4V16.6L9.6 12L17.5 7.4Z" fill="#007ACC"/>
    </svg>
  ),
  Git: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M21.6 10.9L13.1 2.4C12.6 1.9 11.7 1.9 11.1 2.4L9.6 4L11.5 5.9C12.1 5.7 12.8 5.8 13.3 6.3C13.8 6.8 13.9 7.6 13.6 8.2L15.6 10.2C16.2 9.9 17 10 17.5 10.5C18.1 11.1 18.1 12 17.5 12.6C17 13.1 16.1 13.1 15.5 12.6C15 12.1 14.9 11.3 15.3 10.7L13.4 8.8V15.3C13.6 15.5 13.8 15.8 13.8 16.2C13.8 17 13.1 17.7 12.3 17.7C11.5 17.7 10.8 17 10.8 16.2C10.8 15.7 11.1 15.2 11.5 15V8.5C11.1 8.3 10.8 7.8 10.8 7.3C10.8 6.8 11 6.4 11.3 6.1L9.4 4.2L2.4 11.2C1.9 11.7 1.9 12.6 2.4 13.1L10.9 21.6C11.4 22.1 12.3 22.1 12.9 22.1L21.6 12.6C22.1 12.1 22.1 11.4 21.6 10.9Z" fill="#F05032"/>
    </svg>
  ),
  GitHub: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  ),
  Cursor: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 3L11.5 21L14.5 13.5L22 10.5L4 3Z" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  Windsurf: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#0EA5E9" fillOpacity="0.2" stroke="#0EA5E9" strokeWidth="1.5"/>
      <path d="M7 15C10 15 12 9 17 9" stroke="#0EA5E9" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  Replit: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 6H12V10H4V6ZM12 10H20V14H12V10ZM4 14H12V18H4V14Z" fill="#F26207"/>
    </svg>
  ),
  'Android Studio': ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="#3DDC84" strokeWidth="1.5" fill="#3DDC84" fillOpacity="0.15"/>
      <path d="M7 11V16M17 11V16M8.5 17H15.5V11C15.5 9.5 14 8 12 8C10 8 8.5 9.5 8.5 11V17ZM10 7L8.5 5M14 7L15.5 5" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Vercel: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L23 21H1L12 2Z" fill="#FFFFFF"/>
    </svg>
  ),
  Figma: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M8 2H12V7H8C6.6 7 5.5 5.9 5.5 4.5C5.5 3.1 6.6 2 8 2Z" fill="#F24E1E"/>
      <path d="M12 2H16C17.4 2 18.5 3.1 18.5 4.5C18.5 5.9 17.4 7 16 7H12V2Z" fill="#FF7262"/>
      <path d="M8 7H12V12H8C6.6 12 5.5 10.9 5.5 9.5C5.5 8.1 6.6 7 8 7Z" fill="#A259FF"/>
      <path d="M12 7H16C17.4 7 18.5 8.1 18.5 9.5C18.5 10.9 17.4 12 16 12C14.6 12 13.5 10.9 13.5 9.5V7H12Z" fill="#1ABCFE"/>
      <path d="M8 12H12V17C12 18.4 10.9 19.5 9.5 19.5C8.1 19.5 7 18.4 7 17C7 15.6 8.1 14.5 9.5 14.5H12V12H8Z" fill="#0ACF83"/>
    </svg>
  ),
  n8n: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="6" cy="12" r="3" fill="#EA4B71"/>
      <circle cx="18" cy="7" r="3" fill="#EA4B71"/>
      <circle cx="18" cy="17" r="3" fill="#EA4B71"/>
      <path d="M8.5 10.5L15.5 8M8.5 13.5L15.5 16" stroke="#EA4B71" strokeWidth="1.8"/>
    </svg>
  ),
  Canva: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#00C4CC"/>
      <text x="12" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">C</text>
    </svg>
  ),
  Firebase: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4.5 18.5L6.5 4.5L10 11L4.5 18.5Z" fill="#FFA000"/>
      <path d="M19.5 18.5L14 3.5L10 11L19.5 18.5Z" fill="#F57C00"/>
      <path d="M12 21.5L4.5 18.5L10 11L12 7.5L14 11L19.5 18.5L12 21.5Z" fill="#FFCA28"/>
    </svg>
  ),
  Lovable: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF4785"/>
    </svg>
  ),
  Bolt: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#EAB308"/>
    </svg>
  ),
  Vellum: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="#6366F1" strokeWidth="1.8" fill="#6366F1" fillOpacity="0.15"/>
      <text x="12" y="16" textAnchor="middle" fill="#818CF8" fontSize="12" fontWeight="bold">V</text>
    </svg>
  ),
  Antigravity: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="#A855F7" strokeWidth="1.8" fill="#A855F7" fillOpacity="0.15"/>
      <path d="M12 7V17M12 7L8 11M12 7L16 11" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Manus: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="#10B981" strokeWidth="1.8" fill="#10B981" fillOpacity="0.15"/>
      <text x="12" y="16" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">M</text>
    </svg>
  ),
  Opencode: ({ className = 'w-5 h-5', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="4" width="18" height="16" rx="3" stroke="#38BDF8" strokeWidth="1.8" fill="#38BDF8" fillOpacity="0.15"/>
      <path d="M8 10L6 12L8 14M16 10L18 12L16 14M13 9L11 15" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
};

// Fallback high-contrast monogram badge for specialized AI / Dev ecosystem tools
export const GenericTechBadge: React.FC<{ name: string; size?: number; className?: string }> = ({
  name,
  size = 20,
  className = 'w-5 h-5'
}) => {
  const initial = name.slice(0, 2).toUpperCase();
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-md bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-[10px] font-mono font-bold text-purple-300 ${className}`}
    >
      {initial}
    </div>
  );
};

export const RenderTechLogo: React.FC<{ name: string; size?: number; className?: string }> = ({
  name,
  size = 20,
  className
}) => {
  // Normalize match
  const match = Object.keys(TechIcons).find(k => k.toLowerCase() === name.toLowerCase());
  if (match && TechIcons[match]) {
    const Component = TechIcons[match];
    return <Component size={size} className={className} />;
  }
  return <GenericTechBadge name={name} size={size} className={className} />;
};
