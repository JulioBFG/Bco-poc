import * as React from "react";

import {
  Button,
  Container,
  Textarea,
  Box,
  Text,
  Stack,
} from "@chakra-ui/react";

const App = () => {

  const [signature, setSignature] = React.useState("Surgery Left : Prohylatic (preventive) Mastectomy");

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <Box w="100%" p={4} color="black">
      <Container padding={4}>
        <Stack spacing={3}>
          <Text fontSize="3xl" color="black">
            Signature Summary
          </Text>
          <Text fontSize="xl" color="black">
            Your signature is a summary of your Tx and Dx, which informs other
            members about your condition. This helps other members of similar
            backgrounds to relate with your comments.{" "}
          </Text>
          <Text as="b" fontSize="lg" color="black">
            You must have Tx and Dx to generate your signature.
          </Text>
          <a href="https://www.breastcancer.org/profile?section=your-treatments">
            <Button marginBlock={2} colorScheme="facebook">
              Add Tx
            </Button>
          </a>
          <a href="https://www.breastcancer.org/profile?section=your-diagnoses">
            <Button marginBlock={2} colorScheme="facebook">
              Add Dx
            </Button>
          </a>
          <Text color="black" fontSize="xl">
            Add a signature to your comments by following these steps:
          </Text>
          <Text color="black" fontSize="lg" as="b">
            1. Copy Signature
          </Text>
        </Stack>
      </Container>
      <Container padding={4}>
        <Textarea
          isDisabled
          value="Surgery Left : Prohylatic (preventive) Mastectomy"
        />
        <Stack>
          <a
            href="https://breastcancer.vanillastaging.com/en/profile/signature"
            rel="noopener"
            target="_blank"
          >
            <Button
              colorScheme="facebook"
              marginBlock={3}
              onClick={() => copyToClipBoard("Surgery Left : Prohylatic (preventive) Mastectomy")}
            >
              <Text>
                <Text as="b"> Paste </Text>
                In Community Signature
              </Text>
            </Button>
          </a>
        </Stack>
      </Container>
    </Box>
  );
};
export default App;
