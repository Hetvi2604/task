import dayjs from 'dayjs';

export const calculateDeliveryDate = (provider, currentTime) => {
  const currentHour = currentTime.hour();
  let deliveryDate;

  if (provider === 'Provider A' && currentHour < 17) {
    deliveryDate = currentTime; // Same-day delivery
  } else if (provider === 'Provider B') {
    deliveryDate = currentHour < 9 ? currentTime : currentTime.add(1, 'day'); // Same-day or next-day
  } else {
    deliveryDate = currentTime.add(3, 'days'); // Default 3 days for general partners
  }
  return deliveryDate.format('YYYY-MM-DD');
};
