const vendorData = [
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

const allData = vendorData.map(data => ({
  name: data.name,
  All_Vendors: Object.values(data).reduce((init, val) => (typeof(val) === 'number' ? init + val : init), 0)
}))

export { vendorData, allData }