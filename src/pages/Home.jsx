import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import '../scss/App.scss';
import Categories from '../components/Categories.jsx';
import Event from '../components/EventBlock';
import Skeleton from '../components/EventBlock/Skeleton.jsx';
import Mainevent from '../components/Mainevent.jsx';

function Home({ searchValue }) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://63e1076f59bb472a742ef193.mockapi.io/items?${categoryId > 0 ? `type=${categoryId}` : ''}`).then((res) => res.json()).then((arr) => {
      setItems(arr);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, [categoryId]);
  return (
    <div>
      <Categories value={categoryId} onClickCategory={(i) => { setCategoryId(i); }} />
      <Container>
        <Row className="adboard">
          <Card className="headline">
            <h1 className="text-danger text-center">Main event of this month</h1>
          </Card>
          <Mainevent image="src/assets/adboard.png" title="Tales of Belarus" info="oh my god" />
        </Row>
        <Card className="headline">
          <h3 className="text-dark text-center">Other events in Hrodno</h3>
        </Card>
        <Row className="parent">
          {isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.filter((obj) => {
              if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return true;
              }

              return false;
            })
              .map((obj) => (
                <Event title={obj.title} owner={obj.owner} image={obj.image} data={obj.data} />
              ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
