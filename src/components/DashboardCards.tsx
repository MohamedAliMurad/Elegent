// src/components/DashboardCards.tsx

interface CardProps {
    title: string;
    content: string;
  }
  
  const DashboardCard: React.FC<CardProps> = ({ title, content }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p>{content}</p>
      </div>
    );
  };

  const DashboardCards: React.FC = () => {
    const cardsData = [
      { title: 'Card 1', content: 'Details about Card 1' },
      { title: 'Card 2', content: 'Details about Card 2' },
      { title: 'Card 3', content: 'Details about Card 3' },
      { title: 'Card 4', content: 'Details about Card 4' },
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardsData.map((card, index) => (
          <DashboardCard key={index} title={card.title} content={card.content} />
        ))}
      </div>
    );
  };
  
  export default DashboardCards;
