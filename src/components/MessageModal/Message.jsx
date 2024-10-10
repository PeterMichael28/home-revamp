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
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "react-toastify";

export default function Message({ service }) {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const url = import.meta.env.VITE_API_BASE_URL;

  const editorRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!service) return;
    setIsSubmitting(true);
    // console.log("hello", { body: body, subject: subject });
    try {
      const response = await fetch(`${url}/api/send-email/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: body, subject: subject, service }),
      });

      if (!response.ok) {
        throw new Error("Error Sending Email!, Please try again");
      }
      // console.log(error);
      toast.success("Email Sent Successfully!!!");
      setBody("");
      setSubject("");
      setIsOpen(false);
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error submitting email:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }

      toast.error("There was an error sending the email.");
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Send Message</Button>
      </DialogTrigger>
      <DialogContent className=" h-fit py-10 flex flex-col p-0 w-full md:max-w-[800px]">
        <DialogHeader className="p-6 flex flex-row items-center justify-between">
          <DialogTitle>Create Message</DialogTitle>
          <DialogClose asChild>
            {/* <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button> */}
          </DialogClose>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex-grow flex flex-col p-6 ">
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-xl font- medium">
              Subject
            </Label>
            <Input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter message subject"
              required
            />
          </div>
          <div className="space-y-2 flex flex-col mt-5">
            <Label htmlFor="body" className="text-xl font- medium">
              Body
            </Label>
            {/* <Textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter message body"
              className="flex-grow"
              required
            /> */}

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
          <div className="flex justify-end space-x-2 mt-7">
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
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
