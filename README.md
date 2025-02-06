# Digital Quran Application

A modern web application for reading and listening to the Holy Quran, built with Next.js and TailwindCSS.

## Features

- Browse through all 114 surahs of the Quran
- Read Arabic text and Indonesian translations
- Listen to audio recitations for each verse
- Listen to complete surah recitations
- Responsive design for all devices
- Pagination for better navigation
- Clean and intuitive user interface

## Tech Stack

- Next.js 14 (App Router)
- TailwindCSS
- REST APIs:
  - Santri Koding Quran API
  - Quran.com API (for audio)

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/quran-app.git
cd quran-app
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── page.tsx                # Home page with surah list
│   ├── surah/
│   │   └── [number]/
│   │       └── page.tsx        # Individual surah page
│   └── utils/
│       └── api.ts             # API utilities
├── components/                 # React components
├── public/                    # Static files
└── tailwind.config.js         # Tailwind configuration
```

## API Integration

The application uses two main APIs:

1. Santri Koding Quran API
   - Base URL: `https://quran-api.santrikoding.com/api`
   - Endpoints:
     - `/surah` - Get list of all surahs
     - `/surah/{number}` - Get detailed surah information

2. Quran.com API
   - Used for audio recitations
   - Base URL: `https://api.quran.com/api/v4`
   - Endpoints:
     - `/chapter_recitations/1/{number}` - Get complete surah audio

## Features in Detail

### Home Page
- Displays a grid of all surahs
- Each surah card shows:
  - Surah name in Arabic and Latin
  - Translation
  - Surah number
  - Number of verses
- Pagination with 20 surahs per page

### Surah Detail Page
- Complete surah information
- Arabic text with Indonesian translation
- Individual verse audio players
- Complete surah audio player
- Verse numbers
- Navigation back to home page

## Styling

The application uses TailwindCSS for styling with a consistent color scheme:
- Primary color: Green (`bg-green-600`)
- Text colors: White for contrast on green backgrounds
- Card styling with shadows and hover effects
- Responsive design for all screen sizes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Santri Koding](https://santrikoding.com) for providing the Quran API
- [Quran.com](https://quran.com) for the audio recitations API
- The Next.js team for the amazing framework
