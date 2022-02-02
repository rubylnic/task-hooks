import useJsonFetch from "./useJsonFetch";
export default function Error() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error', {
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