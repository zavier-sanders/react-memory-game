const createCards = () => (num) => {
  const cards = []

  if (num % 2 ) { num += 1 }

  for (var i = 0; i < num / 2; i++) {
    cards.push({
      id: i
    });
  }

  return cards.concat(cards).sort(() => 0.5 - Math.random());
}

export default createCards();
