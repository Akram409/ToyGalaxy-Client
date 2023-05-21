import { useNavigation } from "react-router-dom";
import GalleryCard from "./GalleryCard";
import { useEffect, useState } from "react";


const Gallery = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);


  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <progress className="progress w-56"></progress>;
  }

  return (

    <div className="Containers">
      <h1 className="text-5xl font-bold text-center mb-4 text-[#00425A]">Gallery</h1>
      <div className="divider"></div>
      <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {items.map((card) => (
          <GalleryCard key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
