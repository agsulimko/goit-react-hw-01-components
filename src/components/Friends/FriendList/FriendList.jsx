// import React from 'react';
import PropTypes from 'prop-types';
 import css from './FriendList.module.css';
 

import { FriendListItem } from 'components/Friends/FriendListItem/FriendListItem';


export const FriendList = (props) => {
  const { friends } = props;
  //   console.log(props);
   console.log(friends);
 

  return (
    <ul className={css.list}>
      
      {
      friends.map((friend) => (
       <FriendListItem
           key={friend.id}
            id={friend.id}
           name={friend.name}
          avatar={friend.avatar} isOnline={friend.isOnline} />
        ))} 
        
           </ul>

    
    
  

    
 ) 
  
};
    
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
       avatar: PropTypes.string,
    name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
       
     }),
   ),
 
};


 









// import PropTypes from 'prop-types';
// import css from './FriendList.module.css';
// export const FriendList = (props) => {
//     const { avatar, name, isOnline, id } = props;
//     console.log(props);
//     console.log(isOnline);

// return (
//     <ul class="friend-list">
//   <li class="item">
//             <span className={css.status}>{isOnline}</span>
//   <img class="avatar" src={avatar} alt={name} width="48" />
//   <p class="name">{name}</p>
// </li>
// </ul>
//     )
    
// };
    
// FriendList.propTypes = {
//   rname: PropTypes.string,
//   tag: PropTypes.string,
//   isOnline: PropTypes.bool,
//   id: PropTypes.string.isRequired,
 
// };




