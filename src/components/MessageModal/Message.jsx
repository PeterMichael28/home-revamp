import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  SelectAll,
  BlockQuote,
  ListCommand,
  List,
  Link,
  Font,
  FontFamily,
  Alignment,
  SourceEditing,
  Markdown,
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

export default function Message({ service }) {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [from, setFrom] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLive, setIsLive] = useState(true);
  const [testEmail, setTestEmail] = useState([""]);

  const url = import.meta.env.VITE_API_BASE_URL;

  const editorRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!service) return;
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
          testEmail: isLive ? undefined : testEmail.filter(email => email.trim() !== "")
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
            <Switch
              id="live-mode"
              checked={isLive}
              onCheckedChange={setIsLive}
            />
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
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeTestEmail(index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addTestEmail}
                className="mt-2"
              >
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
                  items: [
                    "selectAll",
                    "undo",
                    "redo",
                    "bold",
                    "italic",
                    "blockQuote",
                    "uploadImage",
                    "imageUpload",
                    "heading",
                    "indent",
                    "outdent",
                    "link",
                    "numberedList",
                    "bulletedList",
                    "mediaEmbed",
                    "insertTable",
                    "tableColumn",
                    "tableRow",
                    "mergeTableCells",
                    "fontSize",
                    "fontFamily",
                    "fontColor",
                    "fontBackgroundColor",
                    "fontFamily",
                    "|",
                    "alignment",
                    "sourceEditing",
                  ],
                },
                plugins: [
                  Font,
                  Bold,
                  Essentials,
                  Italic,
                  Mention,
                  Paragraph,
                  Undo,
                  SelectAll,
                  BlockQuote,
                  ListCommand,
                  List,
                  Link,
                  FontFamily,
                  Alignment,
                  SourceEditing,
                  Markdown,
                ],
                heading: {
                  options: [
                    { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
                    { model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
                    { model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
                    { model: "heading3", view: "h3", title: "Heading 3", class: "ck-heading_heading3" },
                    { model: "heading4", view: "h4", title: "Heading 4", class: "ck-heading_heading4" },
                    { model: "heading5", view: "h5", title: "Heading 5", class: "ck-heading_heading5" },
                    { model: "heading6", view: "h6", title: "Heading 6", class: "ck-heading_heading6" },
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
