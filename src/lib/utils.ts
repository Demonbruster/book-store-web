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

export const phoneRegEx = /^\+(?:[0-9] ?){6,14}[0-9]$/;
export const postalCodeRegEx = /^\d{4}$/;
export const cardExpireRegEx =/^(0[1-9]|1[0-2])\s\/\s\d{2}$/
export const cardNumberRegEx = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
