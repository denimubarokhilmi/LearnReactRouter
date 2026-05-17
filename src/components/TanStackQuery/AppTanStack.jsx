import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ll");
    }, 2000);
  });
}

function FecthJsonPlaceholder() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    staleTime: 3000,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    queryFn: async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        await delay();
        const data = await res.json();
        return data;
      } catch (error) {
        throw error;
      }
    },
  });
  console.log(isFetching);
  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="jsonPlaceholder">
      <h2>this is fake API with JSONPlaceHolder :</h2>
      {isFetching && (
        <h2
          style={{ color: "orange", fontStyle: "italic", textAlign: "center" }}
        >
          sinkron data...
        </h2>
      )}
      <ul>
        {data.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default function AppTanStack() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 style={{ textAlign: "center" }}>Hii TanStack Query</h1>
      <FecthJsonPlaceholder></FecthJsonPlaceholder>
    </QueryClientProvider>
  );
}
