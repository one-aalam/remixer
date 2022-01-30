import { LiveReload } from "remix";
import appStyleUrl from "~/styles/app.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: Engineer modern full-stack apps, joyfully! </title>
        <link rel="stylesheet" href={appStyleUrl} />
      </head>
      <body>
          {/* Container */}
        <div className="min-h-screen flex flex-col justify-center">
            <main>
                {/* Content */}
                <article className="text-center mb-8">
                    <h2 className="text-4xl font-semibold app__title">Hello, World!</h2>
                    <small className="inline-block border-1 bg-yellow-300 px-2">Build modern full-stack apps, joyfully!</small>
                </article>
            </main>
        </div>
        {process.env.NODE_ENV === "development" ? (
          <LiveReload />
        ) : null}
      </body>
    </html>
  );
}
