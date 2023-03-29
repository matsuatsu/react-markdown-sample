import React, { useState } from "react";
import { Grid,TextField } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import CodeBlock from "./components/CodeBlock";

function App() {
  const defaultText=`\`\`\`python
import pandas as pd
df=pd.DataFrame()
\`\`\`
  `
  const [text, setText] = useState(defaultText)

  return (
  <Grid container>
    <Grid xs={6} padding={2} height={"100vh"} bgcolor={"FloralWhite"}>
      <TextField 
        value={text} 
        onChange={(e)=>setText(e.target.value)} 
        multiline
        rows={50}
        max-rows={50}
        sx={{width:"100%",backgroundColor:"white"}}
      />
    </Grid>
    <Grid xs={6} padding={2}>
        <ReactMarkdown 
          children={text} 
          components={{
            code({inline,className,...props}) {
              return <CodeBlock
                  inline={inline}
                  className={className}
                  value={String(props.children)}
              />
            }          
          }}
        />
    </Grid>
  </Grid>
  )
}

export default App
