import React from 'react';

function Categories({ value, onClickCategory }) {
  const categories = ['All', 'Concerts', 'Cinema', 'Performances', 'Exhibitions', 'Parties'];
  return (
    <ul className="text-dark text-center list-group">
      {categories.map((categoryName, i) => (
        <li key={i} onClick={() => onClickCategory(i)} className={value === i ? 'aactive' : ''}><a href="#">{categoryName}</a></li>
      ))}
    </ul>
  );
}
export default Categories;
