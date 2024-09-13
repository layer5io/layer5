export const basicColumns = ["Name", "Company", "City", "State"];

export const basicData = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];

export const basicOptions = {
  filterType: "checkbox",
};

export const customColumns = [
  {
    name: "Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Company",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "City",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "State",
    options: {
      filter: true,
      sort: false,
    },
  },
];

export const customData = [
  { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },   { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];

export const options = {
  filterType: "checkbox",
};

