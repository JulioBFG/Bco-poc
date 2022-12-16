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
  const [editable, setEditable] = React.useState(true);
  const [copied, setCopied] = React.useState(false);
  const [hasSignature, setHasSignature] = React.useState(false);
  const [signature, setSignature] = React.useState('');
  const [shallowSignature, setShallowSignature] = React.useState('');

  const Toast = () => {
    const toast = useToast()
    return (
      <a onClick={handleSignatureSubmit}>
      <Button
      colorScheme="blue"
      marginBlock={2}
        onClick={() =>
          toast({
            title: 'Signature Saved!',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        }
      >
        Save
      </Button>
      </a>
    )
  }


  const handleSignatureButton = () => {
    setHasSignature(!hasSignature);
  };

  const handleSignature = (e) => {
    setShallowSignature(e);
  };

  const handleSignatureSubmit = () => {
    setSignature(shallowSignature);
  }

  return (
    <Box  w="100%" p={4} color="black">
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
          <Text color="black" fontSize="xl">
            Add a signature to your comments by following these steps:
          </Text>
          <Text color="black" fontSize="lg" as="b">
            1. Copy Signature Summary
          </Text>
        </Stack>
      </Container>
      {hasSignature ? (
        <Container padding={4}>
          <Textarea disabled placeholder="Current Signature" value={signature} />
          <Stack spacing={3}>
            <Text fontSize="lg" color="black" as="b">
              Update Your Signature
            </Text>
            <Box>
              <Text fontSize="xl" color="black">
                1. Visit your Signature Summary here
              </Text>
              <Text fontSize="xl" color="black">
                2. Copy your Signature
              </Text>
              <Text fontSize="xl" color="black">
                3. Paste it in the box below
              </Text>
              <Text fontSize="xl" color="black">
                4. Save
              </Text>
            </Box>
            <Text fontSize="xl" color="black" as="b">
              Signature
            </Text>
            <Textarea
              editable={editable}
              placeholder="Paste your signature here"
              
              onChange={e=> handleSignature(e.target.value)}
            />
            <Toast />
          </Stack>
        </Container>
      ) : (
        <Container padding={4}>
          <Textarea editable={editable} />
          <Button marginBlock={2} colorScheme="blue">
            Copy
          </Button>
          {copied && (
            <Text fontSize="lg" as="b" color="green">
              Copied!
            </Text>
          )}
          <Stack>
            <Text color="black" fontSize="lg" as="b">
              2. Paste signature in your{" "}
              <Text
                color="black"
                fontSize="lg"
                as="b"
                textDecoration={"underline"}
              >
                <a href="https://breastcancer.vanillastaging.com/en/profile/signature">Community Signature</a>
              </Text>{" "}
              page
            </Text>
            <Text
              color="black"
              fontSize="lg"
              as="b"
              textDecoration={"underline"}
            >
              <a href="/summary">Signature Summary</a>
            </Text>
            <Text
              color="black"
              fontSize="lg"
              as="b"
              textDecoration={"underline"}
            >
              <a href="/tx">Add Tx</a>
            </Text>
            <Text
              color="black"
              fontSize="lg"
              as="b"
              textDecoration={"underline"}
            >
              <a href="/dx">Add Dx</a>
            </Text>
          </Stack>
        </Container>
      )}
      <Button
        marginBlock={2}
        colorScheme="blue"
        onClick={handleSignatureButton}
      >
        Empty/ or W signature
      </Button>
    </Box>
  );
};
export default App;
