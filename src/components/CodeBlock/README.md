## CodeBlock

Syntax-highlighted code (Prism, Night Owl palette) with line numbers and a Copy button.

Fenced code blocks in MDX (```` ```bash ````) render through this component automatically via the `pre` mapping in `root-wrapper.js`. Use it directly in JSX or in MDX when you need a collapsible block or when the code lives in a JS string.

### Usage

```jsx
import Code from "../components/CodeBlock";

<Code codeString="mesheryctl system start" language="bash" />

// Collapsible, hidden behind a "Show Code" checkbox. `name` must be unique on the page.
<Code name="button-variants" collapsible code={codeExamples.buttonVariants} />
```

In MDX, pass multi-line code as a template literal. A shell line continuation must be written as `\\`, because a lone `\` before a newline is a JavaScript line continuation and is silently dropped:

```mdx
<Code language="bash" codeString={`kubectl exec --namespace=istio-system \\
  my-pod -- curl -X POST http://localhost:15000/logging?level=debug`} />
```

### Props

| Prop          | Type    | Default | Description                                            |
| ------------- | ------- | ------- | ------------------------------------------------------ |
| `codeString`  | string  |         | Code to render. Takes precedence over `code`.          |
| `code`        | string  |         | Alias of `codeString`.                                 |
| `language`    | string  | `jsx`   | Prism language (`bash`, `yaml`, `json`, `go`, ...).    |
| `collapsible` | boolean | `false` | Hide the code behind a "Show Code" checkbox.           |
| `name`        | string  |         | Unique id for the collapsible checkbox.                |

### Layout

```
CodeBlockWrapper (div)   vertical rhythm: margin 1em 0, zeroed as first/last child
├── CopyButton           pinned top-right, inset 0.625rem
└── Pre (pre.prism-code) margin 0, padding 0.75rem 1rem, scrolls horizontally
    └── .token-line > LineNo + tokens
```

Line numbers are shown only when a block has more than one line: a lone "1" numbers nothing and costs width that a shell command can use.

The Copy button overlays the code, so it must never hide a line the reader cannot get back:

- **Pointer devices** (`@media (hover: hover)`): the button is transparent until the block is hovered or the button is focused, so nothing is covered at rest.
- **Touch devices** (`@media (hover: none)`): there is no hover, so the button stays visible and `Pre` keeps a `4.5rem` gutter clear of it. That gutter is `margin-right`, not `padding-right`: a scroll container's end padding is not part of its scrollable area in Chrome, so padding leaves the last characters stranded under the button at full scroll.

Keep both halves of that rule in place when changing the button's size or position.

`CodeBlockWrapper`, `Pre`, `LineNo`, and `CopyButton` are exported. To restyle a block from a parent, interpolate them as styled-components selectors instead of targeting `pre` or `button` tags, so the override survives markup changes:

```js
import { LineNo, Pre } from "../../CodeBlock";

const Wrapper = styled.div`
  ${Pre} { height: 6rem; }
  ${LineNo} { display: none; }
`;
```
