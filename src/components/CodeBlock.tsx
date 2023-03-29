import React, { Fragment, FC, useState } from "react";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyToClipboard from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box } from "@mui/material";

interface Props {
  inline?: boolean | undefined;
  className?: string | undefined;
  value: string;
}
const CodeBlock: FC<Props> = ({ inline, className, value }) => {
  const lang = className ? className.replace("language-", "") : "";
  const [styleTooltip, setStyleTooltip] = useState({
    opacity: "0",
    visiblity: "hidden",
  });

  const handleClick = () => {
    setStyleTooltip({ opacity: "1", visiblity: "visible" });
    setTimeout(function () {
      setStyleTooltip({ opacity: "0", visiblity: "hidden" });
    }, 3000);
  };
  console.log(vscDarkPlus);

  return inline ? (
    <code>{value}</code>
  ) : (
    <Fragment>
      <Box
        sx={{
          backgroundColor: "#203744",
          color: "white",
          display: "flex",
          padding: 1,
        }}
      >
        <Box>{lang ? lang : ""}</Box>
        <Box sx={{ display: "flex", marginLeft: "auto" }}>
          <div style={styleTooltip}>Copied!</div>
          <CopyToClipboard text={value} onCopy={() => handleClick()}>
            <ContentCopyIcon fontSize="small" />
          </CopyToClipboard>
        </Box>
      </Box>
      <SyntaxHighlighter
        language={lang ? lang : "javascript"}
        style={vscDarkPlus}
        customStyle={{ marginTop: 0 }}
      >
        {value}
      </SyntaxHighlighter>
    </Fragment>
  );
};
export default CodeBlock;
