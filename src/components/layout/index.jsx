//Uses config set global components for the layout
import "../styling/index.css";
import Header from "../Header";
export default function Layout({ Config, children }) {
  //Create at least a header and footer component
  //Use console.log to determine blok object structure if unsure...
  return (
    <>
      <Header Config={Config} />
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
