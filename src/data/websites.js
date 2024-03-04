const cards = [{
    heading: 'Images Compression',
    text: 'Compress WebP, PNG and JPEG images to optimize web page loding times',
    link: 'https://tinypng.com/',
    imgClassNumber: '1'
}, {
    heading: 'Sprites Genrator',
    text: 'Tool for creating CSS sprite sheets (Better to use when all image same size). CSS sprites are a technique used to combine multiple images into a single image file to reduce the number of server requests,',
    link: 'https://www.toptal.com/developers/css/sprite-generator',
    imgClassNumber: '2'
}, {
    heading: 'Convert anything',
    text: 'website offering online file conversion services. Users can convert various types of files, such as documents, images, videos, audio, and more, between different formats',
    link: 'https://convertio.co/',
    imgClassNumber: '3'
}, {
    heading: 'BrandColors',
    text: 'Color used by company to in their website',
    link: 'http://brandcolors.net/',
    imgClassNumber: '4'
}, {
    heading: 'CSS color Gradiet',
    text: 'tool that genrate css code for backgound with gradient effect',
    link: 'https://cssgradient.io/',
    imgClassNumber: '5'
}, {
    heading: 'SVG Backgrounds',
    text: 'Provides customizable SVG background with various patterns and colors',
    link: 'https://svgbackgrounds.com/',
    imgClassNumber: '6'
}, {
    heading: 'Color Palettes',
    text: 'A collection of color palettes for inspiration.',
    link: 'https://colorhunt.co/',
    imgClassNumber: '7'
}, {
    heading: 'Material Palette',
    text: 'A tool for creating Material Desingn color palettes',
    link: 'https://materialpalette.com/',
    imgClassNumber: '8'
}, {
    heading: 'Color Pelette Genrator',
    text: 'A tool for Genrating Color Palettes for creting websites',
    link: 'https://coolors.co/',
    imgClassNumber: '9'
}, {
    heading: 'Adobe Color Wheel',
    text: 'Allow you to create, explore and save color schemes',
    link: 'https://color.adobe.com/create',
    imgClassNumber: '10'
}, {
    heading: 'Fonts Suggest',
    text: 'Generate font combinations with deep learning',
    link: 'https://fontjoy.com/',
    imgClassNumber: '11'
}, {
    heading: 'Icons',
    text: 'free and easy intigration icons (change icon)',
    link: 'https://heroicons.com/',
    imgClassNumber: '12'
}, {
    heading: 'Draw.io',
    text: 'Draw.io is a online diagramming website that allows users to create diagrams, flowcharts and various other visual representations (vscode extension avilable)',
    link: 'https://app.diagrams.net/',
    imgClassNumber: '13'
}, {
    heading: 'Bootstrap icons',
    text: 'icons by bootstrap',
    link: 'https://icons.getbootstrap.com/',
    imgClassNumber: '14'
}, {
    heading: 'regExGen1',
    text: 'text',
    link: 'https://regexr.com/',
    imgClassNumber: '15'
}, {
    heading: 'regExGen2',
    texg: 'lorem ipsum',
    link: 'https://regex-generator.olafneumann.org/',
    imgClassNumber: '16'
}]
export default cards;

export const baseUrl = './src/assets/website/old/'
export const websites = {
    "Image Optimization": [
        {
            heading: "Images Compression",
            text: "Compress WebP, PNG and JPEG images to optimize web page loding times",
            link: "https://tinypng.com/",
            img: 'image5.webp'
        },
        {
            heading: "Sprites Generator",
            text: "Tool for creating CSS sprite sheets (Better to use when all image same size). CSS sprites are a technique used to combine multiple images into a single image file to reduce the number of server requests,",
            link: "https://www.toptal.com/developers/css/sprite-generator",
            img: 'image6.jpg'
        }
    ],
    "File Conversion": [
        {
            heading: "Convert anything",
            text: "website offering online file conversion services. Users can convert various types of files, such as documents, images, videos, audio, and more, between different formats",
            link: "https://convertio.co/",
            img: 'convert.io.png'
        }
    ],
    "Website Optimization": [
        {
            heading: "PageSpeed Insights",
            text: "tool by Google that analyzes the performance of web pages on both mobile and desktop devices. It provides suggestions and optimizations to improve page loading speed and user experience, helping developers enhance their websites' performance and usability.",
            link: "https://pagespeed.web.dev/",
            img: 'pageinsights.png',// need to add image 
        }
    ],
    "Color Tools": [
        {
            heading: "BrandColors",
            text: "Color used by company to in their website",
            link: "http://brandcolors.net/",
            img: 'image2.jpg'
        },
        {
            heading: "CSS Color Gradient",
            text: "tool that genrate css code for backgound with gradient effect",
            link: "https://cssgradient.io/",
            img: 'image12.png'
        },
        {
            heading: "SVG Backgrounds",
            text: "Provides customizable SVG backgrou// need to add image nd with various patterns and colors",
            link: "https://svgbackgrounds.com/",
            img: 'image14.png'
        },
        {
            heading: "Color Palettes",
            text: "A collection of color palettes for inspiration.",
            link: "https://colorhunt.co/",
            img: 'image4.png'
        },
        {
            heading: "Material Palette",
            text: "A tool for creating Material Desingn color palettes",
            link: "https://materialpalette.com/",
            img: 'image7.png'
        },
        {
            heading: "Color Palette Generator",
            text: "A tool for Genrating Color Palettes for creting websites",
            link: "https://coolors.co/",
            img: 'image11.png'
        },
        {
            heading: "Adobe Color Wheel",
            text: "Allow you to create, explore and save color schemes",
            link: "https://color.adobe.com/create",
            img: 'image3.png'// need to add image 
        }
    ],
    "Font and Icon": [
        {
            heading: "Fonts Suggest",
            text: "Generate font combinations with deep learning",
            link: "https://fontjoy.com/",
            img: 'image1.gif'
        },
        {
            heading: "Icons",
            text: "free and easy intigration icons (change icon)",
            link: "https://heroicons.com/",
            img: 'image8.png'
        },
        {
            heading: "Bootstrap Icons",
            text: "icons by bootstrap",
            link: "https://icons.getbootstrap.com/",
            img: 'image9.png'
        }
    ],
    "Diagramming, Visualization and SVG": [
        {
            heading: 'Figma',
            text: 'Figma is a web-based design tool for creating SVGs, prototypes, and diagrams. It offers intuitive features and collaborative capabilities, making it popular among designers and teams for efficient project creation and sharing',
            link: 'https://www.figma.com/',
            img: 'figma.png'
        },
        {
            heading: "Draw.io",
            text: "Draw.io is a online diagramming website that allows users to create diagrams, flowcharts and various other visual representations (vscode extension avilable)",
            link: "https://app.diagrams.net/",
            img: 'image10.png'
        },
    ],
    "Regular Expression": [
        {
            heading: "regexr.com",
            text: ' website that provides a comprehensive online tool for creating, testing, debugging and learning regular expressions for javascript',
            link: "https://regexr.com/",
            img: 'regexr.com.png'
        },
        {
            heading: "regex-genrator",
            text: "The website generates regular expressions tailored to specific patterns, aiding in efficient string matching and manipulation for developers. It's a handy tool for simplifying complex pattern matching tasks in web development.",
            link: "https://regex-generator.olafneumann.org/",
            img: 'regex-gen.ico'
        }
    ],
    "Simmilar Websites": [
        {
            heading: 'Devtoolbox.co',
            text: 'Tools diff viewer, JSON validator, unix time converter, regex matcher, character counter, and more',
            link: 'https://www.devtoolbox.co/',
            img: 'devtoolbox_logo.png',
        },
        {
            heading: 'Transform.tools',
            text: 'Utilities for web development tasks, including formatting, validation, encoding/decoding, and manipulation of data formats such as JSON, XML, CSS, JavaScript, and HTML',
            link: 'https://transform.tools/',
            img: 'transform.png',
        },
        {
            heading: 'CodeBeautify.org',
            text: 'online tools for developers, including code formatting and beautification, JSON/XML/HTML validation and formatting, text manipulation, data conversion, encryption/decryption, and many other utilities to assist in coding and development tasks',
            link: 'https://codebeautify.org/',
            img: 'codebeautify.png',
        },
    ]
}