import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Alignment,
  Autoformat,
  Bold,
  Code,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
  BlockQuote,
  CloudServices,
  CodeBlock,
  Essentials,
  FindAndReplace,
  Font,
  Heading,
  Highlight,
  HorizontalLine,
  GeneralHtmlSupport,
  AutoImage,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Base64UploadAdapter,
  PictureEditing,
  Indent,
  IndentBlock,
  TextPartLanguage,
  AutoLink,
  Link,
  LinkImage,
  List,
  ListProperties,
  TodoList,
  MediaEmbed,
  Mention,
  PageBreak,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SpecialCharacters,
  SpecialCharactersEssentials,
  Style,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  WordCount,
  SourceEditing,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { toast } from "react-toastify";
import { Mail, Send, Plus, X } from "lucide-react";

export default function Message({ service, formData }) {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [from, setFrom] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLive, setIsLive] = useState(true);
  const [testEmail, setTestEmail] = useState([""]);

  // const url = import.meta.env.VITE_API_BASE_URL;
  const url = "https://zrrz3dl8-8000.uks1.devtunnels.ms/";

  const editorRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!service) return;
    // console.log("body", body);
    setIsSubmitting(true);

    try {
      const response = await fetch(`${url}/api/send-email/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: body,
          from,
          subject: subject,
          service,
          isLive,
          testEmail: isLive ? undefined : testEmail.filter((email) => email.trim() !== ""),
          filters: {
            state: formData.state,
            gender: formData.gender,
            homeowner: formData.homeowner,
            date_from: formData.dateRange.from,
            date_to: formData.dateRange.to,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Error Sending Email!, Please try again");
      }

      toast.success("Email(s) Sent Successfully!!!");
      setBody("");
      setSubject("");
      setIsOpen(false);
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error submitting email:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }

      toast.error("There was an error sending the email(s).");
      setIsSubmitting(false);
    }
  };

  const addTestEmail = () => {
    setTestEmail([...testEmail, ""]);
  };

  const removeTestEmail = (index) => {
    const updatedEmails = testEmail.filter((_, i) => i !== index);
    setTestEmail(updatedEmails);
  };

  const handleTestEmailChange = (index, value) => {
    const updatedEmails = [...testEmail];
    updatedEmails[index] = value;
    setTestEmail(updatedEmails);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Send Message
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="p-6 flex flex-row items-center justify-between border-b">
          <DialogTitle className="text-2xl font-semibold">Create Message</DialogTitle>
          <div className="flex items-center space-x-2">
            <Label htmlFor="live-mode" className="text-sm font-medium">
              {isLive ? "Live Mode" : "Test Mode"}
            </Label>
            <Switch id="live-mode" checked={isLive} onCheckedChange={setIsLive} />
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex-grow flex flex-col p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium">
              Subject
            </Label>
            <Input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter message subject"
              required
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="from" className="text-sm font-medium">
              From
            </Label>
            <Input
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Enter sender's name"
              required
              className="w-full"
              type="email"
            />
          </div>
          {!isLive && (
            <div className="space-y-2">
              <Label className="text-sm font-medium">Test Emails</Label>
              {testEmail.map((email, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => handleTestEmailChange(index, e.target.value)}
                    placeholder="Enter test email address"
                    required={!isLive}
                    className="flex-grow"
                  />
                  {index > 0 && (
                    <Button type="button" variant="ghost" size="icon" onClick={() => removeTestEmail(index)}>
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" variant="outline" size="sm" onClick={addTestEmail} className="mt-2">
                <Plus className="w-4 h-4 mr-2" /> Add Another Email
              </Button>
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="body" className="text-sm font-medium">
              Body
            </Label>
            <div className="border rounded-md">
              <CKEditor
                editor={ClassicEditor}
                config={{
                  toolbar: {
                    shouldNotGroupWhenFull: true,
                    items: [
                      // --- Document-wide tools ----------------------------------------------------------------------
                      "undo",
                      "redo",
                      "|",
                      "importWord",
                      "exportWord",
                      "exportPdf",
                      "|",
                      "formatPainter",
                      "caseChange",
                      "findAndReplace",
                      "selectAll",
                      "wproofreader",
                      "|",
                      "insertTemplate",
                      "tableOfContents",
                      "|",

                      // --- "Insertables" ----------------------------------------------------------------------------

                      "link",
                      "insertImage",
                      "ckbox",
                      "insertTable",
                      "blockQuote",
                      "mediaEmbed",
                      "codeBlock",
                      "pageBreak",
                      "horizontalLine",
                      "specialCharacters",
                      "-",

                      // --- Block-level formatting -------------------------------------------------------------------
                      "heading",
                      "style",
                      "|",

                      // --- Basic styles, font and inline formatting -------------------------------------------------------
                      "bold",
                      "italic",
                      "underline",
                      "strikethrough",
                      {
                        label: "Basic styles",
                        icon: "text",
                        items: [
                          "fontSize",
                          "fontFamily",
                          "fontColor",
                          "fontBackgroundColor",
                          "highlight",
                          "superscript",
                          "subscript",
                          "code",
                          "|",
                          "textPartLanguage",
                          "|",
                        ],
                      },
                      "removeFormat",
                      "|",

                      // --- Text alignment ---------------------------------------------------------------------------
                      "alignment",
                      "|",

                      // --- Lists and indentation --------------------------------------------------------------------
                      "bulletedList",
                      "numberedList",
                      "multilevelList",
                      "todoList",
                      "|",
                      "outdent",
                      "indent",
                      "sourceEditing",
                    ],
                  },
                  plugins: [
                    Alignment,
                    Autoformat,
                    AutoImage,
                    AutoLink,
                    BlockQuote,
                    Bold,
                    CloudServices,
                    Code,
                    CodeBlock,
                    Essentials,
                    FindAndReplace,
                    Font,
                    GeneralHtmlSupport,
                    Heading,
                    Highlight,
                    HorizontalLine,
                    Image,
                    ImageCaption,
                    ImageInsert,
                    ImageResize,
                    ImageStyle,
                    ImageToolbar,
                    ImageUpload,
                    Base64UploadAdapter,
                    Indent,
                    IndentBlock,
                    Italic,
                    Link,
                    LinkImage,
                    List,
                    ListProperties,
                    MediaEmbed,
                    Mention,
                    PageBreak,
                    Paragraph,
                    PasteFromOffice,
                    PictureEditing,
                    RemoveFormat,
                    SpecialCharacters,
                    SpecialCharactersEssentials,
                    Strikethrough,
                    Style,
                    Subscript,
                    Superscript,
                    Table,
                    TableCaption,
                    TableCellProperties,
                    TableColumnResize,
                    TableProperties,
                    TableToolbar,
                    TextPartLanguage,
                    TextTransformation,
                    TodoList,
                    Underline,
                    WordCount,
                    SourceEditing,
                  ],
                  heading: {
                    options: [
                      { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
                      {
                        model: "heading1",
                        view: "h1",
                        title: "Heading 1",
                        class: "ck-heading_heading1",
                      },
                      {
                        model: "heading2",
                        view: "h2",
                        title: "Heading 2",
                        class: "ck-heading_heading2",
                      },
                      {
                        model: "heading3",
                        view: "h3",
                        title: "Heading 3",
                        class: "ck-heading_heading3",
                      },
                      {
                        model: "heading4",
                        view: "h4",
                        title: "Heading 4",
                        class: "ck-heading_heading4",
                      },
                      {
                        model: "heading5",
                        view: "h5",
                        title: "Heading 5",
                        class: "ck-heading_heading5",
                      },
                      {
                        model: "heading6",
                        view: "h6",
                        title: "Heading 6",
                        class: "ck-heading_heading6",
                      },
                    ],
                  },
                  htmlSupport: {
                    allow: [
                      // Enables all HTML features.
                      {
                        name: /.*/,
                        attributes: true,
                        classes: true,
                        styles: true,
                      },
                    ],
                    disallow: [
                      {
                        attributes: [
                          { key: /^on(.*)/i, value: true },
                          {
                            key: /.*/,
                            value: /(\b)(on\S+)(\s*)=|javascript:|(<\s*)(\/*)script/i,
                          },
                          { key: /.*/, value: /data:(?!image\/(png|jpeg|gif|webp))/i },
                        ],
                      },
                      { name: "script" },
                    ],
                  },
                  image: {
                    resizeOptions: [
                      {
                        name: "resizeImage:original",
                        label: "Default image width",
                        value: null,
                      },
                      {
                        name: "resizeImage:50",
                        label: "50% page width",
                        value: "50",
                      },
                      {
                        name: "resizeImage:75",
                        label: "75% page width",
                        value: "75",
                      },
                    ],
                    toolbar: [
                      "imageTextAlternative",
                      "toggleImageCaption",
                      "|",
                      "imageStyle:inline",
                      "imageStyle:wrapText",
                      "imageStyle:breakText",
                      "|",
                      "resizeImage",
                    ],
                    insert: {
                      integrations: ["upload", "assetManager", "url"],
                    },
                  },
                  list: {
                    properties: {
                      styles: true,
                      startIndex: true,
                      reversed: true,
                    },
                  },
                  link: {
                    decorators: {
                      toggleDownloadable: {
                        mode: "manual",
                        label: "Downloadable",
                        attributes: {
                          download: "file",
                        },
                      },
                    },
                    addTargetToExternalLinks: true,
                    defaultProtocol: "https://",
                  },
                  style: {
                    definitions: [
                      {
                        name: "Title",
                        element: "h1",
                        classes: ["document-title"],
                      },
                      {
                        name: "Subtitle",
                        element: "h2",
                        classes: ["document-subtitle"],
                      },
                      {
                        name: "Callout",
                        element: "p",
                        classes: ["callout"],
                      },
                      {
                        name: "Side quote",
                        element: "blockquote",
                        classes: ["side-quote"],
                      },
                      {
                        name: "Needs clarification",
                        element: "span",
                        classes: ["needs-clarification"],
                      },
                      {
                        name: "Wide spacing",
                        element: "span",
                        classes: ["wide-spacing"],
                      },
                      {
                        name: "Small caps",
                        element: "span",
                        classes: ["small-caps"],
                      },
                      {
                        name: "Code (dark)",
                        element: "pre",
                        classes: ["stylish-code", "stylish-code-dark"],
                      },
                      {
                        name: "Code (bright)",
                        element: "pre",
                        classes: ["stylish-code", "stylish-code-bright"],
                      },
                    ],
                  },
                }}
                onReady={(editor) => {
                  editorRef.current = editor;
                }}
                data={body}
                onChange={() => {
                  setBody(editorRef.current?.getData());
                }}
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2 pt-4 border-t">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                disabled={isSubmitting}
                onClick={() => {
                  setBody("");
                  setSubject("");
                  setIsOpen(false);
                }}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting} className="flex items-center gap-2">
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
