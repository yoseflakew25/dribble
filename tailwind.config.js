module.exports = {
    content: ['./*.html'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            colors: {
                brightRed: 'hsl(12, 88%, 59%)',
                brightRedLight: 'hsl(12, 88%, 69%)',
                brightRedSupLight: 'hsl(12, 88%, 95%)',
                darkBlue: 'hsl(228, 39%, 23%)',
                darkGrayishBlue: 'hsl(227, 12%, 61%)',
                veryDarkBlue: 'hsl(233, 12%, 13%)',
                veryPaleRed: 'hsl(13, 100%, 96%)',
                veryLightGray: 'hsl(0, 0%, 98%)',
            },
        },
    },
    daisyui: {
        themes: [{
            mytheme: {

                "primary": "#FFC947",

                "secondary": "#000807",

                "accent": "#37CDBE",

                "neutral": "#3D4451",

                "base-100": "#FFFFFF",

                "info": "#3ABFF8",

                "success": "#36D399",

                "warning": "#FFA41B",

                "error": "#F87272",
            },
        }, ],
    },
    plugins: [require("daisyui")],
}