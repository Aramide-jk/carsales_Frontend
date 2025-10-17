import React, { useState, useEffect, useRef, useCallback } from "react";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getGalleryCars } from "../services/api";
import LoadingSpinner from "./LoadingSpinner";
import {
  GalleryContainer,
  HeaderSection,
  HeaderOverlay,
  HeaderContent,
  PageTitle,
  GalleryGrid,
  ImageWrapper,
  CarImage,
  NoImagesMessage,
} from "./gallery.styles";
import type { Car } from "../types";

const Gallery: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const observer = useRef<IntersectionObserver>();
  const lastImageElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getGalleryCars(page, 20);
        // Prevent adding duplicate cars if the API returns overlapping data
        setCars((prevCars) => {
          const existingCarIds = new Set(prevCars.map((c) => c._id));
          const newCars = response.data.filter(
            (c) => !existingCarIds.has(c._id)
          );
          return [...prevCars, ...newCars];
        });

        setHasMore(page < response.totalPages);
      } catch (err) {
        console.error("Failed to fetch gallery images:", err);
        setError("Could not load images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (hasMore) fetchCars();
  }, [page]);

  return (
    <GalleryContainer>
      <HeaderSection
        style={{
          backgroundImage: `url(https://i.pinimg.com/1200x/cb/1b/57/cb1b575e609d2077f55eb4bd5cb7dec2.jpg)`,
        }}>
        <HeaderOverlay />
        <HeaderContent>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Our Vehicle Gallery
          </PageTitle>
        </HeaderContent>
      </HeaderSection>

      {cars.length > 0 ? (
        <GalleryGrid>
          {cars.map((car, index) => (
            <Link
              to={`/cars/${car._id}`}
              key={car._id}
              state={{ fromGallery: true }}>
              <ImageWrapper
                ref={cars.length === index + 1 ? lastImageElementRef : null}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (index % 20) * 0.05 }}
                whileHover={{ scale: 1.05 }}>
                <CarImage
                  src={car.images[0]}
                  alt={`${car.brand} ${car.model}`}
                />
              </ImageWrapper>
            </Link>
          ))}
        </GalleryGrid>
      ) : (
        !loading &&
        !error && (
          <NoImagesMessage>
            <h3>No Images Found</h3>
            <p>There are currently no images to display in the gallery.</p>
          </NoImagesMessage>
        )
      )}
      {loading && <LoadingSpinner text="Loading more images..." />}
      {error && (
        <NoImagesMessage>
          <h3>{error}</h3>
        </NoImagesMessage>
      )}
    </GalleryContainer>
  );
};

export default Gallery;
