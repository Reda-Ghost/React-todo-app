
const Items = (props) => {
  const {data , deleteItem} = props;
  const length = data.length;

  const itemsEl = length ? data.map(item => {
    const {id, name, age} = item;
    return (
      <ul key={id} className='list-items'>
        <li>{name}</li>
        <li>{age}</li>
        <li className="delete" onClick={() => deleteItem(id)}>
          x
        </li>
      </ul>
    )
  }) : (
    <div className="no-items">No Items Found</div>
  )

  return (
    <div className="items">
      <div className="titles">
        <h3>Name</h3>
        <h3>Age</h3>
        <h3>Action</h3>
      </div>
      {itemsEl}
    </div>
  )
}

export default Items