type DataFetchProps = {
  status: "loading" | "error" | "success";
};

const DataFetch = ({ status }: DataFetchProps) => {
  if (status === "loading") {
    return <h2>Data Is Loading.....</h2>;
  } else if (status === "error") {
    return <h2>Error. Data could not fetched</h2>;
  }
  return (
    <div>
      <h2>Data fetched successfully</h2>
    </div>
  );
};

export default DataFetch;
