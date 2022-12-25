import './SingleCard.css'

export default function SingleCard({ card, handleChoice }) {

    const handleclick = () => {
        handleChoice(card);
    }

    return (
        <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img 
              className="back" 
              src="/img/cover.png" 
              onClick={handleclick} 
              alt="card back" 
              />
            </div>
        </div>
    )
}