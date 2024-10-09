import React from "react";
import { ImageViewer } from "./ImagePDF";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  const [url, setUrl] = React.useState<string>("");

  /**
   * Use the following url to test the pdf viewer, you can change the following url. i have tried to simulate the
   * e-Basel web app as much as i could, the process of how the data flows is almost identical.
   */
  React.useEffect(() => {
    (async () => {
      await new Promise<void>((resolve) => {
        setUrl("https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png"); // change the url here.
        resolve();
      });
    })();
  }, []);

  return (
    <React.Fragment>
      <PDFViewer showToolbar={true} style={{ width: 600, height: 800 }}>
        <ImageViewer imageURL={url} />
      </PDFViewer>

      <div>
        <PDFDownloadLink document={<ImageViewer imageURL={url} />} fileName="image-viewer.pdf">
          {/* @ts-expect-error: html element works fine too. */}
          {({ url }) => {
            return <button>{url ? "Download" : "No URL"}</button>;
          }}
        </PDFDownloadLink>
      </div>
    </React.Fragment>
  );
}

export default App;
