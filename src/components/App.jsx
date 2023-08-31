import React from 'react';
import { Profile } from 'components/Profile/Profile';
import { FriendList } from 'components/Friends/FriendList/FriendList';
// import { FriendListItem } from 'components/Friends/FriendListItem/FriendListItem';
import { Statistics } from 'components/Statistics/Statistics';
import { TransactionsHistory } from 'components/TransactionsHistory/TransactionsHistory';
import user from 'components/Profile/user.json';
import friends from 'components/Friends/friends.json';
import transactions from './TransactionsHistory/transactions.json';
import data from 'components/Statistics/data.json';

//  import { createRGB} from '../../utils/createRGB';



export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
       <Profile avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />

          
<FriendList friends={friends}/>
      
      <TransactionsHistory items={transactions} />
    </div>
  );
};




  
