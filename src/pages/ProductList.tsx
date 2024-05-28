import React from 'react';
import ProductRow from '../components/ProductRow';
import { ItemProps } from '../types/product.type';
import { useNavigate } from 'react-router-dom';

interface ProductListProps {}

const ProductList = ({}: ProductListProps) => {
  const productsData = {
    author: {
      name: 'mario',
      lastname: 'martinez',
    },
    items: [
      {
        id: '1',
        title:
          'Audífonos Sony Noise Cancelling Bluetooth Hi-res Wh-1000xm4 Color Negro',
        price: {
          currency: 'ARS',
          amount: 1930,
          decimals: 2,
        },
        picture:
          'https://http2.mlstatic.com/D_NQ_NP_2X_901878-MLA45726882502_042021-F.webp',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: '2',
        title: 'iphone',
        price: {
          currency: 'ARS',
          amount: 2500,
          decimals: 0,
        },
        picture:
          'https://http2.mlstatic.com/D_NQ_NP_2X_901878-MLA45726882502_042021-F.webp',
        condition: 'new',
        free_shipping: false,
      },
      {
        id: '3',
        title: 'iphone',
        price: {
          currency: 'ARS',
          amount: 100,
          decimals: 0,
        },
        picture:
          'https://http2.mlstatic.com/D_NQ_NP_2X_901878-MLA45726882502_042021-F.webp',
        condition: 'new',
        free_shipping: true,
      },
      {
        id: '4',
        title: 'iphone',
        price: {
          currency: 'ARS',
          amount: 100,
          decimals: 0,
        },
        picture:
          'https://http2.mlstatic.com/D_NQ_NP_2X_901878-MLA45726882502_042021-F.webp',
        condition: 'new',
        free_shipping: false,
      },
    ],
  };

  const hasProducts = !!productsData?.items?.length;
  const navigate = useNavigate();
  const handleClick = (id?: string) => navigate(`/items/${id}`);
  return (
    <div className="flex flex-col items-center bg-white self-center w-full p-4">
      {hasProducts &&
        productsData?.items?.map((product: ItemProps) => (
          <ProductRow
            key={product?.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
    </div>
  );
};

export default ProductList;
