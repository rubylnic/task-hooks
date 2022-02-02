import useJsonFetch from "./useJsonFetch";
export default function Loading() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading', {
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