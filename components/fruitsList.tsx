import React from 'react';
import type { NextPage } from 'next';
import { Fruit, Props } from '../utils/constants';
import {
  Box,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption
} from "@chakra-ui/react";
import AddFruit from './addFruits';
import DeleteFruit from './deleteFruit';
import { useSWRConfig } from 'swr';

const FruitsList: NextPage<Props> = ({ fruits }) => {

  const { mutate } = useSWRConfig();

  const refreshData = async () => {
    mutate("/api/fruits");
  };

  const toInitCaps = (str:string) => {
    return str[0].toUpperCase() + str.substring(1);
  };

  return (
    <Box> <Stack><AddFruit refreshFn={refreshData} /></Stack>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>List of Fruits</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Season</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            fruits.map((fruit: Fruit) => {
              return (<Tr key={fruit.id}>
                <Td>{toInitCaps(fruit.name)}</Td>
                <Td>{toInitCaps(fruit.season)}</Td>
                <td>
                  <DeleteFruit fruit={fruit} refreshFn={refreshData} />
                </td>
              </Tr>);
            })
          }
        </Tbody>
      </Table></Box>
  );
};

export default FruitsList;
