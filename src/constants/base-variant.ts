import { IPost } from '../types';

export const fakeFetchCallback = (itemsAmount: number, start: number): IPost[] => {
  return Array.from({ length: itemsAmount }, (_value, ind) => ({ 
    id: start + ind, 
    value: 'Post' + (start + ind),
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!'
  }));
};