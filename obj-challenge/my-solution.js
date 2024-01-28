const listArr = [
  { item: "Carrots" },
  { item: "Hummus" },
  { item: "Pesto" },
  { item: "Rigatoni" },
];
const listArr2 = [{ item: "Carrots" }, { item: "Hummus" }];
const listArr3 = [{ item: "Carrots" }];
const groceries = (obj) => {
  const arr = obj.map((item) => {
    return item.item;
  });

  const andIndex = arr.length - 2;
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let addComma = arr[i] + ",";
    if (i === andIndex) {
      result.push(arr[i]);
      result.push("and");
    } else if (i === andIndex + 1) {
      result.push(arr[i]);
    } else {
      result.push(addComma);
    }
  }
  let final = result.join(" ");
  return final;
};
console.log(groceries(listArr));
