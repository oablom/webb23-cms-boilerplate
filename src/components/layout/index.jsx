//Uses config set global components for the layout
// import "@/components/styling/index.css";
import Header from "../nestable/Header";
// import Footer from "../nestable/Footer";
export default function Layout({ config, children }) {
  //Create at least a header and footer component
  //Use console.log to determine blok object structure if unsure...
  return (
    <>
      <Header config={config} />
      <main>{children}</main>
      {/* <footer></footer> */}
    </>
  );
}
