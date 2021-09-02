import useSwr from 'swr';
import { FruitsData } from './constants';

const fetcher = (url:string) => fetch(url).then((res) => res.json());

export function FetchFruits():FruitsData {

  const { data,error } = useSwr("/api/fruits",fetcher);

  //console.log(`Data ${JSON.stringify(data)}`);

  return {
    isLoading: !error && !data,
    fruitsData: data,
    isError: error
  };
}
