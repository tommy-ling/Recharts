const vmExampleData = [
  {
    name: '10am',
    vendor1: 4000,
    vendor2: 2400,
    vendor3: 2400,
    vendor4: 3960,
    vendor5: 1500,
    vendor6: 4300,
    vendor7: 5200,
    vendor8: 6850,
    vendor9: 3240,
    vendor10: 3100,
    vendor11: 5600,
    vendor12: 7800,
  },
  {
    name: '12pm',
    vendor1: 3000,
    vendor2: 1398,
    vendor3: 2210,
    vendor4: 6850,
    vendor5: 4290,
    vendor6: 5670,
    vendor7: 5420,
    vendor8: 6700,
    vendor9: 1200,
    vendor10: 4300,
    vendor11: 5200,
    vendor12: 6790,
  },
  {
    name: '2pm',
    vendor1: 2000,
    vendor2: 9800,
    vendor3: 2290,
    vendor4: 7800,
    vendor5: 8700,
    vendor6: 9800,
    vendor7: 9900,
    vendor8: 9900,
    vendor9: 8760,
    vendor10: 5400,
    vendor11: 3200,
    vendor12: 4600,
  },
  {
    name: '4pm',
    vendor1: 2780,
    vendor2: 3908,
    vendor3: 2000,
    vendor4: 9800,
    vendor5: 9990,
    vendor6: 7680,
    vendor7: 5830,
    vendor8: 6880,
    vendor9: 7970,
    vendor10: 3460,
    vendor11: 8750,
    vendor12: 4370,
  },
  {
    name: '6pm',
    vendor1: 1890,
    vendor2: 4800,
    vendor3: 2181,
    vendor4: 6470,
    vendor5: 3580,
    vendor6: 8760,
    vendor7: 6480,
    vendor8: 8950,
    vendor9: 9850,
    vendor10: 7950,
    vendor11: 8420,
    vendor12: 4230,
  },
  {
    name: '8pm',
    vendor1: 2390,
    vendor2: 3800,
    vendor3: 2500,
    vendor4: 8950,
    vendor5: 9870,
    vendor6: 3360,
    vendor7: 2250,
    vendor8: 6740,
    vendor9: 7830,
    vendor10: 3530,
    vendor11: 1250,
    vendor12: 8890,
  },
  {
    name: '10pm',
    vendor1: 3490,
    vendor2: 4300,
    vendor3: 2100,
    vendor4: 7860,
    vendor5: 9320,
    vendor6: 3750,
    vendor7: 2250,
    vendor8: 7630,
    vendor9: 2480,
    vendor10: 8630,
    vendor11: 1210,
    vendor12: 7680,
  },
];

const allData = vmExampleData.map(data => ({
  name: data.name,
  All_Vendors: Object.values(data).reduce((init, val) => (typeof(val) === 'number' ? init + val : init), 0)
}))

const vmSoldByItem = [
  {item1: {
    price: 25,
    qty: 300,
    vendorId: 1
  }},
  {item2: {
    price: 15,
    qty: 530,
    vendorId: 4
  }},
  {item3: {
    price: 30,
    qty: 215,
    vendorId: 5
  }},
  {item4: {
    price: 25,
    qty: 200,
    vendorId: 2
  }},
  {item5: {
    price: 25,
    qty: 330,
    vendorId: 1
  }},
  {item6: {
    price: 25,
    qty: 300,
    vendorId: 3
  }},
  {item7: {
    price: 10,
    qty: 750,
    vendorId: 6
  }},
  {item8: {
    price: 20,
    qty: 450,
    vendorId: 12
  }},
  {item9: {
    price: 20,
    qty: 300,
    vendorId: 11
  }},
  {item10: {
    price: 15,
    qty: 250,
    vendorId: 10
  }},
  {item11: {
    price: 45,
    qty: 150,
    vendorId: 8
  }},
  {item12: {
    price: 30,
    qty: 450,
    vendorId: 7
  }},
  {item13: {
    price: 20,
    qty: 500,
    vendorId: 8
  }},
  {item14: {
    price: 40,
    qty: 100,
    vendorId: 9
  }},
  {item15: {
    price: 35,
    qty: 400,
    vendorId: 9
  }},
  {item16: {
    price: 20,
    qty: 440,
    vendorId: 12
  }},
  {item17: {
    price: 35,
    qty: 100,
    vendorId: 11
  }},
  {item18: {
    price: 15,
    qty: 700,
    vendorId: 6
  }},
  {item19: {
    price: 25,
    qty: 350,
    vendorId: 7
  }},
  {item20: {
    price: 50,
    qty: 300,
    vendorId: 4
  }},
]

const vmItemRev = vmSoldByItem.map(i => {
  const price = Object.values(i)[0].price
  const qty = Object.values(i)[0].qty
  const key = Object.keys(i)[0]
  return { name: [key][0], value: price*qty }
})

export { vmExampleData, allData, vmSoldByItem, vmItemRev }