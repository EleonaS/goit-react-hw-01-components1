//import logo from './logo.svg';
import './App.css';

import user from './data/user.json';
import Profile from './components/Profile/Profile';

import statisticalData from './data/statistical-data.json';
import Statistics from './components/Statistic/Statistics';

import friends from './data/friends.json';
import FriendList from './components/FriendList/FriendList';

import transactions from './data/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="App">
      <div>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Statistics
          stats={statisticalData}
        />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory
          items={transactions}
        />
        ;
      </div>
    </div>
  );
}
export default App;
