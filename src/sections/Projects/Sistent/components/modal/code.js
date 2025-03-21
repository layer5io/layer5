import React from "react";
import { SistentLayout } from "../../sistent-layout";
import { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalButtonDanger,
  ModalButtonPrimary,
  ModalButtonSecondary,
  ModalFooter,
  SistentThemeProvider,
  TextField,
  Typography,
} from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import { CodeBlock } from "../button/code-block";
import { ActionBox } from "../../sistent.style";

const CustomInput = ({ label, text, style }) => (
  <Box style={{ marginBottom: "16px", ...style }}>
    <Typography variant="subtitle1" gutterBottom>
      {label}
    </Typography>
    <TextField
      label={text}
      variant="outlined"
      style={{
        width: "100%"
      }}
    />
  </Box>
);

const codes = [
  `  <Button variant="contained" onClick={handleOpen}>
        Open Modal
    </Button>
    <Modal open={open} closeModal={handleClose} title="Modal Title">
        <ModalBody>
            <div>
                This action is irreversible! Are you sure you want to delete this team?
            </div>
        </ModalBody>
        <ModalFooter variant="filled">
            <ActionBox>
                <ModalButtonSecondary onClick={handleClose}>
                    Cancel
                </ModalButtonSecondary>
                <ModalButtonDanger onClick={handleClose}>
                    Delete
                </ModalButtonDanger>
            </ActionBox>
        </ModalFooter>
    </Modal>`,
  `  <Button variant="contained" onClick={handleActionOpen}>Open Action Modal</Button>
    <Modal
        open={actionOpen}
        closeModal={handleActionClose}
        title="Action Modal Title"
    >
        <ModalBody>
            <CustomInput text="Name" />
            <CustomInput text="Email" />
            <CustomInput text="Assign Organizations" />
        </ModalBody>
        <ModalFooter variant="filled">
            <ActionBox>
                <ModalButtonSecondary onClick={handleActionClose}>
                    Cancel
                </ModalButtonSecondary>
                <ModalButtonPrimary onClick={handleActionClose}>
                    Save
                </ModalButtonPrimary>
            </ActionBox>
        </ModalFooter>
    </Modal>`,
];

const ModalCode = () => {
  const [open, setOpen] = useState(false);
  const [actionOpen, setActionOpen] = useState(false);
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleActionOpen = () => {
    setActionOpen(true);
  };

  const handleActionClose = () => {
    setActionOpen(false);
  };

  return (
    <SistentLayout title="Modal">
      <div className="content">
        <a id="Identity">
          <h2>Modal</h2>
        </a>
        <p>
          A modal is a dialog box or popup, displayed over the current page.
          Modals are used to grab the user's attention and provide important
          information.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/modal"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/modal")}
            title="Overview"
          />
          {/* <TabButton
            className={
              location.pathname ===
                "/projects/sistent/components/modal/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/modal/guidance")
            }
            title="Guidance"
          /> */}
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/modal/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/modal/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <p>
              Modals provide a focused way to capture user attention for important
              actions or information. They temporarily disable the main interface
              until the user responds to the modal dialog.
            </p>
            
            <a id="Modal Props">
              <h2>Modal Props</h2>
            </a>
            <div className="showcase">
              <div className="table-responsive">
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #ddd' }}>Prop</th>
                      <th style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #ddd' }}>Type</th>
                      <th style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #ddd' }}>Default</th>
                      <th style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #ddd' }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}><code>open</code></td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>boolean</td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>false</td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>Controls the visibility of the modal</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}><code>closeModal</code></td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>function</td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>required</td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>Callback function triggered when the modal is closed</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}><code>title</code></td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>string</td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>&quot;&quot;</td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>Text displayed in the modal header</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <a id="Modal Body Props">
              <h3>ModalBody Props</h3>
            </a>
            <div className="showcase">
              <div className="table-responsive">
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #ddd' }}>Prop</th>
                      <th style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #ddd' }}>Type</th>
                      <th style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #ddd' }}>Default</th>
                      <th style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #ddd' }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}><code>children</code></td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>node</td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>required</td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>Content to display in the modal body</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <a id="Modal Footer Props">
              <h3>ModalFooter Props</h3>
            </a>
            <div className="showcase">
              <div className="table-responsive">
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #ddd' }}>Prop</th>
                      <th style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #ddd' }}>Type</th>
                      <th style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #ddd' }}>Default</th>
                      <th style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #ddd' }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}><code>variant</code></td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>string</td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>&quot;outlined&quot;</td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>Footer style variant. Options: &quot;outlined&quot;, &quot;filled&quot;</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}><code>children</code></td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>node</td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>required</td>
                      <td style={{ padding: '8px 12px', borderBottom: '1px solid #ddd' }}>Content to display in the footer, typically action buttons</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <a id="Usage Example">
              <h2>Basic Usage</h2>
            </a>
            <div className="showcase">
              <CodeBlock name="import-example" code={`import { 
  Button, 
  Modal, 
  ModalBody, 
  ModalFooter, 
  ModalButtonSecondary, 
  ModalButtonPrimary 
} from "@layer5/sistent";

// State to control modal visibility
const [isOpen, setIsOpen] = useState(false);

// Handlers for opening/closing modal
const handleOpen = () => setIsOpen(true);
const handleClose = () => setIsOpen(false);`} />
            </div>
            
            <a id="Confirmation Modal">
              <h2>Confirmation Modal</h2>
            </a>
            <div className="showcase">
              <div className="items">
                <Button 
                  variant="contained" 
                  onClick={handleOpen}
                  style={{ 
                    fontFamily: '"Qanelas Soft", sans-serif',
                    textTransform: 'none' // This prevents all-caps that can sometimes make text appear cut off
                  }}
                >
                  Open Modal
                </Button>
                <Modal open={open} closeModal={handleClose} title="Modal Title">
                  <ModalBody>
                    <div>
                      This action is irreversible! Are you sure you want to
                      delete this team?
                    </div>
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonSecondary onClick={handleClose}>
                        Cancel
                      </ModalButtonSecondary>
                      <ModalButtonDanger onClick={handleClose}>
                        Delete
                      </ModalButtonDanger>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
              <CodeBlock name="confirmation-modal" code={codes[0]} />
            </div>
            <h2>Action Modal</h2>
            <p>
              Action modals help users carry out specific tasks. These would
              naturally involve more steps than just confirming or rejecting an
              action. They may include forms, links, and feature specific
              elements that ensure that users complete crucial tasks along their
              given flow. They will usually have an icon at the top left corner
              of the modal to signify what the purpose of this modal is in
              relation to the given flow as well as help users familiarize with
              said custom icons for easy identification across our solutions
              however, this might not be applicable in all cases.
            </p>
            <div className="showcase">
              <div className="items">
                <Button 
                  variant="contained" 
                  onClick={handleActionOpen}
                  style={{ 
                    fontFamily: '"Qanelas Soft", sans-serif',
                    textTransform: 'none'
                  }}
                >
                  Open Action Modal
                </Button>
                <Modal
                  open={actionOpen}
                  closeModal={handleActionClose}
                  title="Action Modal Title"
                >
                  <ModalBody>
                    <CustomInput text="Name" />
                    <CustomInput text="Email" />
                    <CustomInput
                      text="Assign Organizations"
                    />
                  </ModalBody>
                  <ModalFooter variant="filled">
                    <ActionBox>
                      <ModalButtonSecondary onClick={handleActionClose}>
                        Cancel
                      </ModalButtonSecondary>
                      <ModalButtonPrimary onClick={handleActionClose}>
                        Save
                      </ModalButtonPrimary>
                    </ActionBox>
                  </ModalFooter>
                </Modal>
              </div>
              <CodeBlock name="action-modal" code={codes[1]} />
            </div>
          </SistentThemeProvider>
        </div>
      </div>
    </SistentLayout>
  );
};

export default ModalCode;
