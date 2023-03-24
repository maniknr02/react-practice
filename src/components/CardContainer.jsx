import { useEffect, useState } from "react";
import { Card } from "./Card";
import Cards from "../data";
function CardContainer(props) {
  const [cards, setCards] = useState(Cards);
  const [gamePopup, setGamePopup] = useState("started");
  const [found, setFound] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  useEffect(() => {
    if (flippedCards.length === 2) {
      compareTheCards();
      props.increase();
    }
    if (found * 2 === cards.length) {
      shufflecards();
      setFound(0);
      props.change();
      alert("Game Completed");
      props.gameOver();
    }
  }, [flippedCards, found]);
  const shufflecards = () => {
    let newCards = [];
    let tempArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    for (let i = 0; i < 16; i++) {
      let randomIndex = Math.floor(Math.random() * (16 - i));
      newCards.push({
        value: tempArray[randomIndex],
        hidden: false,
        disabled: false,
      });
      tempArray.splice(randomIndex, 1);
    }
    console.log(newCards);
    setCards(newCards);
  };
  const resetCards = () => {
    shufflecards();
    props.stop();
  };

  const flipTheCard = (cardIndex) => {
    setCards((prevCards) => {
      let newCards = [...prevCards];
      newCards[cardIndex] = {
        value: newCards[cardIndex].value,
        hidden: !newCards[cardIndex].hidden,
      };
      return newCards;
    });
  };
  const hideTheCards = () => {
    setTimeout(() => {
      setCards((prevCards) => {
        let newCards = [...prevCards];
        flippedCards.map((card) => {
          newCards[card] = {
            value: newCards[card].value,
            hidden: newCards[card].value,
          };
        });
        setFlippedCards([]);
        return newCards;
      });
    }, 500);
  };
  const disableTheCards = (newCards, first, second) => {
    newCards[first] = {
      value: newCards[first].value,
      hidden: false,
      disabled: true,
    };
    newCards[second] = {
      value: newCards[second].value,
      hidden: false,
      disabled: true,
    };
    setFound(found + 1);
    return newCards;
  };
  const compareTheCards = () => {
    const [first, second] = flippedCards;
    if (cards[first].value === cards[second].value) {
      setTimeout(() => {
        setCards((prevCards) => {
          let newCards = [...prevCards];
          newCards = disableTheCards(newCards, first, second);
          setFlippedCards([]);
          return newCards;
        });
      }, 500);
    } else {
      hideTheCards();
    }
  };
  const cardNotFlipped = (cardIndex) => {
    for (let i = 0; i < flippedCards.length; i++) {
      if (flippedCards[i] === cardIndex) return false;
    }
    return true;
  };
  const cardDisabled = (cardIndex) => {
    if (cards[cardIndex].disabled) return true;
    return false;
  };
  const requestCardFlip = (e) => {
    let cardIndex = e.target.id;
    if (
      flippedCards.length < 2 &&
      cardNotFlipped(cardIndex) &&
      !cardDisabled(cardIndex)
    ) {
      flipTheCard(cardIndex);
      setFlippedCards((prevFlipped) => {
        let newFlipped = [...prevFlipped, cardIndex];
        return newFlipped;
      });
    }
  };
  const handlePopup = () => {
    setGamePopup("started");
    resetCards();
    props.change();
  };
  return (
    <div>
      <Card cards={cards} updater={requestCardFlip} start={props.start} />
      <div className="buttons">
        <button className="reset" onClick={resetCards}>
          RESET
        </button>
      </div>
      <div className={gamePopup}>
        Congratulations you completed the game,click here to restart the game
        <button onClick={handlePopup}>reset</button>
      </div>
    </div>
  );
}

export default CardContainer;
