import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred. Look at the console.</p>
    </div>
  );
}

export default ErrorPage;
