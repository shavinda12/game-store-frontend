import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface ExpandableTextProps {
  children: string | undefined;
}

const ExpandableText = ({ children }: ExpandableTextProps) => {
  const limit = 300;
  if (!children) return null;

  if (children.length <= limit) {
    <Text>{children}</Text>;
  }

  const [expanded, setExpanded] = useState(false);
  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <>
      <Text>
        {summary}
        <Button
          size="xs"
          colorScheme="yellow"
          mx={3}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "show less" : "show more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
