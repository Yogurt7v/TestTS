import { FullMeters, Meters, Address } from '../types/types';

export function getFullMeters() {

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const json = await response.json();
    return json.results;
  };

  const meters = async () =>
    fetchData("http://showroom.eis24.me/api/v4/test/meters");



  const addresses = async () =>
    fetchData("http://showroom.eis24.me/api/v4/test/areas");

  return Promise.all([meters(), addresses()]).then(
    ([metersList, addressesList]) => {

      const result = [] as FullMeters[];
      metersList.map((obj1: Meters) => {
        const id = obj1.area.id;
        const addressObj = addressesList.find((obj2: Address) => obj2.id === id);
        const fullMeter: FullMeters = { ...obj1, address: addressObj };
        result.push(fullMeter);
      });
      return result;
    }
  );
}
