import React from 'react';
import { useSelector } from 'react-redux';

import ItemList from './ItemList'

// Function with logic needed to wrap item list to make it specific to people
function PersonList() {
  const items = useSelector(st => Object.values(st.people).map(
    p => ({...p, url: `/people/${p.id}`})
  ));
  return <ItemList title="People" items={items} />;
}

export default PersonList;
