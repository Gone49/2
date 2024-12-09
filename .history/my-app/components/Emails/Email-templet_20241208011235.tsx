import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
interface EmailTemplateProps {
  name?: string;
  token: number;
  linkText: string;
  message: string;
}
 
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
 
export const EmailTemplate = ({
  name = "",
  token,
  linkText,
  message,
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>{linkText}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/logo.png`}
          width="32"
          height="32"
          alt="Claridy"
        />
 
 <Text style={title}>
  <strong>@{name}</strong>, Welcome to the New Age of Healthcare Technology
</Text>

<Section style={section}>
  <Text style={text}>
    Hey <strong>{name}</strong>!
  </Text>
  <Text style={text}>{message}</Text>

  <Button style={button} onClick={() => handleActionClick()}>
    {token}
  </Button>
  
  {/* Input for more interactivity */}
  <Text style={text}>
    Let us know how we can improve your experience:
  </Text>
  <Input
    type="text"
    placeholder="Enter your feedback"
    style={input}
    onChange={(e) => setUserFeedback(e.target.value)}
  />
  
  <Button style={button} onClick={() => submitFeedback()}>
    Submit Feedback
  </Button>

  <Text style={text}>
    If you have any questions, feel free to reach out.
  </Text>
</Section>

<Text style={links}>
  <Link style={link} href="/security-audit">Your security audit log</Link> ・{" "}
  <Link style={link} href="/contact-support">Contact support</Link>
</Text>

<Text style={footer}>
  CareBridge, Maharashtra - 415311
</Text>

 
export default EmailTemplate;
 
const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};
 
const container = {
  width: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};
 
const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};
 
const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};
 
const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};
 
const button = {
  fontSize: "24px",
  backgroundColor: "#28a745",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "0.75em 1.5em",
};
 
const links = {
  textAlign: "center" as const,
};
 
const link = {
  color: "#0366d6",
  fontSize: "12px",
};
 
const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "60px",
};