const LoadingSpinner = () => {
  return (
    <div className="text-center ">
      <div
        className="spinner-border"
        style={{ width: "5rem", height: "5rem" ,margin:"300px",}}
        role="status"
        
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;