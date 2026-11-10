import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


import ImageCard from "./ImageCard";

function App() {
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
      title: "Beautiful Nature",
      description: "Enjoy the beauty of green mountains and nature."
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600",
      title: "Mountain View",
      description: "Experience the peaceful mountain landscape."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
      title: "Ocean View",
      description: "Relax with the beautiful blue ocean."
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600",
      title: "Sunrise",
      description: "A beautiful sunrise in the countryside."
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
      title: "Forest",
      description: "Explore the peaceful green forest."
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
      title: "Adventure",
      description: "Discover amazing snow-covered mountains."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 px-5 py-10">
      
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-3 text-center text-4xl font-bold text-slate-800">
          Image Gallery
        </h1>

        <p className="mb-10 text-center text-slate-500">
          Explore beautiful moments through images
        </p>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}

        </div>

      </div>
    </div>
  );
}

export default App;

