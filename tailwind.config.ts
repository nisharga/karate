import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1280px'
            }
        },
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        extend: {
            colors: {
                white: '#ffffff',
                primary: {
                    50: '#F2EFFE',
                    100: '#D8CEFC',
                    200: '#CBBDFB',
                    300: '#BFADFA',
                    400: '#B29CF9',
                    500: '#A58CF8',
                    600: '#987BF7',
                    700: '#8B6BF6',
                    800: '#7E5AF5',
                    900: '#7151dd'
                },
                gray: {
                    50: '#E8E8E9',
                    100: '#D0D1D4',
                    200: '#B9BABE',
                    300: '#A1A3A8',
                    400: '#8A8C93',
                    500: '#73747D',
                    600: '#5B5D67',
                    700: '#444651',
                    800: '#2C2F3C',
                    900: '#151826'
                },
                orchid: {
                    50: '#FCEFFB',
                    100: '#F9DEF6',
                    200: '#F5CEF2',
                    300: '#F2BDED',
                    400: '#EFADE9',
                    500: '#EC9CE4',
                    600: '#E98CE0',
                    700: '#E57BDB',
                    800: '#E26BD7',
                    900: '#DF5AD2'
                },
                success: '#3CB371',
                error: '#ff4444',
                warning: '#ffbb33',
                info: '#33b5e5'
            },
            fontFamily: {
                roboto: ['var(--font-roboto)']
            },
            boxShadow: {
                base: '0px 24px 60px 0px rgba(21, 24, 38, 0.15)'
            }
        }
    },
    plugins: [require('autoprefixer')]
};
export default config;
