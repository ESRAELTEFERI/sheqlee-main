import React, { useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  Modifier,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";
import {
  // FaBold,
  // FaItalic,
  FaStrikethrough,
  FaListUl,
  FaListOl,
  // FaAlignLeft,
  // FaSuperscript,
  // FaSubscript,
} from "react-icons/fa"; // Import Font Awesome icons
import styles from "./RichTextField.module.css";

const RichTextField = ({
  label,
  placeholder,
  value = "",
  onChange,
  required,
}) => {
  const [editorState, setEditorState] = useState(
    value
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(value)))
      : EditorState.createEmpty()
  );

  const customStyleMap = {
    SUPERSCRIPT: { verticalAlign: "super", fontSize: "smaller" },
    SUBSCRIPT: { verticalAlign: "sub", fontSize: "smaller" },
  };

  const toolbarOptions = [
    {
      type: "inline",
      style: "BOLD",
      icon: (
        <span
          style={{
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          B
        </span>
      ),
      title: "Bold",
    },
    {
      type: "inline",
      style: "ITALIC",
      icon: (
        <span
          style={{ fontSize: "16px", fontWeight: "500", fontStyle: "italic" }}
        >
          I
        </span>
      ),
      title: "Italic",
    },
    {
      type: "inline",
      style: "STRIKETHROUGH",
      icon: (
        <FaStrikethrough
          style={{ fontSize: "14px", fontWeight: "400", marginBottom: "4px" }}
        />
      ),
      title: "Strikethrough",
    },
    {
      type: "divider",
    },
    {
      type: "block",
      style: "unordered-list-item",
      icon: <FaListUl />,
      title: "Bullet List",
    },
    {
      type: "block",
      style: "ordered-list-item",
      icon: <FaListOl />,
      title: "Numbered List",
    },
    {
      type: "divider",
    },
    // {
    //   type: "align",
    //   style: "left",
    //   icon: <FaAlignLeft />,
    //   title: "Align Left",
    // },
    {
      type: "align",
      style: "left",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
        >
          <rect x="3" y="5" width="18" height="3" />
          <rect x="3" y="10" width="12" height="3" />
          <rect x="3" y="15" width="18" height="3" />
        </svg>
      ),
      title: "Align Left",
    },

    {
      type: "divider",
    },
    {
      type: "inline",
      style: "SUPERSCRIPT",
      icon: (
        <span style={{ fontSize: "16px", fontWeight: "500" }}>
          A<sup>2</sup>
        </span>
      ),
      title: "Superscript",
    },
    {
      type: "inline",
      style: "SUBSCRIPT",
      icon: (
        <span style={{ fontSize: "16px", fontWeight: "500" }}>
          A<sub>2</sub>
        </span>
      ),
      title: "Subscript",
    },
  ];

  const handleEditorChange = (state) => {
    setEditorState(state);

    if (typeof onChange === "function") {
      const content = JSON.stringify(convertToRaw(state.getCurrentContent()));
      onChange(content);
    }
  };

  const toggleInlineStyle = (style) => {
    handleEditorChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleAlignment = (alignment) => {
    const selection = editorState.getSelection();
    const content = editorState.getCurrentContent();

    const contentWithAlignment = Modifier.setBlockData(content, selection, {
      textAlign: alignment,
    });

    const newEditorState = EditorState.push(
      editorState,
      contentWithAlignment,
      "change-block-data"
    );

    setEditorState(newEditorState);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <div className={styles.toolbar}>
        {toolbarOptions.map((option, index) => {
          if (option.type === "divider") {
            return <div key={index} className={styles.divider}></div>;
          }
          return (
            <button
              key={index}
              onClick={() => {
                if (option.type === "inline") {
                  toggleInlineStyle(option.style);
                } else if (option.type === "align") {
                  toggleAlignment(option.style);
                } else {
                  handleEditorChange(
                    RichUtils.toggleBlockType(editorState, option.style)
                  );
                }
              }}
              className={styles.toolbarButton}
              title={option.title}
            >
              {option.icon}
            </button>
          );
        })}
      </div>
      <div className={styles.editorContainer}>
        <Editor
          editorState={editorState}
          onChange={handleEditorChange}
          placeholder={placeholder}
          customStyleMap={customStyleMap}
        />
      </div>
    </div>
  );
};

export default RichTextField;
