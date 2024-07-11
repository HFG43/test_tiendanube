import React from "react";
import { Badge, Title, Card, Text, Button, Alert, Box } from "@nimbus-ds/components";
import "@nimbus-ds/styles/dist/index.css";
import Navbar from "./components/navbar/navbar";

const App = () => {
  const onClickButton = () => {
    alert("hello world!");
  }

  return (
    <>
      <Navbar />
      <Box display="flex" flexDirection="column" gap={4}>
      <Badge count="+99" theme="light" />
      <Title as="h1">My simple app</Title>
      <Alert appearance="primary" title="Hello world">
        This is a simple alert to show Nimbus components
        <Button onClick={onClickButton}>Click me</Button>
      </Alert>
      <Card>
        <Text fontSize="base">
          This is a sample paragraph inside a Card component.
        </Text>
      </Card>
    </Box>
    </>
  )
}

export default App
