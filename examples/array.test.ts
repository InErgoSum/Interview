type Servers = {
  id: number;
  name: string;
}

type UsersAmountRecord = {
  serverId: string;
  users: number | null;
}

// Закончи строку так, чтобы AggregatedServer имел id: number, name, users
type AggregatedServer = ;

const servers: Servers[] = [
  {name: 'London-1', id: 1}, 
  {name: 'Moscow', id: 2}, 
  {name: 'Ankara-2', id: 3}, 
  {name: 'Berlin-3', id: 4}, 
];

const usersAmountRecords: UsersAmountRecord[] = [
  {serverId: '3', users: 100}, 
  {serverId: '1', users: 200}, 
  {serverId: '2', users: 300},
];


function aggregateServers(servers: Servers[], usersAmountRecords: UsersAmountRecord[]): AggregatedServer[] {
  // Закончи функцию так, чтобы она вернула корректные агрегированные данные, и тест не упал
}


describe('aggregateServers', () => {
  it('should return correct result', () => {
    expect(aggregateServers(servers, usersAmountRecords)).toEqual([
      { name: 'London-1', id: 1, users: 200 },
      { name: 'Moscow', id: 2, users: 300 },
      { name: 'Ankara-2', id: 3, users: 100 },
      { name: 'Berlin-3', id: 4, users: null }
    ]);
  })
})

