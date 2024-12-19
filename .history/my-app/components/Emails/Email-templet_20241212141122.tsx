import * as React from "react";
import { Body, Button, Container, Head, Html, Preview, Section, Text } from "@react-email/components";

interface EmailTemplateProps {
  fullName: string;
  token: number;
  message: string;
  // Add the linkText prop
}

export const EmailTemplate = ({ name, token, message,  }: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>{message}</Preview>
    <Body>
      <Container style={{ width: "480px", margin: "0 auto", padding: "20px" }}>
        <Text style={{ fontSize: "24px" }}>
          Hello <strong>{name}</strong>,
        </Text>
        <Section style={{ padding: "24px", border: "1px solid #dedede", borderRadius: "5px" }}>
          <Text style={{ marginBottom: "10px" }}>{message}</Text>
          <Button style={{ backgroundColor: "#28a745", color: "#fff", padding: "10px 20px", borderRadius: "5px" }}>
            {} {token}
          </Button>
        </Section>
        <Text style={{ marginTop: "20px", fontSize: "12px", textAlign: "center" }}>
          If you have any questions, feel free to reach out.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;
