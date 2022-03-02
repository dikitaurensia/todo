const generateCreatedAt = (date = new Date()) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const updatedMonth = month < 10 ? "0" + month : month;
  const day = date.getDate();
  const updatedDay = day < 10 ? "0" + day : day;
  const hour = date.getHours();
  const updatedHour = hour < 10 ? "0" + hour : hour;
  const minute = date.getMinutes();
  const updatedMinute = minute < 10 ? "0" + minute : minute;

  return `${year}-${updatedMonth}-${updatedDay} ${updatedHour}:${updatedMinute}`;
};

export default generateCreatedAt;
