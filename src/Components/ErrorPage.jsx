import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
     <div  className="flex flex-col justify-center text-center my-40">
     <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <p className="font-bold text-xl">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
     </div>
    </div>
  );
}
