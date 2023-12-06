const parseTimeStamp = (timestamp: number) => {
  const currentDate = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const localeDateString = currentDate.toLocaleString("fr-FR", options);
  return localeDateString;
};

export { parseTimeStamp };
