const MenuItems = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex space-x-5">
      <img style={{borderRadius:'0 200px 200px 200px '}} className="w-[100px]" src={image} alt="img" />
      <div>
        <h3 className="uppercase">{name}</h3>
        <p>{recipe}</p>
      </div>
      <p>{price}</p>
    </div>
  );
};

export default MenuItems;
