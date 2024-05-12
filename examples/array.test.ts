type Servers = {
  id: number;
  name: string;
}

type UsersAmountRecord = {
  id: string;
  users: number | null;
}

// Закончи строку так, чтобы AggregatedServer имел id, name, users
type AggregatedServer;

const brands: Servers[] = [
  {name: 'London-1', id: 1}, 
  {name: 'Moscow', id: 2}, 
  {name: 'Ankara-2', id: 3}, 
  {name: 'Berlin-3', id: 4}, 
];

const usersAmountRecords: UsersAmountRecord[] = [
  {id: '3', users: 100}, 
  {id: '1', users: 200}, 
  {id: '2', users: 300},
];


function aggregateServers(brands: Servers[], usersAmountRecords: UsersAmountRecord[]): AggregatedServer[] {
}


it('should return correct result', () => {
  expect(aggregateServers(brands, usersAmountRecords)).toEqual([
    { name: 'London-1', id: 1, users: 200 },
    { name: 'Moscow', id: 2, users: 300 },
    { name: 'Ankara-2', id: 3, users: 100 },
    { name: 'Berlin-3', id: 4, users: null }
  ]);
})
