import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';


export const FriendListItem = (props) => {
  const { avatar, name, isOnline } = props;
  //  const { friends } = props;
  console.log(css);
   console.log(css[isOnline]);

  return (
    //  <ul class="friend-list">
 
    <li className={css.item}>
      {/* <div className={`${css.status} ${css.circle} ${css[isOnline]}`}></div> */}
      <span className={`${css.status} ${css.circle} ${css[isOnline]}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
 
 
    //    friends.map(friend => (
   
    
    //  ))  
  )
};
    
FriendListItem.propTypes = {
  avatar:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
 id: PropTypes.number.isRequired,
 
};

















