/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../components/atoms/Table';
import Layout from '../components/templates/Layout';
import { fetchData } from '../redux/actions';

const ExchangeRates = () => {
  const [exchangeRates, setExchangeRates] = useState([]);
  const { data, loading, error } = useSelector((state) => ({
    error: state.error,
    data: state.data,
    loading: state.loading,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    setExchangeRates(data.rates);
  }, [data.rates]);

  if (loading)
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );

  if (error)
    return (
      <Layout>
        <div>
          <span>
            ERROR:
            {error}
          </span>
        </div>
      </Layout>
    );

  console.log('>>>', exchangeRates);
  return (
    <Layout>
      <Table.Container variant="list" width="50%">
        <Table.Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th color="#fff" />
              <Table.Th color="#fff">WE BUY</Table.Th>
              <Table.Th color="#fff">EXCHANGE RATE</Table.Th>
              <Table.Th color="#fff">WE SELL</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td color="#fff" border="0">
                CAD
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && (exchangeRates.CAD * 102) / 100}
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && exchangeRates.CAD}
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && (exchangeRates.CAD * 98) / 100}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td color="#fff" border="0">
                IDR
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && (exchangeRates.IDR * 102) / 100}
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && exchangeRates.IDR}
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && (exchangeRates.IDR * 98) / 100}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td color="#fff" border="0">
                JPY
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && (exchangeRates.JPY * 102) / 100}
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && exchangeRates.JPY}
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && (exchangeRates.JPY * 98) / 100}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td color="#fff" border="0">
                CHF
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && (exchangeRates.CHF * 102) / 100}
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && exchangeRates.CHF}
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && (exchangeRates.CHF * 98) / 100}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td color="#fff" border="0">
                EUR
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && (exchangeRates.EUR * 102) / 100}
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && exchangeRates.EUR}
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && (exchangeRates.EUR * 98) / 100}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td color="#fff" border="0">
                USD
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && (exchangeRates.USD * 102) / 100}
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && exchangeRates.USD}
              </Table.Td>
              <Table.Td color="#fff" border="0">
                {exchangeRates && (exchangeRates.USD * 98) / 100}
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table.Table>
      </Table.Container>
    </Layout>
  );
};

export default ExchangeRates;