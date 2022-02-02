import Details from "./Details"
export default function Item({ id, name, getDetails }) {

  const info = {
    id: id,
    name: name
  }

  return (
    <div className="item" id={id} onClick={() => { getDetails(info) }}>
      {name}
    </div>
  )
}