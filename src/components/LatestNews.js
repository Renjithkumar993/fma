import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

const LatestNews = () => {
  // Dummy data for news articles
  const newsData = [
    {
      id: 1,
      title: 'Community Celebrates Cultural Diversity',
      date: 'July 12, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor elit at nisi euismod euismod. Fusce malesuada risus sit amet feugiat mollis.',
    },
    {
      id: 2,
      title: 'Annual Festive Event Postponed',
      date: 'June 28, 2023',
      content: 'Praesent vitae metus quis arcu auctor vestibulum. Nam sit amet ipsum eu metus dignissim malesuada sit amet eu odio.',
    },
    {
      id: 3,
      title: 'Volunteers Needed for Charity Drive',
      date: 'May 15, 2023',
      content: 'Quisque consequat, massa a bibendum iaculis, diam lorem blandit ipsum, id consequat lectus nisi ac libero.',
    },
  ];

  return (
    <div className="latest-news-container bg-light py-5">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-4">
              <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
              Latest News
            </h2>
            {newsData.map((news) => (
              <div key={news.id} className="news-item bg-white p-4 rounded shadow mb-4">
                <h3>{news.title}</h3>
                <p className="mb-2 text-muted">{news.date}</p>
                <p>{news.content}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LatestNews;
