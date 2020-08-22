import React from "react";
import styled from "@emotion/styled";

const PlaceholderImage = styled.img`
  width: 100%;
  height: auto;

  filter: blur(15px);
`;

const Image = styled.img`
  width: 100%;
  height: auto;

  position: absolute;

  top: 0;
  left: 0;
`;

const ImageContainer = styled.div`
  position: relative;
`;

interface OptimizedHeadshotImageProps {
  /** This className is used by Styled Components */
  className?: string;
  alt?: string;
}

const lqip =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIABAACgMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APkn9iX4X/BTV/2mfFmkeJ9G0XR/B3hH42eGvCHj3Xb3VpH8WaNffE3wL428ZaBeaV4a/sS8caLC+iSaLc614g1LQJlkbVZLG01OfQr61lAP1L8Wfsqfsev4q8TPYX+m31i/iDWWsr5fCS3K3lo2o3Jt7oXCxIs4uISkwmVVWUPvCgNgAH8g37VumfFC1/ab1bwt4O+IviTXNJ/af1L4d+OLHT/D1/4h8N+G9UvfGOmqPAUN3p+iaxPZ+KpfhJqmuat4ftNbzPBJreha8I7XTnu9TsAAfpR4B/aa+FnhjwL4L8Naz+234NXV/D3hLw5oeqrN8P8AxRPMupaTo9nYXyyzrclZpRdW8oklBIkfLgkGgD//2Q==";

export const OptimizedHeadshotImage: React.FC<OptimizedHeadshotImageProps> = ({
  alt,
  className,
}) => {
  return (
    <ImageContainer className={className}>
      <PlaceholderImage src={lqip} alt={alt && `Placeholder for ${alt}`} />
      <picture>
        <source srcSet={`/headshot/768.webp 768w, /headshot/425.webp 425w`} type="image/webp" />
        <Image
          src={`/headshot/768.jpg`}
          srcSet={`/headshot/768.jpg 768w, /headshot/425.jpg 425w`}
          alt={alt}
        />
      </picture>
    </ImageContainer>
  );
};
