const getAll = () => {
  return JSON.parse(localStorage.getItem("theCollection")) || [];
};

const add = item => {
  save([...getAll(), item]);
};

const update = item => {
  save(getAll().map(el => (el.id === item.id ? item : el)));
};

const getItem = id => {
  return getAll().filter(el => el.id === id)[0];
};

const remove = id => {
  save(getAll().filter(el => el.id !== id));
};

const save = coll => {
  localStorage.setItem("theCollection", JSON.stringify(coll));
};

export { getAll, add, update, getItem, remove };
