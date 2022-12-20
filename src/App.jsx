import * as React from "react";

import {
  Button,
  Container,
  Textarea,
  Box,
  Text,
  Stack,
  useToast,
} from "@chakra-ui/react";

const App = () => {
  const [signature, setSignature] = React.useState(
    "Surgery Left : Prohylatic (preventive) Mastectomy"
  );
  const toast = useToast();

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignatureEmpty = () => {
    setSignature('Please add treatments and/or diagnosis to generate a signature');
  }
  const handleSignatureFilled = () => {
    setSignature('Surgery Left : Prohylatic (preventive) Mastectomy');
  }

  const Toast = () => {
    return (
      <a
        onClick={() =>
          copyToClipBoard(signature)
        }
      >
        <Button
          w={300}
          marginBlock={3}
          colorScheme="facebook"
          onClick={() =>
            toast({
              title: "Signature Saved!",
              status: "success",
              duration: 3000,
              isClosable: true,
            })
          }
        >
          Copy current signature
        </Button>
      </a>
    );
  };

  return (
    <Box w="100%" p={4} color="black">
      <Container padding={4}>
        <Stack spacing={3}>
          <Text fontSize="3xl" color="black">
            Signature Summary
          </Text>
          <Text fontSize="xl" color="black">
            Your signature is a summary of your treatment and diagnosis, which
            informs other members about your condition. This helps other members
            of similar backgrounds to relate with your comments.{" "}
          </Text>
          <Text as="b" fontSize="lg" color="black">
            You must add treatments and diagnosis to your profile in order to
            generate your signature
          </Text>
          <a href="https://www.breastcancer.org/profile?section=your-treatments">
            <Button marginBlock={2} colorScheme="facebook" w={200}>
              Add Treatment
            </Button>
          </a>
          <a href="https://www.breastcancer.org/profile?section=your-diagnoses">
            <Button marginBlock={2} colorScheme="facebook" w={200}>
              Add Diagnosis
            </Button>
          </a>
          <Text color="black" fontSize="xl">
            Add a signature to your community post by copying your current
            signature below and pasting it to your Community Signature:
          </Text>
          <Text color="black" fontSize="lg" as="b">
            Your Current Signature:
          </Text>
        </Stack>
      </Container>
      <Container padding={4}>
        <Textarea isDisabled value={signature} resize='none'/>
        <Stack>
          <Toast />
          <a
            href="https://breastcancer.vanillastaging.com/en/profile/signature"
            rel="noopener"
            target="_blank"
          >
            <Button colorScheme="facebook" marginBlock={3} w={300}>
              <Text>
                <Text as="b"> Paste </Text>
                In Community Signature
              </Text>
            </Button>
          </a>
          <Button onClick={handleSignatureEmpty}>Empty State</Button>
          <Button
            onClick={handleSignatureFilled}
          >
            Filled State
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
export default App;
