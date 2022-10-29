import styled from 'styled-components';

export const ImageGalleryItemBox = styled.li`
  width: calc(100% / 4 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;
  border-radius: 2px;
`;

export const ImageGalleryItemImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
