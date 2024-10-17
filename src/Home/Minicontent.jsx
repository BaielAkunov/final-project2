import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.cardImage} />
      <div style={styles.cardContent}>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

const Minicontent = () => {
  return (
    <div>
      <Card
        image="https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/264f/live/d8b9ba30-8679-11ef-9329-f30486eb2a33.jpg"
        title="We watched 20 Trump rallies. His racist, anti-immigrant messaging is getting darker."
        description="Donald Trump vowed to “rescue” the Denver suburb of Aurora, Colorado, from the rapists, “blood thirsty criminals,” and “most violent people on earth” he insists are ruining the “fabric” of the country and its culture: immigrants."
      />
      <p></p>
      <Card
        image="https://www.aljazeera.com/wp-content/uploads/2024/10/GettyImages-2178144131-1728805387.jpg?resize=770%2C513&quality=80"
        title="Artur Beterbiev beats Dmitry Bivol on points to become undisputed champion"
        description="Artur Beterbiev beat Dmitry Bivol by a majority decision to become the first undisputed light heavyweight champion in the division for more than 20 years."
      />
    </div>
  );
};

const styles = {
  card: {
    width: '100%',
    maxWidth: '730px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
  },
  cardImage: {
    width: '100%',
    height: 'auto',
  },
  cardContent: {
    padding: '16px',
  },
  cardTitle: {
    fontSize: '1.5em',
    margin: '0 0 10px',
  },
  cardDescription: {
    fontSize: '1em',
    color: '#555',
  },
};

export { Minicontent };
