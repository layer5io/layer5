import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import {
    SistentThemeProvider,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
    Radio,
    FormControl,
    InputLabel,
    FormGroup,
    RadioGroup,
} from "@sistent/sistent";
import { FormHelperText } from "@mui/material";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const FormControlGuidance = () => {
    const location = useLocation();
    const { isDark } = useStyledDarkMode();
    const [category, setCategory] = React.useState("frontend");
    const [priority, setPriority] = React.useState("low");
    const [region] = React.useState("us");

    return (
        <SistentLayout title="FormControl">
            <div className="content">
                <a id="Identity">
                    <h2>FormControl</h2>
                </a>
                <p>
                    The <code>FormControl</code> component provides context and grouping
                    for form elements such as labels, inputs, helper text, and error
                    messages. It manages layout, state propagation (like error, disabled,
                    and required), and accessibility for its children.
                </p>

                <div className="filterBtns">
                    <TabButton
                        className={
                            location.pathname === "/projects/sistent/components/formcontrol"
                                ? "active"
                                : ""
                        }
                        onClick={() => navigate("/projects/sistent/components/formcontrol")}
                        title="Overview"
                    />
                    <TabButton
                        className={
                            location.pathname ===
                                "/projects/sistent/components/formcontrol/guidance"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            navigate("/projects/sistent/components/formcontrol/guidance")
                        }
                        title="Guidance"
                    />
                    <TabButton
                        className={
                            location.pathname ===
                                "/projects/sistent/components/formcontrol/code"
                                ? "active"
                                : ""
                        }
                        onClick={() =>
                            navigate("/projects/sistent/components/formcontrol/code")
                        }
                        title="Code"
                    />
                </div>

                <div className="main-content">
                    <p>
                        FormControl simplifies building accessible, consistent forms by
                        providing shared state (error, disabled, required) to all its
                        descendant components. This avoids repetitive individual prop
                        passing on each child.
                    </p>

                    <a id="Best Practices">
                        <h2>Best Practices</h2>
                    </a>

                    <h3>When to Use FormControl</h3>
                    <p>
                        Use <code>FormControl</code> to wrap related form elements that
                        share the same state. This is especially useful when you need to:
                    </p>
                    <ul>
                        <li>
                            Group a label, input, and helper text as a single logical unit
                        </li>
                        <li>
                            Propagate states like <code>error</code>, <code>disabled</code>,
                            or <code>required</code> to multiple children at once
                        </li>
                        <li>Ensure accessible connections between labels and inputs</li>
                        <li>Maintain consistent vertical spacing in forms</li>
                    </ul>

                    <h3>Use Cases</h3>
                    <ul>
                        <li>Select dropdowns with labels and helper text</li>
                        <li>Checkbox groups with shared error handling</li>
                        <li>Radio button groups with fieldset semantics</li>
                        <li>Custom input fields requiring consistent layout</li>
                    </ul>

                    <a id="State Management">
                        <h2>State Management</h2>
                    </a>
                    <p>
                        FormControl propagates several states to its children. Use these to
                        control the visual appearance and behavior of grouped form elements.
                    </p>
                    <ul>
                        <li>
                            <code>error</code> – Marks the control and its children as
                            invalid, typically turning them red
                        </li>
                        <li>
                            <code>disabled</code> – Disables all child controls, preventing
                            user interaction
                        </li>
                        <li>
                            <code>required</code> – Marks the control as required, adding an
                            asterisk to the label
                        </li>
                        <li>
                            <code>fullWidth</code> – Makes the control span the full width of
                            its container
                        </li>
                    </ul>

                    <h3>Required Field</h3>
                    <p>
                        When using the <code>required</code> prop, an asterisk is
                        automatically added to the label.
                    </p>
                    <Row $Hcenter className="image-container">
                        <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                            <FormControl sx={{ width: "200px" }} required>
                                <InputLabel id="category-select-label">Category</InputLabel>
                                <Select
                                    labelId="category-select-label"
                                    id="category-select"
                                    value={category}
                                    label="Category"
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <MenuItem value="frontend">Frontend</MenuItem>
                                    <MenuItem value="backend">Backend</MenuItem>
                                    <MenuItem value="devops">DevOps</MenuItem>
                                </Select>
                                <FormHelperText>This field is required</FormHelperText>
                            </FormControl>
                        </SistentThemeProvider>
                    </Row>

                    <h3>Error State</h3>
                    <p>
                        The <code>error</code> prop signals validation failure. The label,
                        input border, and helper text will reflect the error state.
                    </p>
                    <Row $Hcenter className="image-container">
                        <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                            <FormControl sx={{ width: "200px" }} error>
                                <InputLabel id="priority-select-label">Priority</InputLabel>
                                <Select
                                    labelId="priority-select-label"
                                    id="priority-select"
                                    value={priority}
                                    label="Priority"
                                    onChange={(e) => setPriority(e.target.value)}
                                >
                                    <MenuItem value="low">Low</MenuItem>
                                    <MenuItem value="medium">Medium</MenuItem>
                                    <MenuItem value="high">High</MenuItem>
                                </Select>
                                <FormHelperText>Please select a priority level</FormHelperText>
                            </FormControl>
                        </SistentThemeProvider>
                    </Row>

                    <h3>Disabled State</h3>
                    <p>
                        The <code>disabled</code> prop prevents interaction with all child
                        elements.
                    </p>
                    <Row $Hcenter className="image-container">
                        <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                            <FormControl sx={{ width: "200px" }} disabled>
                                <InputLabel id="region-select-label">Region</InputLabel>
                                <Select
                                    labelId="region-select-label"
                                    id="region-select"
                                    value={region}
                                    label="Region"
                                >
                                    <MenuItem value="us">US</MenuItem>
                                    <MenuItem value="eu">EU</MenuItem>
                                </Select>
                                <FormHelperText>Region selection is disabled</FormHelperText>
                            </FormControl>
                        </SistentThemeProvider>
                    </Row>

                    <a id="Grouping Controls">
                        <h2>Grouping Controls</h2>
                    </a>

                    <h3>Checkbox Groups</h3>
                    <p>
                        Wrap <code>FormGroup</code> inside <code>FormControl</code> to
                        create semantically grouped checkboxes with shared error handling.
                    </p>
                    <Row $Hcenter className="image-container">
                        <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                            <FormControl component="fieldset" error>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox defaultChecked />}
                                        label="Read"
                                    />
                                    <FormControlLabel control={<Checkbox />} label="Write" />
                                    <FormControlLabel control={<Checkbox />} label="Execute" />
                                </FormGroup>
                                <FormHelperText>
                                    At least two permissions are required
                                </FormHelperText>
                            </FormControl>
                        </SistentThemeProvider>
                    </Row>

                    <h3>Radio Groups</h3>
                    <p>
                        Combine <code>FormControl</code> with <code>RadioGroup</code> for
                        accessible radio button sets.
                    </p>
                    <Row $Hcenter className="image-container">
                        <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                            <FormControl component="fieldset">
                                <RadioGroup defaultValue="standard">
                                    <FormControlLabel
                                        value="standard"
                                        control={<Radio />}
                                        label="Standard"
                                    />
                                    <FormControlLabel
                                        value="express"
                                        control={<Radio />}
                                        label="Express"
                                    />
                                    <FormControlLabel
                                        value="overnight"
                                        control={<Radio />}
                                        label="Overnight"
                                    />
                                </RadioGroup>
                                <FormHelperText>Choose a shipping method</FormHelperText>
                            </FormControl>
                        </SistentThemeProvider>
                    </Row>

                    <a id="Styling">
                        <h2>Styling Guidelines</h2>
                    </a>
                    <ul>
                        <li>
                            Use <code>fullWidth</code> for form controls that should stretch
                            across the available space
                        </li>
                        <li>
                            Use <code>margin=&quot;normal&quot;</code> or{" "}
                            <code>margin=&quot;dense&quot;</code> to control vertical spacing
                        </li>
                        <li>
                            Use <code>size=&quot;small&quot;</code> on inner components for
                            compact forms
                        </li>
                        <li>
                            Always provide <code>FormHelperText</code> for error states to
                            explain what went wrong
                        </li>
                        <li>
                            Use <code>component=&quot;fieldset&quot;</code> when grouping
                            checkboxes or radios for semantic correctness
                        </li>
                    </ul>
                </div>
            </div>
        </SistentLayout>
    );
};

export default FormControlGuidance;
