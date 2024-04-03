/** @type {import('tailwindcss').Config} */
module.exports = {
    // content: [
    //     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    //     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    //     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    //     "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    // ],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: "641px",
                // => @media (min-width: 640px) { ... }

                md: "769px",
                // => @media (min-width: 768px) { ... }

                lg: "1025px",
                // => @media (min-width: 1024px) { ... }

                xl: "1281px",
                // => @media (min-width: 1280px) { ... }

                "2xl": "1537px",
                // => @media (min-width: 1536px) { ... }
            },
            fontFamily: {
                Agrandir: ["Agrandir"],
                Agrandir_GrandLight: ["Agrandir-GrandLight"],
                Agrandir_WideBlackItalic: ["Agrandir-WideBlackItalic"],
                Kanit: ["Kanit"],
                Kanit_Italic: ["Kanit-ExtraLightItalic"],
            },
            backgroundImage: {
                'landing-background':"url('assets/images/landing-background-bg.png')",
                'rotation-lines':"url('assets/images/rotation-lines.png')",
                'about-background':"url('assets/images/about-bg.png')",
                'astrid-photo':"url('assets/images/astridPhoto.png')",
                'full-circle':"url('assets/images/full_circle.png')",
                'half-circle':"url('assets/images/halfCircle.png')",
            },
            spacing: {
                // 40: "40px",
            },
            colors: {
                light:'#FFFFFF',
                dark:'#464646',
                primary:'#7572fc'
            },
            borderRadius: {
                // xl: "10px",
                // "3xl": "22px",
                // "4xl": "32px",
            },
            fontSize: {
                xs: '13px',
                s:['18px'],
                '3xl':['36px'],
                '4xl':['53px'],
                "4.5xl": ["40px", "48px"],
            },
            boxShadow: {
                // queue: "0px 6px 20px 0px rgba(0, 0, 0, 0.05);",
                // "content-node": "0px 8px 22px 0px rgba(0, 0, 0, 0.15);",
                // "bottom-fixed": "0px 8px 32px 0px rgba(0, 0, 0, 0.15);",
            },
            minWidth: {
                // 200: "200px",
            },
            height: {
                // "calc/44": "calc(100% - 44px)",
            },
        },
    },
    plugins: [

    ],
};
