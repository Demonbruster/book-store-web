export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateRandomList = <T>(list: T[], count: number): T[] => {
  // Shuffling the list randomly
  const shuffledList = list.sort(() => Math.random() - 0.5);
  
  // Selecting the specified number of items from the shuffled list
  const randomItems = shuffledList.slice(0, count);
  
  return randomItems;
}

export const phoneRegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/;
