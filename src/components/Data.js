import useJsonFetch from "./useJsonFetch";
export default function Data() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  console.log(data, loading, error)
  return (
    <></>
  )
}