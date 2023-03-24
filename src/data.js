const dummyData = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let newData = [];
for (let i = 0; i < 16; i++) {
  let randomIndex = Math.floor(Math.random() * (16 - i));
  newData.push({
    value: dummyData[randomIndex],
    hidden: true,
    disabled: false,
  });
  dummyData.splice(randomIndex, 1);
}

export default newData;
