import { Document, Page, Image, Text } from "@react-pdf/renderer";

interface OwnProps {
  imageURL: string;
}
export const ImageViewer = ({ imageURL }: OwnProps) => {
  return (
    <Document language="en-US" pageLayout="oneColumn">
      <Page size={"A4"} orientation="portrait">
        <Text>This is a pdf document</Text>``
        <Image src={imageURL} style={{ width: 200, height: 200 }} />
      </Page>
    </Document>
  );
};
