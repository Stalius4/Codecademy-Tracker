
const listArr = [
    { item: "Carrots" },
    { item: "Hummus" },
    { item: "Pesto" },
    { item: "Rigatoni" },
  ];
  const listArr2 = [{ item: "Carrots" }, { item: "Hummus" }];
  const listArr3 = [{ item: "Carrots" }];




  const groceries = (obj) => {
    const items = obj.map(item => item.item);
  
    if (items.length > 1) {
      const lastItem = items.pop(); // Remove and store the last item
      const andIndex = items.length - 1;
  
      const result = items.reduce((acc, currentItem, index) => {
        const separator = index === andIndex ? " and " : ", ";
        acc.push(currentItem + separator);
        return acc;
      }, []).join("").trim();
  
      return result + lastItem;
    } else if (items.length === 1) {
      return items[0];
    } else {
      return "";
    }
  };

  console.log(groceries(listArr))