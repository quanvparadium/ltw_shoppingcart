
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0
})

export const formatterUSA = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})


export const formatCurrency = (currency = 0, formatter = "vi-VN") => {
  if (typeof currency === 'string') currency = parseInt(currency);

  const format = ["vi-VN", "VND"]
  return currency.toLocaleString(format[0], {
    style: "currency",
    currency: format[1],
  })
}

export const getAllType = (data) => {
  const type = []
  data.forEach(element => {
    type.push(element.type)
  });
  return [...new Set(type)].sort((a, b) => a.length - b.length)
}
export const getAllBrand = (data) => {
  const type = []
  data.forEach(element => {
    type.push(element.brand)
  });
  return [...new Set(type)].sort((a, b) => a.length - b.length)
}


export const calculatePrice = (price, size, toppings) => {
  const sizeCost = size;
  let toppingsCost = 0
  toppings.forEach(i => {
    toppingsCost += i.price
  })

  return price + sizeCost + toppingsCost
}

export const formatStringDate = (s) => {
  const date = new Date(s);
  const res = date.toLocaleDateString('vi-VN').toString();

  return res;
}