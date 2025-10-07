const https = require('https');
const fs = require('fs');
const path = require('path');

const categories = ['nature', 'architecture', 'portraits', 'travel'];
const baseUrls = {
    nature: [
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
        'https://images.unsplash.com/photo-1426604966848-d7adac402bff'
    ],
    architecture: [
        'https://images.unsplash.com/photo-1518005068251-37900150dfca',
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625'
    ],
    portraits: [
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
        'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
        'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126'
    ],
    travel: [
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
        'https://images.unsplash.com/photo-1530521954074-e64f6810b32d'
    ]
};

// Ensure directories exist
categories.forEach(category => {
    const dir = path.join(__dirname, 'src', 'assets', 'images', category);
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }
});

function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const fullUrl = `${url}?w=800&h=600&fit=crop`;
        https.get(fullUrl, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}`));
                return;
            }

            const fileStream = fs.createWriteStream(filename);
            response.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded: ${filename}`);
                resolve();
            });
        }).on('error', reject);
    });
}

async function downloadAll() {
    for (const category of categories) {
        const urls = baseUrls[category];
        for (let i = 0; i < urls.length; i++) {
            const filename = path.join(__dirname, 'src', 'assets', 'images', category, `sample${i + 1}.jpg`);
            try {
                await downloadImage(urls[i], filename);
                // Add a small delay between downloads
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (error) {
                console.error(`Error downloading ${urls[i]}:`, error);
            }
        }
    }
}

downloadAll().then(() => console.log('All downloads completed'));
